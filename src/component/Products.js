import React, { useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import Axios from "axios";


//  import image1 from './gallery/error/error1.png';
//  import image2 from './gallery/error/error2.png';
//  import image3 from './gallery/error/error3.png';
//  import image4 from './gallery/error/error4.png';
import blank from './gallery/error/error5.png';
import f11 from './gallery/frames/f1/f11.jpg';
import f12 from './gallery/frames/f1/f12.jpg';
import f21 from './gallery/frames/f2/f21.jpg';
import f22 from './gallery/frames/f2/f22.jpg';
import f23 from './gallery/frames/f2/f23.jpg';
import f24 from './gallery/frames/f2/f24.jpg';
import f31 from './gallery/frames/f3/f31.jpg';
import f32 from './gallery/frames/f3/f32.jpg';
import f41 from './gallery/frames/f4/f41.jpg';
import f42 from './gallery/frames/f4/f42.jpg';
import f51 from './gallery/frames/f5/f51.jpg';
import f61 from './gallery/frames/f6/f61.jpg';
import f62 from './gallery/frames/f6/f62.jpg';
import f63 from './gallery/frames/f6/f63.jpg';
import f71 from './gallery/frames/f7/f71.jpg';
import f72 from './gallery/frames/f7/f72.jpg';
import f81 from './gallery/frames/f8/f81.jpg';
import f91 from './gallery/frames/f9/f91.jpg';
import f92 from './gallery/frames/f9/f92.jpg';
import f101 from './gallery/frames/f10/f101.jpg';
import f102 from './gallery/frames/f10/f102.jpg';
import f103 from './gallery/frames/f10/f103.jpg';
import f111 from './gallery/frames/f11/f111.jpg';
import f112 from './gallery/frames/f11/f112.jpg';
import f113 from './gallery/frames/f11/f113.jpg';
import f114 from './gallery/frames/f11/f114.jpg';
import f121 from './gallery/frames/f12/f121.jpg';
import f131 from './gallery/frames/f13/f131.jpg';
import f141 from './gallery/frames/f14/f141.jpg';
import f142 from './gallery/frames/f14/f142.jpg';
import f143 from './gallery/frames/f14/f143.jpg';
import f144 from './gallery/frames/f14/f144.jpg';
import f151 from './gallery/frames/f15/f151.jpg';
import f152 from './gallery/frames/f15/f152.jpg';
import f161 from './gallery/frames/f16/f161.jpg';
import f162 from './gallery/frames/f16/f162.jpg';
import f163 from './gallery/frames/f16/f163.jpg';
import f164 from './gallery/frames/f16/f164.jpg';
import f171 from './gallery/frames/f17/f171.jpg';
import f172 from './gallery/frames/f17/f172.jpg';
import f173 from './gallery/frames/f17/f173.jpg';
import f181 from './gallery/frames/f18/f181.jpg';
import f182 from './gallery/frames/f18/f182.jpg';
import dt1 from './gallery/dogtag/dt1.jpg';
import dt2 from './gallery/dogtag/dt2.jpg';
import dt3 from './gallery/dogtag/dt3.jpg';
import dt4 from './gallery/dogtag/dt4.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Products() {
   

    let { productId } = useParams();
    const [currentImage, setCurrentImage] = useState('');
    const [currentImage1, setCurrentImage1] = useState('');
    const [currentImage2, setCurrentImage2] = useState('');
    const [currentImage3, setCurrentImage3] = useState('');
    const [currentImage4, setCurrentImage4] = useState('');
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDeletePrice, setCurrentDeletePrice] = useState('');
    const [currentPriceDiscount, setCurrentPriceDiscount] = useState('');
    const [productSizeS, setProductSizeS] = useState('');
    const [productSizeM, setProductSizeM] = useState('');
    const [productSizeL, setProductSizeL] = useState('');
    const [productSizeXL, setProductSizeXL] = useState('');
    const [PriceS, setPriceS] = useState('');
    const [PriceM, setPriceM] = useState('');
    const [PriceL, setPriceL] = useState('');
    const [PriceXL, setPriceXL] = useState('');
    const [PriceDeleteS, setPriceDeleteS] = useState('');
    const [PriceDeleteM, setPriceDeleteM] = useState('');
    const [PriceDeleteL, setPriceDeleteL] = useState('');
    const [PriceDeleteXL, setPriceDeleteXL] = useState('');

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
        let L;
        let XL;
        let priceS;
        let priceM;
        let priceL;
        let priceXL;
        let priceDeleteS;
        let priceDeleteM;
        let priceDeleteL;
        let priceDeleteXL;

        //  let image1;
        // let image2;
        // let image3;
        // let image4;
        switch (productId) {
            case '1':
                mainImage = f11;
                setCurrentImage1(f11);
                setCurrentImage2(f12);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Wedding Photo Frame';
                caption = 'Resin Photo Frame for Home Decor Personalized Gift Customized with Your Photos & detail with [Clear Groovy Easel Stand]';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '2':
                mainImage = f21;
                setCurrentImage1(f21);
                setCurrentImage2(f22);
                setCurrentImage3(f23);
                setCurrentImage4(f24);
                heading = 'Maha Mrityunjaya Frame';
                caption = 'Classy Artz Maha Mrityunjaya Resin Mantra Frame for Office Table. Handmade Maha Mrityunjaya Resin Mantra Frame for Home';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '899';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1599';
                priceDeleteXL = '1699';
                break;
            case '3':
                mainImage = f31;
                setCurrentImage1(f31);
                setCurrentImage2(f32);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Rose Preserved Frame';
                caption = 'A timeless beauty captured in resin, preserving the elegance of natures masterpiece. Perfect for adding a touch of floral charm to any space.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '849';
                priceDeleteM = '949';
                L = '8';
                priceL = '1349';
                priceDeleteL = '1449';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '4':
                mainImage = f41;
                setCurrentImage1(f41);
                setCurrentImage2(f42);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Rose Preserved Frame [2]';
                caption = 'A timeless beauty captured in resin, preserving the elegance of natures masterpiece. Perfect for adding a touch of floral charm to any space.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '849';
                priceDeleteM = '949';
                L = '8';
                priceL = '1349';
                priceDeleteL = '1449';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '5':
                mainImage = f51;
                setCurrentImage1(f51);
                setCurrentImage2(blank);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Anniversary Photo Frame';
                caption = 'Resin Photo Frame for Home Decor Personalized Gift Customized with Your Photos & detail with [Clear Groovy Easel Stand]';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '6':
                mainImage = f61;
                setCurrentImage1(f61);
                setCurrentImage2(f62);
                setCurrentImage3(f63);
                setCurrentImage4(blank);
                heading = 'Birthday Photo Frame';
                caption = 'Capture cherished memories with this elegant frame, perfect for preserving special moments and adding a personalized touch to any celebration.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '7':
                mainImage = f71;
                setCurrentImage1(f71);
                setCurrentImage2(f72);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Family Photo Frame';
                caption = 'Display your cherished family memories in style with this elegant frame, designed to add warmth and character to your home decor.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '8':
                mainImage = f81;
                setCurrentImage1(f81);
                setCurrentImage2(blank);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Resin Photo Frame';
                caption = 'Capture cherished memories with this elegant frame, perfect for preserving special moments and adding a personalized touch to any celebration.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '9':
                mainImage = f91;
                setCurrentImage1(f91);
                setCurrentImage2(f92);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Resin Photo Frame [2]';
                caption = 'Preserve your precious memories with this durable and stylish frame, crafted from high-quality resin for long-lasting beauty.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '10':
                mainImage = f101;
                setCurrentImage1(f101);
                setCurrentImage2(f102);
                setCurrentImage3(f103);
                setCurrentImage4(blank);
                heading = 'Resin Photo Frame [3]';
                caption = 'Preserve your precious memories with this durable and stylish frame, crafted from high-quality resin for long-lasting beauty.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '899';
                priceDeleteM = '999';
                L = '8';
                priceL = '1399';
                priceDeleteL = '1499';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '11':
                mainImage = f111;
                setCurrentImage1(f111);
                setCurrentImage2(f112);
                setCurrentImage3(f113);
                setCurrentImage4(f114);
                heading = 'Couple Photo Frame';
                caption = 'Celebrate love with this elegant frame designed to showcase your cherished moments together, perfect for capturing and displaying your special bond.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '12':
                mainImage = f121;
                setCurrentImage1(f121);
                setCurrentImage2(blank);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Guruji Frame';
                caption = 'Honor your spiritual guide with this special frame, designed to hold precious memories and serve as a reminder of their wisdom and teachings.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
            case '13':
                mainImage = f131;
                setCurrentImage1(f131);
                setCurrentImage2(blank);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Maha Mantra Frame';
                caption = 'Embrace the power of divine chants with this elegantly crafted frame, perfect for displaying sacred mantras and invoking spiritual blessings.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1599';
                priceDeleteXL = '1699';
                break;
            case '14':
                mainImage = f141;
                setCurrentImage1(f141);
                setCurrentImage2(f142);
                setCurrentImage3(f143);
                setCurrentImage4(f144);
                heading = 'Mool Mantra Frame';
                caption = 'Capture the essence of divine wisdom with this exquisite frame, encapsulating the profound teachings of the Mool Mantra for spiritual enlightenment and inner harmony.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '1599';
                priceDeleteXL = '1699';
                break;
            case '15':
                mainImage = f151;
                setCurrentImage1(f151);
                setCurrentImage2(f152);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Radha Krishan Frame';
                caption = 'Embrace the divine love and eternal bond of Radha and Krishna with this enchanting frame, radiating their divine presence and blissful union.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2199';
                priceDeleteXL = '2299';
                break;
            case '16':
                mainImage = f161;
                setCurrentImage1(f161);
                setCurrentImage2(f162);
                setCurrentImage3(f163);
                setCurrentImage4(f164);
                heading = 'Ganeshji Frame';
                caption = 'Invoke blessings and auspiciousness into your space with this divine frame featuring Lord Ganesha, the remover of obstacles and harbinger of good fortune.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2199';
                priceDeleteXL = '2299';
                break;
            case '17':
                mainImage = f171;
                setCurrentImage1(f171);
                setCurrentImage2(f172);
                setCurrentImage3(f173);
                setCurrentImage4(blank);
                heading = 'Shivji Frame';
                caption = 'Embrace the divine presence of Lord Shiva with this elegantly crafted frame, symbolizing strength, transformation, and the eternal cycle of creation and destruction.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2299';
                priceDeleteXL = '2399';
                break;
            
                case '18':
                mainImage = f181;
                setCurrentImage1(f181);
                setCurrentImage2(f182);
                setCurrentImage3(blank);
                setCurrentImage4(blank);
                heading = 'Gayatri Mantra Frame';
                caption = 'Radiate divine energy and spiritual essence with this enchanting frame, featuring the revered Gayatri Mantra, a timeless hymn to the supreme cosmic power, illuminating the path to enlightenment.';
                price = '499';
                deletePrice = '599';
                discount = '17%';
                S = '4';
                priceS = '499';
                priceDeleteS = '599';
                M = '6';
                priceM = '799';
                priceDeleteM = '799';
                L = '8';
                priceL = '1199';
                priceDeleteL = '1299';
                XL = '12';
                priceXL = '2499';
                priceDeleteXL = '2599';
                break;
                case '19':
                mainImage = dt1;
                setCurrentImage1(dt1);
                setCurrentImage2(dt2);
                setCurrentImage3(dt3);
                setCurrentImage4(dt4);
                heading = 'Dog Tag';
                caption = 'Resin-Cast Dog Tags: Infusing durability and style, these meticulously crafted tags ensure your pets identity remains intact while adding a touch of uniqueness to their ensemble. [Quantity - 1 piece]';
                price = '300';
                deletePrice = '350';
                discount = '15%';
                S = '1.5';
                priceS = '299';
                priceDeleteS = '349';
                M = '2';
                priceM = '349';
                priceDeleteM = '399';
                L = '1.5';
                priceL = '299';
                priceDeleteL = '349';
                XL = '2';
                priceXL = '349';
                priceDeleteXL = '399';
                break;
            default:
                setCurrentImage(blank);
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
        setProductSizeL(L);
        setProductSizeXL(XL);
        setPriceS(priceS);
        setPriceM(priceM);
        setPriceL(priceL);
        setPriceXL(priceXL);
        setPriceDeleteS(priceDeleteS);
        setPriceDeleteM(priceDeleteM);
        setPriceDeleteL(priceDeleteL);
        setPriceDeleteXL(priceDeleteXL);
    }, [productId]);
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
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorMedium = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorLarge = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = '';
        document.getElementById('sizeLarge').style.color = 'rgb(255, 64, 0)';
        document.getElementById('sizeExtraLarge').style.color = '';
    }
    const colorExtraLarge = () => {
        document.getElementById('sizeSmall').style.color = '';
        document.getElementById('sizeMedium').style.color = '';
        document.getElementById('sizeLarge').style.color = '';
        document.getElementById('sizeExtraLarge').style.color = 'rgb(255, 64, 0)';
    }

    function imageChange(id) {
        switch (id) {
            case '1':
                setCurrentImage(currentImage1);
                break;
            case '2':
                setCurrentImage(currentImage2);
                break;
            case '3':
                setCurrentImage(currentImage3);
                break;
            case '4':
                setCurrentImage(currentImage4);
                break;
            default:
                setCurrentImage(currentImage1);

        }
    }
    return (
        <div>
            <div className="productParent">
                <div className="productGallery">
                    <div className="productGalleryChild">
                        <div className="productImg">
                            <img src={currentImage} alt="" />
                        </div>
                        <div className="productImgChild">
                            <img src={currentImage1} alt="" onMouseOver={() => imageChange('1')} />
                            <img src={currentImage2} alt="" onMouseOver={() => imageChange('2')} />
                            <img src={currentImage3} alt="" onMouseOver={() => imageChange('3')} />
                            <img src={currentImage4} alt="" onMouseOver={() => imageChange('4')} />
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
                            <div className="sizeS" id='sizeMedium' onClick={() => { handleSize(PriceM, PriceDeleteM); colorMedium() }}><p id='s'>{productSizeM} inch</p><p className="productPriceInside">Rs.{PriceM}</p></div>
                            <div className="sizeS" id='sizeLarge' onClick={() => { handleSize(PriceL, PriceDeleteL); colorLarge() }}><p id='s'>{productSizeL} inch</p><p className="productPriceInside">Rs.{PriceL}</p></div>
                            <div className="sizeS" id='sizeExtraLarge' onClick={() => { handleSize(PriceXL, PriceDeleteXL); colorExtraLarge() }}><p id='s'>{productSizeXL} inch</p><p className="productPriceInside">Rs.{PriceXL}</p></div>
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

export default Products;
