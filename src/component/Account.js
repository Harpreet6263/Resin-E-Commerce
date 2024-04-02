import React, { useState } from 'react'
import user from './gallery/user.png';
import location from './gallery/location.png';
import bag from './gallery/shopping-bag.png';
import cart from './gallery/shopping-cart.png';
import tel from './gallery/telephone.png';

export default function Account() {
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const toggleHeight = () => {
        setExpanded(!expanded);
    };
    const toggleHeight2 = () => {
        setExpanded2(!expanded2);
    };
    const divStyle = {
        height: expanded ? '340px' : '60px',
        transition: 'height 0.3s ease'
    };
    const divStyle2 = {
        height: expanded2 ? '140px' : '60px',
        transition: 'height 0.3s ease'
    };

    return (
        <div>
            <div className="accountContainer">
                <div className="accountnavChild">
                    <div className="userImage">
                        <p className="profilePicture">HS</p>
                        <p className="userName">Harpreet kang</p>
                    </div>
                    <div className="accountProfileextra" style={divStyle} onClick={toggleHeight}>
                        <div className="accountProfileDetail">
                            <img src={user} alt="" />
                            <p id='prof'>My Profile</p>
                        </div>
                        <p>Phone Number:</p>
                        <p>7658026462</p>
                        <p>Email:</p>
                        <p>harpreetkang778@gmail.com</p>
                        <p>Password:</p>
                        <p>demo</p>
                        <button>Save changes</button>
                    </div>
                    <div className="accountProfileextra" style={divStyle2} onClick={toggleHeight2}>
                        <div className="accountProfileDetail">
                            <img src={location} alt="" />
                            <p>Delivery Address</p>
                        </div>
                        <p>shfjyfhtiy</p>
                        <button>Save changes</button>

                    </div>
                    <div className="accountProfilegroup">
                    <div className="accountProfile">
                        <img src={bag} alt="" />
                        <p>My Orders</p>
                    </div>
                    <div className="accountProfile">
                        <img src={cart} alt="" />
                        <p>My Cart</p>
                    </div>
                    </div>
                    <div className="accountProfile">
                        <img src={tel} alt="" />
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
