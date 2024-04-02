import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import heart from './gallery/heart.png';
import heartfilled from './gallery/heart filled.png';

export default function Wishlist() {
    const [wishList, setwishList] = useState([]);
    const [currHeart, setCurrHeart] = useState(heart);
    function heartfunction(){
        if(currHeart === heart){
            setCurrHeart(heartfilled);
        }else{
            setCurrHeart(heart);
        }
        };
  return (
    <div className='parentWishList'>
    <h2 id='listItems'>Your favourite items</h2>

    {wishList.length === 0 ? (
        <p id='emptyList'>No item wishlisted</p>
    ) : (
        <>
            {wishList.map((item, index) => (
                <div className='childList' key={index}>
                     <div className="childFrame">
                    <img id='heart' src={currHeart} onClick={heartfunction} alt=""/>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/1'>
                        <img id='childFrameImg' src={item.f1} alt="" />
                        <p id='childFrameId'>{item.heading}</p>
                        <p id='price'>Rs.{item.price} <span id='priceCut'>M.R.P: </span><del>Rs.{item.pricecut}</del></p>
                        </Link>
                    </div>
                </div>
            ))}
           
        </>
    )}
</div>

  )
}
