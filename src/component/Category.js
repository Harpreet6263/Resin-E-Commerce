import React, { useEffect } from 'react'
import './Category.css';
import f1 from './gallery/frames/f1.jpg';
import f2 from './gallery/frames/f2.jpg';
import f3 from './gallery/frames/f3.jpg';
import f4 from './gallery/frames/f4.jpg';
import f5 from './gallery/frames/f5.jpg';
import f6 from './gallery/frames/f6.jpg';
import f7 from './gallery/frames/f7.jpg';
import f8 from './gallery/frames/f8.jpg';
import f9 from './gallery/frames/f9.jpg';
import f10 from './gallery/frames/f10.jpg';
import f11 from './gallery/frames/f11.jpg';
import f12 from './gallery/frames/f12.jpg';
import f13 from './gallery/frames/f13.jpg';
import f14 from './gallery/frames/f14.jpg';
import f15 from './gallery/frames/f15.jpg';
import f16 from './gallery/frames/f16.jpg';
import f17 from './gallery/frames/f17.jpg';
import f18 from './gallery/frames/f18.jpg';
import c1 from './gallery/coaster/c1.jpg';
import c2 from './gallery/coaster/c2.jpg';
import c3 from './gallery/coaster/c3.jpg';
import c4 from './gallery/coaster/c4.jpg';
import c5 from './gallery/coaster/c5.jpg';
import c6 from './gallery/coaster/c6.jpg';
import n1 from './gallery/namePlate/n1.jpg';
import l1 from './gallery/lamps/l1.jpg';
import kr1 from './gallery/keyring/kr1.jpg';
import kr2 from './gallery/keyring/kr2.jpg';
import kr3 from './gallery/keyring/kr3.jpg';
import kr4 from './gallery/keyring/kr4.jpg';
import kr5 from './gallery/keyring/kr5.jpg';
import kr6 from './gallery/keyring/kr6.jpg';
import kr7 from './gallery/keyring/kr7.jpg';
import kr8 from './gallery/keyring/kr8.jpg';
import kr9 from './gallery/keyring/kr9.jpg';
import kr10 from './gallery/keyring/kr10.jpg';
import kr11 from './gallery/keyring/kr11.jpg';
import kr12 from './gallery/keyring/kr12.jpg';
import j1 from './gallery/jewellery/j1.jpg';
import j2 from './gallery/jewellery/j2.jpg';
import j3 from './gallery/jewellery/j3.jpg';
import j4 from './gallery/jewellery/j4.jpg';
import j5 from './gallery/jewellery/j5.jpg';
import j6 from './gallery/jewellery/j6.jpg';
import j7 from './gallery/jewellery/j7.jpg';
import j8 from './gallery/jewellery/j8.jpg';
import j9 from './gallery/jewellery/j9.jpg';
import j10 from './gallery/jewellery/j10.jpg';
import j11 from './gallery/jewellery/j11.jpg';
import j12 from './gallery/jewellery/j12.jpg';
import t1 from './gallery/table/t1.jpg';
import t2 from './gallery/table/t2.jpg';
import t3 from './gallery/table/t3.jpg';
import t4 from './gallery/table/t4.jpg';
import t5 from './gallery/table/t5.jpg';
import t6 from './gallery/table/t6.jpg';
import cs1 from './gallery/cake stand/cs1.jpg';
import ch1 from './gallery/car hanging/ch1.jpg';
import ch2 from './gallery/car hanging/ch2.jpg';
import ch3 from './gallery/car hanging/ch3.jpg';
import ch4 from './gallery/car hanging/ch4.jpg';
import ch5 from './gallery/car hanging/ch5.jpg';
import ch6 from './gallery/car hanging/ch6.jpg';
import diya1 from './gallery/diwali/diwa/diwa1.jpg';
import diya2 from './gallery/diwali/diwa/diwa2.jpg';
import diya3 from './gallery/diwali/diwa/diwa3.jpg';
import diya4 from './gallery/diwali/diwa/diwa4.jpg';
import diya5 from './gallery/diwali/diwa/diwa5.jpg';
import diya6 from './gallery/diwali/diwa/diwa6.jpg';
import diya7 from './gallery/diwali/diwa/diwa7.jpg';
import diya8 from './gallery/diwali/diwa/diwa8.jpg';
import diya9 from './gallery/diwali/diwa/diwa9.jpg';
import diya10 from './gallery/diwali/diwa/diwa10.jpg';
import diya11 from './gallery/diwali/diwa/diwa11.jpg';
import diya12 from './gallery/diwali/diwa/diwa12.jpg';
import thali1 from './gallery/diwali/thali/thali1.jpg';
import thali2 from './gallery/diwali/thali/thali2.jpg';
import thali3 from './gallery/diwali/thali/thali3.jpg';
import thali4 from './gallery/diwali/thali/thali4.jpg';
import thali5 from './gallery/diwali/thali/thali5.jpg';
import thali6 from './gallery/diwali/thali/thali6.jpg';


