
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './component/Main';
import Category from './component/Category';

import Productcoaster from './component/Productcoaster';
import Productkeyring from './component/Productkeyring';
import Productcarhanging from './component/Productcarhanging';
import Products from './component/Products';

import Signup from './component/Signup';
import SignIn from './SignIn';
import Cart from './component/Cart';
import Orders from './component/Orders';
import Confirmedorder from './component/Confirmedorder';
import Diwali from './component/Diwali';
import Contact from './component/Contact';




function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/main">
            <Navbar />
            <Main />
          </Route>
          <Route path="/diwali">
            <Navbar />
            <Diwali/>
          </Route>
          <Route path="/category/:categoryId">
          <Navbar/>
            <Category />
          </Route>
          <Route path="/product/:productId">
          <Navbar/>
            <Products />
          </Route>
          <Route path="/productcoaster/:productcoasterId">
          <Navbar/>
            <Productcoaster />
          </Route>
          <Route path="/productkeyring/:productkeyringId">
          <Navbar/>
            <Productkeyring />
          </Route>
          <Route path="/productcarhanging/:productcarhangingId">
          <Navbar/>
            <Productcarhanging />
          </Route>
          
          <Route path="/start">
          <Navbar/>
            <Home />
          </Route>
          <Route path="/cart">
          <Navbar/>
            <Cart />
          </Route>
          <Route path="/order">
          <Navbar/>
           <Orders/>
          </Route>
          <Route path="/confirmedorder">
          <Navbar/>
           <Confirmedorder/>
          </Route>
          <Route path="/contact">
          <Navbar/>
           <Contact/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <SignIn />

          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
