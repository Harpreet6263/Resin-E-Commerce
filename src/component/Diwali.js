import React, { useEffect, useState } from 'react'
import './Main.css';
import special from './gallery/diwali/diwalimain.png';
import specialmobile from './gallery/diwali/diwalimobile.jpg';
import diwa from './gallery/diwali/diwa/diwa1.jpg';
import hanging from './gallery/diwali/hanging/hanging1.jpg';
import toran1 from './gallery/diwali/toran/toran1.jpg';
import toran2 from './gallery/diwali/toran/toran2.jpg';
import toran3 from './gallery/diwali/toran/toran3.jpg';
import toran4 from './gallery/diwali/toran/toran4.jpg';
import rangoli1 from './gallery/diwali/rangoli/rangoli1.jpg';
import rangoli2 from './gallery/diwali/rangoli/rangoli2.jpg';
import thali from './gallery/diwali/thali/thali5.jpg';
import shub1 from './gallery/diwali/subh/shub1.jpg';
import shub2 from './gallery/diwali/subh/shub2.jpg';
import shub3 from './gallery/diwali/subh/shub3.jpg';

import { Link } from 'react-router-dom/cjs/react-router-dom';

//  import { BrowserRouter as Router, Link } from 'react-router-dom';



export default function Diwali() {
const [imageSrc,setImageSrc] = useState('');
useEffect(() =>{
   const updateImageSrc = ()=>{
    const screenWidth = window.innerWidth;
    if(screenWidth<600){
        setImageSrc(specialmobile);
    }else{
        setImageSrc(special);
    }
   };
   updateImageSrc();
},[]);

    return (
        
        <div className='mainContainer'>
            <div className="childContainer">
                <div className="animation">
                    <img src={imageSrc} alt="/" />
                    <div className="animationText">
                    </div>
                </div>
            </div>
            <div className='shopBy'>
                <p>Diwali <span>Collections</span></p>
            </div>
            <div className="category"> 
                <div className="frame">
                <Link style={{ color: 'black', textDecoration: 'none' }} id="link" to='/category/13'>
                   <img id='frameImg' src={diwa} alt="" />
                   <p id='frameId'>T Lights</p>
                   <p id='frameIdOver'>T Lights</p>
                   </Link>
                </div>
                
                <div className="coster">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/50'>
                   <img id='costerImg' src={hanging} alt="" />
                   <p id='costerId'>Hanging</p>
                   <p id='costerIdOver'>Hanging</p>
                   </Link>
                </div>
                <div className="nameplate">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/51'>
                   <img id='nameplateImg' src={toran1} alt="" />
                   <p id='nameplateId'>Toran</p>
                   <p id='nameplateIdOver'>Toran</p>
                   </Link>
                </div>
                <div className="lamp">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/52'>
                   <img id='lampImg' src={toran2} alt="" />
                   <p id='lampId'>Toran</p>
                   <p id='lampIdOver'>Toran</p>
                   </Link>
                </div>
                <div className="keyring">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/53'>
                   <img id='keyringImg' src={toran3} alt="" />
                   <p id='keyringId'>Toran</p>
                   <p id='keyringIdOver'>Toran</p>
                   </Link>
                </div>
                <div className="jewellery">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/54'>
                   <img id='jewelleryImg' src={toran4} alt="" />
                   <p id='jewelleryId'>Toran</p> 
                   <p id='jewelleryIdOver'>Toran</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/55'>
                   <img id='tableImg' src={rangoli1} alt="" />
                   <p id='tableId'>Lotus Rangoli</p>
                   <p id='tableIdOver'>Rangoli</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/56'>
                   <img id='tableImg' src={rangoli2} alt="" />
                   <p id='tableId'>Rangoli</p>
                   <p id='tableIdOver'>Rangoli</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/14'>
                   <img id='tableImg' src={thali} alt="" />
                   <p id='tableId'>Thalis</p>
                   <p id='tableIdOver'>Thalis</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/57'>
                   <img id='tableImg' src={shub1} alt="" />
                   <p id='tableId'>Shubh Labh</p>
                   <p id='tableIdOver'>Shubh Labh</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/58'>
                   <img id='tableImg' src={shub2} alt="" />
                   <p id='tableId'>Shubh Labh</p>
                   <p id='tableIdOver'>Shubh Labh</p>
                   </Link>
                </div>
                <div className="table">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/59'>
                   <img id='tableImg' src={shub3} alt="" />
                   <p id='tableId'>Shubh Labh</p>
                   <p id='tableIdOver'>Shubh Labh</p>
                   </Link>
                </div>
            </div>
        </div>
        
    )
}