import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
export default function Category() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    let { categoryId } = useParams();
    let content;
    switch (categoryId) {
        case '1':
            content = <div className='parentCategory'>
                <h1>Frames</h1>
                <div className='frameCategory'>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/1'>
                        <img id='childFrameImg' src={f1} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/2'>
                        <img id='childFrameImg' src={f2} alt="" />
                         <p id='childFrameId'>Maha Mrityunjaya Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.549</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/3'>
                        <img id='childFrameImg' src={f3} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/4'>
                        <img id='childFrameImg' src={f4} alt="" />
                         <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/5'>
                        <img id='childFrameImg' src={f5} alt="" />
                         <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/6'>
                        <img id='childFrameImg' src={f6} alt="" />
                        <p id='childFrameId'>Birthday Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.649</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/7'>
                        <img id='childFrameImg' src={f7} alt="" />
                         <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/8'>
                        <img id='childFrameImg' src={f8} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/9'>
                        <img id='childFrameImg' src={f9} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/10'>
                        <img id='childFrameImg' src={f10} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/11'>
                        <img id='childFrameImg' src={f11} alt="" />
                        <p id='childFrameId'>Photo Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/12'>
                        <img id='childFrameImg' src={f12} alt="" />
                         <p id='childFrameId'>Guruji Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/13'>
                        <img id='childFrameImg' src={f13} alt="" />
                        <p id='childFrameId'>Maha Mantra Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/14'>
                        <img id='childFrameImg' src={f14} alt="" />
                         <p id='childFrameId'>Mool Mantra Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/15'>
                        <img id='childFrameImg' src={f15} alt="" />
                        <p id='childFrameId'>Radha Krishan Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/16'>
                        <img id='childFrameImg' src={f16} alt="" />
                         <p id='childFrameId'>Ganeshji Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/17'>
                        <img id='childFrameImg' src={f17} alt="" />
                        <p id='childFrameId'>Shivji Frame</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/product/18'>
                        <img id='childFrameImg' src={f18} alt="" />
                         <p id='childFrameId'>Gayatri Mantra Frame</p>
                        <p id='price'>Rs.1999 <span id='priceCut'>M.R.P: </span><del>Rs.2499</del></p>
                        </Link>
                    </div>
                </div>
            </div>
            break;
        case '2':
            content = <div className='parentCategory'>
                <h1>Coasters</h1>
                <div className='frameCategory'>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/1'> 
                        <img id='childFrameImg' src={c1} alt="" />
                        <p id='childFrameId'>Name Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/2'>
                        <img id='childFrameImg' src={c2} alt="" />
                         <p id='childFrameId'>Nail Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.549</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/3'>
                        <img id='childFrameImg' src={c3} alt="" />
                         <p id='childFrameId'>Pizza Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/4'> 
                        <img id='childFrameImg' src={c4} alt="" />
                        <p id='childFrameId'>Name Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/5'>
                        <img id='childFrameImg' src={c5} alt="" />
                         <p id='childFrameId'>Dining Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/6'>
                        <img id='childFrameImg' src={c6} alt="" />
                         <p id='childFrameId'>Coffee Coaster</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.649</del></p>
                        </Link>
                    </div>
                </div>
            </div>
            break;
        case '3':
            content = <div className='parentCategory'>
            <h1>Name Plates</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/7'>
                    <img id='childFrameImg' src={n1} alt="" />
                     <p id='childFrameId'>Name Plate</p>
                    <p id='price'>Rs.1999 <span id='priceCut'>M.R.P: </span><del>Rs.2499</del></p>
                    </Link>
                </div>
            </div>
            <h4>More plates coming soon..</h4>
        </div>
        break;
        case '4':
            content = <div className='parentCategory'>
            <h1>Lamps</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcoaster/8'>
                    <img id='childFrameImg' src={l1} alt="" />
                     <p id='childFrameId'>Ocean Lamp</p>
                    <p id='price'>Rs.3499 <span id='priceCut'>M.R.P: </span><del>Rs.4499</del></p>
                    </Link>
                </div>
            </div>
            <h4>More lamps coming soon..</h4>
        </div>
        break;
        case '5':
            content = <div className='parentCategory'>
            <h1>Key Chains</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/1'>
                    <img id='childFrameImg' src={kr1} alt="" />
                     <p id='childFrameId'>Glitter keychain</p>
                    <p id='price'>Rs.199 <span id='priceCut'>M.R.P: </span><del>Rs.249</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/2'> 
                    <img id='childFrameImg' src={kr2} alt="" />
                    <p id='childFrameId'>Solid grey keychain</p>
                    <p id='price'>Rs.199 <span id='priceCut'>M.R.P: </span><del>Rs.249</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/3'>
                    <img id='childFrameImg' src={kr3} alt="" />
                     <p id='childFrameId'>Dirty blue keychain</p>
                    <p id='price'>Rs.199 <span id='priceCut'>M.R.P: </span><del>Rs.249</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/4'>
                    <img id='childFrameImg' src={kr4} alt="" />
                     <p id='childFrameId'>Breach pour keychain</p>
                    <p id='price'>Rs.349 <span id='priceCut'>M.R.P: </span><del>Rs.449</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/5'> 
                    <img id='childFrameImg' src={kr5} alt="" />
                    <p id='childFrameId'>Rose petal keychain</p>
                    <p id='price'>Rs.299 <span id='priceCut'>M.R.P: </span><del>Rs.399</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/6'>
                    <img id='childFrameImg' src={kr6} alt="" />
                     <p id='childFrameId'>Glitter keychain</p>
                    <p id='price'>Rs.349 <span id='priceCut'>M.R.P: </span><del>Rs.449</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/7'>
                    <img id='childFrameImg' src={kr7} alt="" />
                     <p id='childFrameId'>Pom-Pom keychain</p>
                    <p id='price'>Rs.325 <span id='priceCut'>M.R.P: </span><del>Rs.399</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/8'> 
                    <img id='childFrameImg' src={kr8} alt="" />
                    <p id='childFrameId'>Rose patel keychain</p>
                    <p id='price'>Rs.399 <span id='priceCut'>M.R.P: </span><del>Rs.499</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/9'>
                    <img id='childFrameImg' src={kr9} alt="" />
                     <p id='childFrameId'>Ocean keychain</p>
                    <p id='price'>Rs.199 <span id='priceCut'>M.R.P: </span><del>Rs.249</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/10'>
                    <img id='childFrameImg' src={kr10} alt="" />
                    <p id='childFrameId'>Glitter keychain</p>
                    <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/11'>
                    <img id='childFrameImg' src={kr11} alt="" />
                     <p id='childFrameId'>Glitter keychain</p>
                    <p id='price'>Rs.349 <span id='priceCut'>M.R.P: </span><del>Rs.449</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/12'> 
                    <img id='childFrameImg' src={kr12} alt="" />
                    <p id='childFrameId'>Glitter keychain</p>
                    <p id='price'>Rs.349 <span id='priceCut'>M.R.P: </span><del>Rs.449</del></p>
                    </Link>
                </div>
            </div>
        </div>
        break;
        case '6':
            content = <div className='parentCategory'>
            <h1>Real Flower Jewellery</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/13'>
                    <img id='childFrameImg' src={j1} alt="" />
                     <p id='childFrameId'>Drop Pendant</p>
                    <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/14'> 
                    <img id='childFrameImg' src={j2} alt="" />
                   <p id='childFrameId'>Moon Pendant</p>
                    <p id='price'>Rs.299 <span id='priceCut'>M.R.P: </span><del>Rs.399</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/15'> 
                    <img id='childFrameImg' src={j3} alt="" />
                    <p id='childFrameId'>Heart Pendant</p>
                    <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/16'> 
                    <img id='childFrameImg' src={j4} alt="" />
                    <p id='childFrameId'>Earings combo</p>
                    <p id='price'>Rs.799 <span id='priceCut'>M.R.P: </span><del>Rs.999</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/17'> 
                    <img id='childFrameImg' src={j5} alt="" />
                    <p id='childFrameId'>Diamond Pendant</p>
                    <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/18'> 
                    <img id='childFrameImg' src={j6} alt="" />
                   <p id='childFrameId'>Moon-Butterfly combo</p>
                    <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/19'>
                    <img id='childFrameImg' src={j7} alt="" />
                     <p id='childFrameId'>Pendant combo</p>
                    <p id='price'>Rs.749 <span id='priceCut'>M.R.P: </span><del>Rs.849</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/20'>
                    <img id='childFrameImg' src={j8} alt="" />
                     <p id='childFrameId'>Round Pendant</p>
                    <p id='price'>Rs.299 <span id='priceCut'>M.R.P: </span><del>Rs.349</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/21'>
                    <img id='childFrameImg' src={j9} alt="" />
                     <p id='childFrameId'>Earning</p>
                    <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/22'> 
                    <img id='childFrameImg' src={j10} alt="" />
                    <p id='childFrameId'>Round Pandant</p>
                    <p id='price'>Rs.299 <span id='priceCut'>M.R.P: </span><del>Rs.399</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/23'>
                    <img id='childFrameImg' src={j11} alt="" />
                     <p id='childFrameId'>Pandant-Earing combo</p>
                    <p id='price'>Rs.699 <span id='priceCut'>M.R.P: </span><del>Rs.799</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/24'>
                    <img id='childFrameImg' src={j12} alt="" />
                     <p id='childFrameId'>Pandant-Earing combo</p>
                    <p id='price'>Rs.449 <span id='priceCut'>M.R.P: </span><del>Rs.499</del></p>
                    </Link>
                </div>
            </div>
        </div>
        break;
        case '7':
            content = <div className='parentCategory'>
            <h1>Tables</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/25'> 
                    <img id='childFrameImg' src={t3} alt="" />
                    <p id='childFrameId'>Pebble Table</p>
                    <p id='price'>Rs.2199 <span id='priceCut'>M.R.P: </span><del>Rs.2499</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/26'>
                    <img id='childFrameImg' src={t4} alt="" />
                     <p id='childFrameId'>Geode Table</p>
                    <p id='price'>Rs.2499 <span id='priceCut'>M.R.P: </span><del>Rs.2999</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/27'>
                    <img id='childFrameImg' src={t5} alt="" />
                     <p id='childFrameId'>Flower Table</p>
                    <p id='price'>Rs.2999 <span id='priceCut'>M.R.P: </span><del>Rs.3699</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/28'>
                    <img id='childFrameImg' src={t6} alt="" />
                     <p id='childFrameId'>Beach Table</p>
                    <p id='price'>Rs.2799 <span id='priceCut'>M.R.P: </span><del>Rs.3299</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/29'>
                    <img id='childFrameImg' src={t1} alt="" />
                     <p id='childFrameId'>Charcoal Table</p>
                    <p id='price'>Rs.2199 <span id='priceCut'>M.R.P: </span><del>Rs.2499</del></p>
                    </Link>
                </div>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/30'>
                    <img id='childFrameImg' src={t2} alt="" />
                     <p id='childFrameId'>Breakfast Table</p>
                    <p id='price'>Rs.2499<span id='priceCut'>M.R.P: </span><del>Rs.2999</del></p>
                    </Link>
                </div>
            </div>
        </div>
        break;
        case '8':
            content = <div className='parentCategory'>
                <h1>Car Hangings</h1>
                <div className='frameCategory'>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/1'> 
                        <img id='childFrameImg' src={ch1} alt="" />
                        <p id='childFrameId'>Hanging Combo</p>
                        <p id='price'>Rs.499 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/2'> 
                        <img id='childFrameImg' src={ch2} alt="" />
                        <p id='childFrameId'>Shivji Car Hanging</p>
                        <p id='price'>Rs.449 <span id='priceCut'>M.R.P: </span><del>Rs.499</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/3'>
                        <img id='childFrameImg' src={ch3} alt="" />
                         <p id='childFrameId'>Guruji Car Hanging</p>
                        <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/4'>
                        <img id='childFrameImg' src={ch4} alt="" />
                         <p id='childFrameId'>Bismillah Car Hanging</p>
                        <p id='price'>Rs.249 <span id='priceCut'>M.R.P: </span><del>Rs.299</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/5'>
                        <img id='childFrameImg' src={ch5} alt="" />
                         <p id='childFrameId'>Shri Radhe Car Hanging</p>
                        <p id='price'>Rs.649 <span id='priceCut'>M.R.P: </span><del>Rs.799</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productcarhanging/6'> 
                        <img id='childFrameImg' src={ch6} alt="" />
                        <p id='childFrameId'>Guruji Car Hanging</p>
                        <p id='price'>Rs.649 <span id='priceCut'>M.R.P: </span><del>Rs.799</del></p>
                        </Link>
                    </div>
                </div>
            </div>
            break;
        case '9':
            content = <div className='parentCategory'>
            <h1>Cake Stands</h1>
            <div className='frameCategory'>
                <div className="childFrame">
                <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/31'>
                    <img id='childFrameImg' src={cs1} alt="" />
                     <p id='childFrameId'>3 Tier Stand</p>
                    <p id='price'>Rs.1999 <span id='priceCut'>M.R.P: </span><del>Rs.2499</del></p>
                    </Link>
                </div>
            </div>
            <h4>More stands coming soon..</h4>
        </div>
        break;
        case '10':
            content = <div className='parentCategory'>
            <h4>Varmalas are coming soon..</h4>
        </div>
            break;
        case '11':
            content = <div className='parentCategory'>
            <h4>Platters coming soon..</h4>
        </div>
            break;
        case '12':
            content = <div className='parentCategory'>
            <h4>Clocks coming soon..</h4>
        </div>
            break;
        case '13':
            content = <div className='parentCategory'>
                <h1>T Light Holders</h1>
                <div className='frameCategory'>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/32'> 
                        <img id='childFrameImg' src={diya1} alt="" />
                        <p id='childFrameId'>Leaf T Light</p>
                        <p id='price'>Rs.69 <span id='priceCut'>M.R.P: </span><del>Rs.99</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/33'>
                        <img id='childFrameImg' src={diya2} alt="" />
                         <p id='childFrameId'>Mandala</p>
                        <p id='price'>Rs.79 <span id='priceCut'>M.R.P: </span><del>Rs.119</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/34'>
                        <img id='childFrameImg' src={diya3} alt="" />
                         <p id='childFrameId'>Wooden Lotus T Light</p>
                        <p id='price'>Rs.49 <span id='priceCut'>M.R.P: </span><del>Rs.99</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/35'> 
                        <img id='childFrameImg' src={diya4} alt="" />
                        <p id='childFrameId'>Lotus T Light</p>
                        <p id='price'>Rs.199 <span id='priceCut'>M.R.P: </span><del>Rs.249</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/36'>
                        <img id='childFrameImg' src={diya5} alt="" />
                         <p id='childFrameId'>Butterfly T Light</p>
                        <p id='price'>Rs.79 <span id='priceCut'>M.R.P: </span><del>Rs.99</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/37'>
                        <img id='childFrameImg' src={diya6} alt="" />
                         <p id='childFrameId'>Flower T Light</p>
                        <p id='price'>Rs.59 <span id='priceCut'>M.R.P: </span><del>Rs.99</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/38'> 
                        <img id='childFrameImg' src={diya7} alt="" />
                        <p id='childFrameId'>Square T Light</p>
                        <p id='price'>Rs.79 <span id='priceCut'>M.R.P: </span><del>Rs.99</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/39'>
                        <img id='childFrameImg' src={diya8} alt="" />
                         <p id='childFrameId'>Star T Light</p>
                        <p id='price'>Rs.89 <span id='priceCut'>M.R.P: </span><del>Rs.119</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/40'>
                        <img id='childFrameImg' src={diya9} alt="" />
                         <p id='childFrameId'>Red Crystal T Light</p>
                        <p id='price'>Rs.119 <span id='priceCut'>M.R.P: </span><del>Rs.189</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/41'> 
                        <img id='childFrameImg' src={diya10} alt="" />
                        <p id='childFrameId'>Purple Crystal T Light</p>
                        <p id='price'>Rs.119 <span id='priceCut'>M.R.P: </span><del>Rs.189</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/42'>
                        <img id='childFrameImg' src={diya11} alt="" />
                         <p id='childFrameId'>Green Crystal T Light</p>
                        <p id='price'>Rs.119 <span id='priceCut'>M.R.P: </span><del>Rs.189</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/43'>
                        <img id='childFrameImg' src={diya12} alt="" />
                         <p id='childFrameId'>Pink Crystal T Light</p>
                        <p id='price'>Rs.119 <span id='priceCut'>M.R.P: </span><del>Rs.189</del></p>
                        </Link>
                    </div>
                </div>
            </div>
            break;
         case '14':
            content = <div className='parentCategory'>
                <h1>Thalis</h1>
                <div className='frameCategory'>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/44'> 
                        <img id='childFrameImg' src={thali1} alt="" />
                        <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.799 <span id='priceCut'>M.R.P: </span><del>Rs.899</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/45'> 
                        <img id='childFrameImg' src={thali2} alt="" />
                        <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.599 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/46'>
                        <img id='childFrameImg' src={thali3} alt="" />
                         <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.599 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/47'>
                        <img id='childFrameImg' src={thali4} alt="" />
                         <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.599 <span id='priceCut'>M.R.P: </span><del>Rs.599</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/48'>
                        <img id='childFrameImg' src={thali5} alt="" />
                         <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.599 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                    <div className="childFrame">
                    <Link style={{ color: 'black', textDecoration: 'none' }} to='/productkeyring/49'> 
                        <img id='childFrameImg' src={thali6} alt="" />
                        <p id='childFrameId'>Pooja Thali</p>
                        <p id='price'>Rs.599 <span id='priceCut'>M.R.P: </span><del>Rs.699</del></p>
                        </Link>
                    </div>
                </div>
            </div>
            break;
        default:
            content = <h2>Invalid</h2>
    }

    return (
        <div>
            {content}
        </div>
    )
}
