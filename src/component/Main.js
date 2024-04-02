import React, { useEffect, useState } from 'react'
import './Main.css';
import special from './gallery/special.png';
import specialmobile from './gallery/specialmobile.jpg';
import frame from './gallery/frame.jpeg';
import coster from './gallery/coster.png';
import nameplate from './gallery/name plate.png';
import lamp from './gallery/lamp.png';
import keyring from './gallery/key ring.jpg';
import jewellery from './gallery/jewellery.jpg';
import table from './gallery/table.jpg';
import clock from './gallery/clock.jpg';
import cakestand from './gallery/cakestand.jpg';
import varmala from './gallery/varmala.jpg';
import platter from './gallery/Ring platter.jpeg';
import hanging from './gallery/car hanging.jpg';
import v1 from './gallery/video/main video/candels video.mp4';
import v2 from './gallery/video/main video/carhanging video.mp4';
import v3 from './gallery/video/main video/frame video.mp4';
import v4 from './gallery/video/main video/keyring video.mp4';
import v5 from './gallery/video/main video/jewellery video.mp4';
import v6 from './gallery/video/main video/frame3 video.mp4';
import v7 from './gallery/video/main video/tlight video.mp4';
import v8 from './gallery/video/main video/frame2 video.mp4';

import { Link } from 'react-router-dom/cjs/react-router-dom';

//  import { BrowserRouter as Router, Link } from 'react-router-dom';



export default function Main() {
   const [imageSrc, setImageSrc] = useState('');
   useEffect(() => {
      const updateImageSrc = () => {
         const screenWidth = window.innerWidth;
         if (screenWidth < 600) {
            setImageSrc(specialmobile);
         } else {
            setImageSrc(special);
         }
      };
      updateImageSrc();
   }, []);


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
            <p>Shop by <span>Collections</span></p>
         </div>
         <div className="category">
            <div className="frame">
               <Link style={{ color: 'black', textDecoration: 'none' }} id="link" to='/category/1'>
                  <img id='frameImg' src={frame} alt="" />
                  <p id='frameId'>Frames</p>
                  <p id='frameIdOver'>Frames</p>
               </Link>
            </div>

            <div className="coster">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/2'>
                  <img id='costerImg' src={coster} alt="" />
                  <p id='costerId'>Coasters</p>
                  <p id='costerIdOver'>Coasters</p>
               </Link>
            </div>
            <div className="nameplate">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/3'>
                  <img id='nameplateImg' src={nameplate} alt="" />
                  <p id='nameplateId'>Name Plates</p>
                  <p id='nameplateIdOver'>Plates</p>
               </Link>
            </div>
            <div className="lamp">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/4'>
                  <img id='lampImg' src={lamp} alt="" />
                  <p id='lampId'>Lamps</p>
                  <p id='lampIdOver'>Lamps</p>
               </Link>
            </div>
            <div className="keyring">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/5'>
                  <img id='keyringImg' src={keyring} alt="" />
                  <p id='keyringId'>Key Rings</p>
                  <p id='keyringIdOver'>Rings</p>
               </Link>
            </div>
            <div className="jewellery">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/6'>
                  <img id='jewelleryImg' src={jewellery} alt="" />
                  <p id='jewelleryId'>Jewellery</p>
                  <p id='jewelleryIdOver'>Jewellery</p>
               </Link>
            </div>

            <div className="productVideo">
               <div className="productVideoInner">
                  <div className="video1" >
                     <video id="v1" loop muted autoPlay playsInline src={v1}></video>
                  </div>
                  <div className="video1" >
                     <video id="v2" loop muted autoPlay playsInline src={v2}></video>
                  </div>
                  <div className="video1" >
                     <video id="v3" loop muted autoPlay playsInline src={v3}></video>
                  </div>
                  <div className="video1" >
                     <video id="v4" loop muted autoPlay playsInline src={v4}></video>
                  </div>
                  <div className="video1" >
                     <video id="v5" loop muted autoPlay playsInline src={v5}></video>
                  </div>
                  <div className="video1" >
                     <video id="v6" loop muted autoPlay playsInline src={v6}></video>
                  </div>
                  <div className="video1" >
                     <video id="v7" loop muted autoPlay playsInline src={v7}></video>
                  </div>
                  <div className="video1" >
                     <video id="v8" loop muted autoPlay playsInline src={v8}></video>
                  </div>
               </div>
            </div>

            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/7'>
                  <img id='tableImg' src={table} alt="" />
                  <p id='tableId'>Tables</p>
                  <p id='tableIdOver'>Tables</p>
               </Link>
            </div>
            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/8'>
                  <img id='tableImg' src={hanging} alt="" />
                  <p id='tableId'>Car Hangings</p>
                  <p id='tableIdOver'>Hangings</p>
               </Link>
            </div>
            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/9'>
                  <img id='tableImg' src={cakestand} alt="" />
                  <p id='tableId'>Cake Stands</p>
                  <p id='tableIdOver'>Stands</p>
               </Link>
            </div>
            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/10'>
                  <img id='tableImg' src={varmala} alt="" />
                  <p id='tableId'>Varmalas</p>
                  <p id='tableIdOver'>Varmalas</p>
               </Link>
            </div>
            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/11'>
                  <img id='tableImg' src={platter} alt="" />
                  <p id='tableId'>Platters</p>
                  <p id='tableIdOver'>Platters</p>
               </Link>
            </div>
            <div className="table">
               <Link style={{ color: 'black', textDecoration: 'none' }} to='/category/12'>
                  <img id='tableImg' src={clock} alt="" />
                  <p id='tableId'>Clocks</p>
                  <p id='tableIdOver'>Clocks</p>
               </Link>
            </div>
         </div>
      </div>

   )
}
