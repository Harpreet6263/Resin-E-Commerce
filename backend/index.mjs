

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
let loggedInUsername = ''; 


app.use(express.json());
app.use(cors({
  
  origin: 'http://localhost:3000', 
  credentials: true 
}));


const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'resin'
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const trimmedUsername = username.replaceAll(" ","");


  const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';

  pool.query(sql, [trimmedUsername, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    // Check if any rows were returned from the query
    if (results.length === 0) {
      // No user found with the provided username and password
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // User found, set the loggedInUsername variable and send response
    loggedInUsername = trimmedUsername;
    res.json({ message: 'Login successful', trimmedUsername });
  });
});


app.post('/signup', (req, res) => {
  
  const { username, password, email, address, mobilenumber } = req.body;
  const trimmedUsername = username.replaceAll(" ","");
  // SQL query to check if username already exists
  const checkUserSql = `SELECT COUNT(*) as count FROM user WHERE username = ?`;
  
  // Parameters to be inserted into the check user query
  const checkUserValues = [trimmedUsername];

  // Execute the check user SQL query with the provided values
  pool.query(checkUserSql, checkUserValues, (checkUserErr, checkUserResult) => {
    if (checkUserErr) {
      console.error('Error checking user:', checkUserErr);
      return res.status(500).json({ error: 'Error checking user' });
    }

    // If username already exists, return an error
    if (checkUserResult[0].count > 0) {
      console.log('Username already exists');
      return res.status(400).json({ error: 'Username already exists' });
    }

    // If username doesn't exist, proceed to insert the new user
    // SQL query to insert user data into the database
    const userSql = `INSERT INTO user (username, password, email, address, mobilenumber) VALUES (?, ?, ?, ?, ?)`;
    
    // Parameters to be inserted into the user query
    const userValues = [trimmedUsername, password, email, address, mobilenumber];

    // Execute the user SQL query with the provided values
    pool.query(userSql, userValues, (err, userResult) => {
      if (err) {
        console.error('Error signing up:', err);
        return res.status(500).json({ error: 'Error signing up' });
      }

      console.log('User signed up successfully');

      // Once user is successfully inserted, you can proceed with creating the cart and buy tables if needed
      // SQL query to create cart table for the user
      const cartSql = `CREATE TABLE resin.cart${trimmedUsername} (Cart VARCHAR(50), Heading VARCHAR(50))`;
      pool.query(cartSql, (cartErr, cartResult) => {
        if (cartErr) {
          console.error('Error creating cart table:', cartErr);
          return res.status(500).json({ error: 'Error creating cart table' });
        }
        
        console.log(`Cart table created for user: ${trimmedUsername}`);
        
        // SQL query to create buy table for the user
        const buySql = `CREATE TABLE resin.buy${trimmedUsername} (Buy VARCHAR(50), Heading VARCHAR(50), Confirmation VARCHAR(20), PhoneNumber VARCHAR(20))`;
        pool.query(buySql, (buyErr, buyResult) => {
          if (buyErr) {
            console.error('Error creating buy table:', buyErr);
            return res.status(500).json({ error: 'Error creating buy table' });
          }
          
          console.log(`Buy table created for user: ${trimmedUsername}`);
          res.json({ message: 'User signed up successfully' });
        });
      });
    });
  });
});



// Add Current Price Route
app.post('/setDataCart', (req, res) => {
  const { currentPrice, currentHeading } = req.body; // Include currentHeading in request body

  // Verify if loggedInUsername is set
  if (!loggedInUsername) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Now you can use the loggedInUsername obtained from /login route in the query
  const userTable = `cart${loggedInUsername}`;
  const sql = `INSERT INTO ${userTable} (Cart, Heading) VALUES (?, ?)`; // Modify SQL query to insert both currentPrice and currentHeading
  pool.query(sql, [currentPrice, currentHeading], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data' });
    }
    console.log('Data inserted successfully');
    res.json({ message: 'Data received and stored successfully' });
  });
});


app.post('/setDataBuy', (req, res) => {
  const { currentPrice, currentHeading } = req.body; // Include currentHeading in request body

  // Verify if loggedInUsername is set
  if (!loggedInUsername) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Now you can use the loggedInUsername obtained from /login route in the query
  const userTable = `buy${loggedInUsername}`;
  const sql = `INSERT INTO ${userTable} (Buy, Heading) VALUES (?, ?)`; // Modify SQL query to insert both currentPrice and currentHeading
  pool.query(sql, [currentPrice, currentHeading], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data' });
    }
    console.log('Data inserted successfully');
    res.json({ message: 'Data received and stored successfully' });
  });
});


