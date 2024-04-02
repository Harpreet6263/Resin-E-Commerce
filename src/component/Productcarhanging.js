import React, { useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import image1 from './gallery/error/error1.png';

import ch1 from './gallery/car hanging/ch1.jpg';
import ch2 from './gallery/car hanging/ch2.jpg';
import ch3 from './gallery/car hanging/ch3.jpg';
import ch4 from './gallery/car hanging/ch4.jpg';
import ch5 from './gallery/car hanging/ch5.jpg';
import ch6 from './gallery/car hanging/ch6.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function Productcarhanging() {

    let { productcarhangingId } = useParams();
    const [currentImage, setCurrentImage] = useState('');
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDeletePrice, setCurrentDeletePrice] = useState('');
    const [currentPriceDiscount, setCurrentPriceDiscount] = useState('');
    const [productSizeS, setProductSizeS] = useState('');
    const [productSizeM, setProductSizeM] = useState('');
    const [PriceS, setPriceS] = useState('');
    const [PriceM, setPriceM] = useState('');
    const [PriceDeleteS, setPriceDeleteS] = useState('');
    const [PriceDeleteM, setPriceDeleteM] = useState('');


    useEffect(() => {
        document.getElementById('sizeSmall').style.color = 'rgb(255, 64, 0)';

    }, []);

    useEffect(() => {
        let mainImage;
        let heading;
        let caption;
        let price;
        let deletePrice;
        let discount;
        let S;
        let M;
        let priceS;
        let priceM;
        let priceDeleteS;
        let priceDeleteM;


        switch (productcarhangingId) {
            case '1':
                mainImage = ch1;
                heading = 'Car Hanging Combo';
                caption = 'Add flair to your car with our duo combo of stylish car hangings, designed to bring charm and positivity to your travels. Handcrafted with attention to detail, these delightful pieces make for a perfect accessory ensemble to personalize your ride.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '3';
                priceS = '499';
                priceDeleteS = '599';
                M = '4';
                priceM = '899';
                priceDeleteM = '999';
                break;
                case '2':
                mainImage = ch2;
                heading = 'Shivji Car Hanging';
                caption = 'Invoke divine blessings and protection on your journeys with our intricately designed Shivji car hanging. Crafted with reverence and attention to detail, this sacred accessory brings serenity and spirituality to your car interior';
                price = '449';
                deletePrice = '499';
                discount = '10%';
                S = '3';
                priceS = '449';
                priceDeleteS = '499';
                M = '4';
                priceM = '799';
                priceDeleteM = '899';
                break;
                case '3':
                mainImage = ch3;
                heading = 'Guruji Car Hanging';
                caption = 'Capture the essence of spiritual guidance and wisdom with our Guruji car hanging. Adorn your vehicle with this reverent accessory, honoring your spiritual mentor and seeking blessings for safe travels and enlightenment on lifes journey.';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                S = '3';
                priceS = '249';
                priceDeleteS = '299';
                M = '4';
                priceM = '599';
                priceDeleteM = '699';
                break;
                case '4':
                mainImage = ch4;
                heading = 'Bismillah Car Hanging';
                caption = 'Invoke divine blessings and protection with our Bismillah car hanging. Designed with intricate detail, this sacred accessory serves as a constant reminder of Gods presence, bringing peace and tranquility to your travels';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                S = '3';
                priceS = '249';
                priceDeleteS = '299';
                M = '4';
                priceM = '599';
                priceDeleteM = '699';
                break;
                case '5':
                mainImage = ch5;
                heading = 'Shri Radhe Car Hanging';
                caption = 'Enhance your cars ambiance with our Shri Radhe car hanging. Crafted with love and devotion, this elegant accessory radiates the divine energy of Radha, symbolizing pure love and spiritual bliss.';
                price = '649';
                deletePrice = '799';
                discount = '18%';
                S = '3';
                priceS = '649';
                priceDeleteS = '799';
                M = '4';
                priceM = '999';
                priceDeleteM = '1099';
                break;
                case '6':
                mainImage = ch6;
                heading = 'Guruji Car Hanging [2]';
                caption = 'Capture the essence of spiritual guidance and wisdom with our Guruji car hanging. Adorn your vehicle with this reverent accessory, honoring your spiritual mentor and seeking blessings for safe travels and enlightenment on lifes journey.';
                price = '649';
                deletePrice = '799';
                discount = '18%';
                S = '3';
                priceS = '649';
                priceDeleteS = '799';
                M = '4';
                priceM = '999';
                priceDeleteM = '1099';
                break;
            default:
                setCurrentImage(image1);
                setCurrentHeading('Error');
                return;
        }
        setCurrentImage(mainImage);
        setCurrentHeading(heading);
        setCurrentCaption(caption);
        setCurrentPrice(price);
        setCurrentDeletePrice(deletePrice);
        setCurrentPriceDiscount(discount);
        setProductSizeS(S);
        setProductSizeM(M);
        setPriceS(priceS);
        setPriceM(priceM);
        setPriceDeleteS(priceDeleteS);
        setPriceDeleteM(priceDeleteM);

    }, [productcarhangingId]);
    const [dataCart, setDataCart] = useState("");
    const [dataBuy, setDataBuy] = useState("");
    const history = useHistory();

    const sendDataCart = async () => {
        const response = await Axios.post('http://localhost:5001/setDataCart', {
            currentPrice: currentPrice,
            currentHeading: currentHeading
        });
        setDataCart(response.data);
        window.location.reload();
    }
const sendDataBuy = async()=>{

    const response =await Axios.post('http://localhost:5001/setDataBuy', {
        currentPrice: currentPrice,
        currentHeading: currentHeading
    });
    setDataBuy(response.data);
    redirect();

}
const redirect=()=>{
    history.push('/order');
};

    const handleSize = (p, dp) => {
        setCurrentPrice(p);
        setCurrentDeletePrice(dp);
    }
    const colorSmall = () => {
        document.getElementById('sizeSmall').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeMedium').style.color = '';
    }
    const colorMedium = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = 'rgb(255, 64, 0)';
    }


    
    return (
        <div>
            <div className="productParent">
                <div className="productGallery">
                    <div className="productGalleryChild">
                        <div className="productImg">
                            <img src={currentImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="productDetail">
                    <div className="productDetailChild">
                        <h3 className="productHeading">{currentHeading}</h3>
                        <p id="productCaption">{currentCaption}</p>
                        <div className="line"></div>
                        <h4 id="productPrice">Rs.{currentPrice}<span id='productPriceCut'> M.R.P: </span><del>Rs.{currentDeletePrice}</del><span id="discountPercent">({currentPriceDiscount} OFF)</span></h4>
                        <p id="tax">inclusive of all taxes</p>
                        <p id="selectSize">SELECT SIZE</p>
                        <div className="size">
                            <div className="sizeS" id='sizeSmall' onClick={() => { handleSize(PriceS, PriceDeleteS); colorSmall() }}><p id='s'>{productSizeS} inch</p><p className="productPriceInside">Rs.{PriceS}</p></div>
                            <div className="sizeS" id='sizeMedium' onClick={() => { handleSize(PriceM, PriceDeleteM); colorMedium() }}><p id='s'>{productSizeM} inch</p><p className="productPriceInside">{PriceM}</p></div>
                        </div>
                        
                        <div className="buyCartbtn">
                        <button id='productCart' onClick={sendDataCart}>Add to Cart</button>
                            <button id='productBuy'onClick={sendDataBuy}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productcarhanging;
