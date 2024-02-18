import React, { useEffect, useState } from 'react';
import './Navbar.css';
import cart from './gallery/cart.png';
import signout from './gallery/logout.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [cartData, setCartData] = useState([]);
  const fetchCartData = async () => {
    try {
        const response = await axios.get('http://localhost:5001/cartdata');
        setCartData(response.data);
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
};
useEffect(() => {
  // Fetch cart data when the component mounts
  fetchCartData();
}, []);


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand">THE RESIN ROOM</h1>

          <div><Link to="/cart"><img id="cartresponsive" src={cart} alt="#" /></Link> 
          {cartData.length > 0 && (
  <div className='cartitemcountresponive'>
    <p id='cartlengthresponsive'>{cartData.length}</p>
  </div>
)}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/start">Home</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/product/19">Dog Tags</a></li>
                  <li><a className="dropdown-item" href="/diwali">Diwali Items</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/main">More</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/order">Orders</a>
              </li>
            </ul>
          
           <Link to="/cart"><img id="cart" src={cart} alt="#" /></Link> 
           {cartData.length > 0 && (
            <div className='cartitemcount'>
              <p id='cartlengthnumber'>{cartData.length}</p>
            </div>
           )}
           <div className="signoutparent">
           <Link to="/"><img id='signout' src={signout} alt="#" /></Link>
           </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