const fetchCartData = (loggedInUsername) => {
  return new Promise((resolve, reject) => {
    const userTable = `cart${loggedInUsername}`;
    const sql = `SELECT * FROM ${userTable}`;
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Define route to fetch cart data
// Define route to fetch cart data
app.get('/cartdata', async (req, res) => {
  try {
    // Check if loggedInUsername is set
    if (!loggedInUsername) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Fetch cart data using the loggedInUsername
    const cartData = await fetchCartData(loggedInUsername);
    res.json(cartData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.delete('/deleteItem/:heading', (req, res) => {
  // Extract the heading from the request parameters
  const { heading } = req.params;

  // Verify if loggedInUsername is set
  if (!loggedInUsername) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Now you can use the loggedInUsername obtained from /login route in the query
  const userTable = `cart${loggedInUsername}`;
  const sql = `DELETE FROM ${userTable} WHERE Heading = ?`; // SQL query to delete item from the cart based on its heading

  // Execute the SQL query to delete the item from the cart
  pool.query(sql, [heading], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: 'Error deleting data' });
    }
    console.log('Data deleted successfully');
    res.json({ message: 'Data deleted successfully' });
  });
});



const fetchbuyData = (loggedInUsername) => {
  return new Promise((resolve, reject) => {
    const userTable = `buy${loggedInUsername}`;
const sql = `SELECT * FROM ${userTable} WHERE Confirmation IS NULL`;

    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
app.get('/buydata', async (req, res) => {
  try {
    // Check if loggedInUsername is set
    if (!loggedInUsername) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Fetch cart data using the loggedInUsername
    const buyData = await fetchbuyData(loggedInUsername);
    res.json(buyData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/deletebuyItem/:heading', (req, res) => {
  // Extract the heading from the request parameters
  const { heading } = req.params;

  // Verify if loggedInUsername is set
  if (!loggedInUsername) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Now you can use the loggedInUsername obtained from /login route in the query
  const userTable = `buy${loggedInUsername}`;
const sql = `DELETE FROM ${userTable} WHERE Heading = ? AND (Confirmation IS NULL OR Confirmation = '')`;
// SQL query to delete item from the cart based on its heading

  // Execute the SQL query to delete the item from the cart
  pool.query(sql, [heading], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: 'Error deleting data' });
    }
    console.log('Data deleted successfully');
    res.json({ message: 'Data deleted successfully' });
  });
});




app.post('/setDataConfirm', (req, res) => {
  const confirmedData = req.body; // Assuming 'Confirmed' is sent in the request body
  const userTable = `buy${loggedInUsername}`;
  // SQL query to update the 'Confirmation' column with 'Confirmed' value
  const updateSql = `UPDATE ${userTable} SET Confirmation = 'Confirmed'`;

  // Execute the SQL query to update the Confirmation column
  pool.query(updateSql, (err, result) => {
      if (err) {
          console.error('Error updating confirmation data:', err);
          return res.status(500).json({ error: 'Error updating confirmation data' });
      }
      console.log('Confirmation data updated successfully');
      res.json({ message: 'Confirmation data updated successfully' });
  });
});




const fetchbuyconfirmData = (loggedInUsername) => {
  return new Promise((resolve, reject) => {
    const userTable = `buy${loggedInUsername}`;
const sql = `SELECT * FROM ${userTable} WHERE Confirmation = 'Confirmed'`;

    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
app.get('/cartdataconfirm', async (req, res) => {
  try {
    // Check if loggedInUsername is set
    if (!loggedInUsername) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    // Fetch cart data using the loggedInUsername
    const buyData = await fetchbuyconfirmData(loggedInUsername);
    res.json(buyData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/settoorder', (req, res) => {
  // SQL query to transfer data from cartdemo to buydemo
  const cartTable = `cart${loggedInUsername}`;
  const buyTable = `buy${loggedInUsername}`;

  const transferSql = `
    INSERT INTO ${buyTable} (Buy, Heading)
    SELECT Cart, Heading
    FROM ${cartTable}
  `;

  const clearSql = `DELETE FROM ${cartTable}`;

  // Execute the SQL query to transfer data
  pool.query(transferSql, (err, result) => {
    if (err) {
      console.error('Error transferring data:', err);
      return res.status(500).json({ error: 'Error transferring data' });
    }

    console.log('Data transferred successfully');

    // After successfully transferring data, clear the data from cartTable
    pool.query(clearSql, (clearErr, clearResult) => {
      if (clearErr) {
        console.error('Error clearing cart data:', clearErr);
        return res.status(500).json({ error: 'Error clearing cart data' });
      }

      console.log('Cart data cleared successfully');
      res.json({ message: 'Data transferred and cart cleared successfully' });
    });
  });
});


app.post('/query', (req, res) => {
  const { fname, lname, email, query } = req.body; // Include currentHeading in request body

  // Now you can use the loggedInUsername obtained from /login route in the query
  const sql = `INSERT INTO query (fname, lname, email, query) VALUES (?, ?, ?, ?)`; // Modify SQL query to insert both currentPrice and currentHeading
  pool.query(sql, [fname, lname, email, query], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data' });
    }
    console.log('Data inserted successfully');
    res.json({ message: 'Data received and stored successfully' });
  });
});

app.post('/wishlist', (req, res) => {
  const { imgName,heading,price,pricecut } = req.body; // Include currentHeading in request body

  // Now you can use the loggedInUsername obtained from /login route in the query
  const sql = `INSERT INTO wishlist (imgName,heading,price,pricecut) VALUES (?, ?, ?, ?)`; // Modify SQL query to insert both currentPrice and currentHeading
  pool.query(sql, [imgName,heading,price,pricecut], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Error inserting data' });
    }
    console.log('Data inserted successfully');
    res.json({ message: 'Data received and stored successfully' });
  });
});


const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
