// Frontend code
// Assuming you have a function to fetch cart data and store it in a state variable

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bin from './gallery/bin.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const history = useHistory();

    
    // Function to fetch cart data
    const fetchCartData = async () => {
        try {
            const response = await axios.get('http://localhost:5001/cartdata');
            setCartData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    // Function to handle item deletion
    const handleDeleteItem = async (heading) => {
        try {
            await axios.delete(`http://localhost:5001/deleteItem/${heading}`);
            // After successful deletion, fetch updated cart data
            fetchCartData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    useEffect(() => {
        // Fetch cart data when the component mounts
        fetchCartData();
    }, []);
    const totalSum = cartData.reduce((acc, item) => acc + parseFloat(item.Cart), 0);


    const [confirmData, setConfirmData] = useState("");

    const sendtoorder = async () => {
        
        try {
            const response = await axios.post('http://localhost:5001/settoorder');
           
            setConfirmData(response.data); 
            redirect();
            
 
        } catch (error) {
            console.error('Error sending order data:', error);
        }
    }
   
    const redirect=()=>{
        history.push('/order');
    };

    return (
        
        <div className='parentCart'>
    <h2 id='cartHead'>Shopping Cart</h2>

    {cartData.length === 0 ? (
        <p id='emptyCart'>Your cart is empty</p>
    ) : (
        <>
            {cartData.map((item, index) => (
                <div className='childCart' key={index}>
                    <div>
                        <div id='cartHeading'>{item.Heading}</div>
                    </div>
                    <div>
                        <div><b>Rs.{item.Cart}</b></div>
                    </div>
                    <div>
                        <img id='trash' src={bin} alt="" onClick={() => handleDeleteItem(item.Heading)} />
                    </div>
                </div>
            ))}
            <div className="bill">
                <b>Total bill:</b> Rs. {totalSum}
            </div>
            <button id='proceedPay' onClick={sendtoorder}>Proceed to Pay</button>
        </>
    )}
</div>


    );
};

export default Cart;
