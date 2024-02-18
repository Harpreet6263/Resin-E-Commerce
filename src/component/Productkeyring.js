import React, { useEffect, useState } from 'react';
import './Product.css';
import Axios from "axios";
import { useParams } from 'react-router-dom';

import image1 from './gallery/error/error1.png';
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
import flowerhanging from './gallery/diwali/hanging/hanging1.jpg';
import toran1 from './gallery/diwali/toran/toran1.jpg';
import toran2 from './gallery/diwali/toran/toran2.jpg';
import toran3 from './gallery/diwali/toran/toran3.jpg';
import toran4 from './gallery/diwali/toran/toran4.jpg';
import rangoli1 from './gallery/diwali/rangoli/rangoli1.jpg';
import rangoli2 from './gallery/diwali/rangoli/rangoli2.jpg';
import shub1 from './gallery/diwali/subh/shub1.jpg';
import shub2 from './gallery/diwali/subh/shub2.jpg';
import shub3 from './gallery/diwali/subh/shub3.jpg';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Productkeyring(props) {

    let { productkeyringId } = useParams();
    const [currentImage, setCurrentImage] = useState('');
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentCaption, setCurrentCaption] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDeletePrice, setCurrentDeletePrice] = useState('');
    const [currentPriceDiscount, setCurrentPriceDiscount] = useState('');

    useEffect(() => {
        let mainImage;
        let heading;
        let caption;
        let price;
        let deletePrice;
        let discount;

        switch (productkeyringId) {
            case '1':
                mainImage = kr1;
                heading = 'Glitter Keychain';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
            case '2':
                mainImage = kr2;
                heading = 'Solid Grey Keychain';
                caption = 'A solid grey keychain offers a sleek and minimalist design, perfect for adding a touch of understated style to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
            case '3':
                mainImage = kr3;
                heading = 'Dirty Blue Keychain';
                caption = 'A keychain offers a sleek and minimalist design, perfect for adding a touch of understated style to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
            case '4':
                mainImage = kr4;
                heading = 'Breach pour Keychain';
                caption = 'A keychain design inspired by abstract art or fluid painting techniques, suggesting a dynamic and eye-catching accessory with a modern and artistic flair. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '349';
                deletePrice = '449';
                discount = '22%';
                break;
            case '5':
                mainImage = kr5;
                heading = 'Rose Petal Keychain';
                caption = 'A keychain offers a delicate and romantic accessory crafted from real rose petals, preserved in resin, creating a timeless piece that captures the beauty of nature while serving as a functional everyday item. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '299';
                deletePrice = '399';
                discount = '25%';
                break;
            case '6':
                mainImage = kr6;
                heading = 'Glitter Keychain [2]';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
            case '7':
                mainImage = kr7;
                heading = 'Pom-Pom Keychain';
                caption = 'Add a playful touch to your accessories with our "Pom-Pom Keychain," featuring vibrant colors and soft textures to complement your style while keeping your keys organized and easy to find. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '325';
                deletePrice = '399';
                discount = '18%';
                break;
            case '8':
                mainImage = kr8;
                heading = 'Rose Petal Keychain [2]';
                caption = 'A keychain offers a delicate and romantic accessory crafted from real rose petals, preserved in resin, creating a timeless piece that captures the beauty of nature while serving as a functional everyday item. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '399';
                deletePrice = '499';
                discount = '20%';
                break;
            case '9':
                mainImage = kr9;
                heading = 'Ocean Keychain';
                caption = 'Capture the serenity of the ocean with our "Ocean Keychain," featuring a unique design inspired by the beauty of the sea. Carry a piece of tranquility with you wherever you go. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
            case '10':
                mainImage = kr10;
                heading = 'Glitter Keychain [3]';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                break;
            case '11':
                mainImage = kr11;
                heading = 'Glitter Keychain [4]';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '349';
                deletePrice = '449';
                discount = '22%';
                break;
            case '12':
                mainImage = kr12;
                heading = 'Glitter Keychain [5]';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory collection.';
                price = '349';
                deletePrice = '449';
                discount = '22%';
                break;
                case '13':
                mainImage = j1;
                heading = 'Drop Pendant';
                caption = 'Enhance your style with our elegant "Drop Pendant," crafted to add a touch of sophistication to any ensemble. Made with exquisite craftsmanship, its a timeless accessory for every occasion';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                break;
                case '14':
                mainImage = j2;
                heading = 'Moon Pendant';
                caption = 'Add a touch of sparkle to your everyday essentials with our dazzling glitter keychain, designed to bring a pop of glamour to your keys or bag. You can customize the glitter keychain with your own letter or initials, adding a personal touch to your accessory Illuminate your look with our captivating "Moon Pendant." Crafted with intricate details, this celestial-inspired piece adds a touch of enchantment to any outfit, reflecting the beauty and mystery of the night sky..';
                price = '299';
                deletePrice = '399';
                discount = '25%';
                break;
                case '15':
                mainImage = j3;
                heading = 'Heart Pendant';
                caption = 'Embrace love and elegance with our "Resin Heart Pendant." Handcrafted with care, this exquisite pendant captures the beauty of resin artistry, adding a touch of romance and charm to your everyday style.';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                break;
                case '16':
                mainImage = j4;
                heading = 'Earings Combo';
                caption = 'Complete your look with our stunning Earrings Combo! Elevate your style effortlessly with this versatile set, perfect for any occasion.';
                price = '799';
                deletePrice = '999';
                discount = '20%';
                break;
                case '17':
                mainImage = j5;
                heading = 'Diamond Pendant';
                caption = 'Adorn yourself with timeless elegance with our Diamond Pendant. Crafted to perfection, it adds a touch of luxury and sophistication to any ensemble.';
                price = '249';
                deletePrice = '299';
                discount = '16%';
                break;
                case '18':
                mainImage = j6;
                heading = 'Moon-Butterfly Combo';
                caption = 'Elevate your style with our Ren Butterfly and Moon Pendant. A graceful blend of nature and celestial charm, perfect for adding a touch of whimsy to your look.';
                price = '499';
                deletePrice = '599';
                discount = '16%';
                break;
                case '19':
                mainImage = j7;
                heading = 'Pendant Combo';
                caption = 'Discover versatility and elegance with our Pendant Combo. Effortlessly transition from day to night with a curated selection of timeless pendants, perfect for every occasion';
                price = '749';
                deletePrice = '849';
                discount = '11%';
                break;
                case '20':
                mainImage = j8;
                heading = 'Round Pendant';
                caption = 'Elevate your style with our Round Resin Pendant, a captivating blend of modern design and timeless elegance. Handcrafted with precision and attention to detail, its the perfect accessory to complement any outfit.';
                price = '299';
                deletePrice = '349';
                discount = '25%';
                break;
                case '21':
                mainImage = j9;
                heading = 'Earing';
                caption = 'Add a touch of artistry to your ensemble with our Resin Earrings, meticulously crafted to showcase intricate designs and vibrant colors. Elevate your look with these unique and lightweight accessories, perfect for any occasion.';
                price = '249';
                deletePrice = '399';
                discount = '16%';
                break;
                case '22':
                mainImage = j10;
                heading = 'Round Pendant [2]';
                caption = 'Elevate your style with our Round Resin Pendant, a captivating blend of modern design and timeless elegance. Handcrafted with precision and attention to detail, its the perfect accessory to complement any outfit.';
                price = '299';
                deletePrice = '399';
                discount = '25%';
                break;
                case '23':
                mainImage = j11;
                heading = 'Pendant-Earing Combo';
                caption = 'Elevate your style with our stunning Resin Pendant and Earring Combo. Featuring beautifully crafted pendants and matching earrings, each piece is a unique work of art, adding elegance and charm to any outfit. Make a statement with this versatile and eye-catching jewelry set.';
                price = '699';
                deletePrice = '799';
                discount = '12%';
                break;
                case '24':
                mainImage = j12;
                heading = 'Pendant-Earing Combo [2]';
                caption = 'Elevate your style with our stunning Resin Pendant and Earring Combo. Featuring beautifully crafted pendants and matching earrings, each piece is a unique work of art, adding elegance and charm to any outfit. Make a statement with this versatile and eye-catching jewelry set.';
                price = '449';
                deletePrice = '499';
                discount = '10%';
                break;
                case '25':
                mainImage = t3;
                heading = 'Pebble Table';
                caption = 'This unique furnishing adds a touch of whimsy and artistic flair to any space, perfect for those seeking a statement piece that sparks conversation. [Size - 18 inch]';
                price = '2199';
                deletePrice = '2499';
                discount = '12%';
                break;
                case '26':
                mainImage = t4;
                heading = 'Geode Table';
                caption = 'A geode table showcases the mesmerizing beauty of natural crystals encased within a sleek tabletop. Each table is a one-of-a-kind piece, combining earthy elegance with modern design to elevate any room s aesthetic. [Size - 18 inch]';
                price = '2499';
                deletePrice = '2999';
                discount = '16%';
                break;
                case '27':
                mainImage = t5;
                heading = 'Flower Table';
                caption = 'A flower table incorporates the delicate beauty of flowers into its design, with real or artificial blooms encased in resin to create a stunning tabletop centerpiece. [Size - 18 inch]';
                price = '2999';
                deletePrice = '3699';
                discount = '18%';
                break;
                case '28':
                mainImage = t6;
                heading = 'Beach Table';
                caption = 'A beach table captures the essence of the shore, featuring a tabletop adorned with real or simulated sand, shells, and other beach treasures embedded in resin. [Size - 18 inch]';
                price = '2799';
                deletePrice = '3299';
                discount = '15%';
                break;
                case '29':
                mainImage = t1;
                heading = 'Charcoal Table';
                caption = 'A charcoal table boasts a sleek and modern design, typically crafted from wood or metal and finished with a charcoal-colored surface. This contemporary piece adds a touch of sophistication to any space with its minimalist aesthetic and versatile appeal. [Size - 18 inch]';
                price = '2199';
                deletePrice = '2499';
                discount = '12%';
                break;
                case '30':
                mainImage = t2;
                heading = 'Breakfast Table';
                caption = 'A small breakfast table is a cozy and practical addition to any kitchen or dining area, offering a compact yet functional space for enjoying morning meals or casual dining. Designed to fit snugly into smaller spaces, such as apartments or breakfast nooks. [Size - 12 * 24 inch]';
                price = '2499';
                deletePrice = '2999';
                discount = '16%';
                break;
                case '31':
                mainImage = cs1;
                heading = 'Cake Stand';
                caption = 'Elevate your desserts with our stunning resin cake stand, designed to add a touch of elegance to any occasion. Handcrafted with care, this exquisite stand combines durability with artistic flair, making it the perfect centerpiece for showcasing your delicious treats. [Size - 6*4*3 inch]';
                price = '1999';
                deletePrice = '2499';
                discount = '20%';
                break;
                case '32':
                mainImage = diya1;
                heading = 'Leaf T Light';
                caption = 'Illuminate Your Space: Leaf T Light Resin - Nature-inspired Decor for Ambient Lighting [Size - 4 inch]';
                price = '69';
                deletePrice = '99';
                discount = '30%';
                break;
                case '33':
                mainImage = diya2;
                heading = 'Cake Stand';
                caption = 'Mystical Mandalas: Discover the Harmony Within. Embrace the Spiritual Essence of Sacred Geometry. [Size - 4 inch] [1 Piece]';
                price = '79';
                deletePrice = '119';
                discount = '34%';
                break;
                case '34':
                mainImage = diya3;
                heading = 'Wooden Lotus T Light';
                caption = 'Wooden Lotus T-Light Holders: Adding natural warmth and serenity to any space, these beautifully crafted accents illuminate with timeless charm. [Combo of 2]';
                price = '49';
                deletePrice = '99';
                discount = '50%';
                break;
                case '35':
                mainImage = diya4;
                heading = 'Lotus T Light';
                caption = 'Resin Lotus T-Light Holders: Adding natural warmth and serenity to any space, these beautifully crafted accents illuminate with timeless charm. [1 Piece]';
                price = '199';
                deletePrice = '249';
                discount = '20%';
                break;
                case '36':
                mainImage = diya5;
                heading = 'Butterfly T Light';
                caption = 'Butterfly T-Light Resin: Delicately crafted, these luminous accents flutter with grace, infusing your surroundings with enchanting beauty.';
                price = '79';
                deletePrice = '99';
                discount = '20%';
                break;
                case '37':
                mainImage = diya6;
                heading = 'Flower T Light';
                caption = 'Transform your ambiance with Flower T-Light Holders - Nature-inspired elegance to brighten any occasion, bringing a touch of floral charm. [Quantity - 1]';
                price = '59';
                deletePrice = '99';
                discount = '40%';
                break;
                case '38':
                mainImage = diya7;
                heading = 'Square T Light';
                caption = 'Resin Square T-Light Holders: Sleek and stylish, these geometric accents infuse your space with modern flair, casting a warm glow to elevate any setting.';
                price = '79';
                deletePrice = '99';
                discount = '20%';
                break;
                case '39':
                mainImage = diya8;
                heading = 'Star T Light';
                caption = 'Resin Star T-Lights: Adding celestial charm, these luminous stars evoke a sense of wonder, casting a radiant glow to enchant any room.';
                price = '89';
                deletePrice = '119';
                discount = '25%';
                break;
                case '40':
                mainImage = diya9;
                heading = 'Red Crystal T Light';
                caption = 'Red Crystal T-Lights: Infuse your space with a warm, inviting glow, adding a touch of sophistication and charm to any setting. [Combo of 2 Piece]';
                price = '119';
                deletePrice = '189';
                discount = '37%';
                break;
                case '41':
                mainImage = diya10;
                heading = 'Purple Crystal T Light';
                caption = 'Purple Crystal T-Lights: Cast a mesmerizing glow, infusing your space with a sense of magic and tranquility, adding an elegant touch to any occasion. [Combo of 2 Piece]';
                price = '119';
                deletePrice = '189';
                discount = '37%';
                break;
                case '42':
                mainImage = diya11;
                heading = 'Olive Green Crystal T Light';
                caption = 'Olive Green Crystal T-Lights: Illuminate your space with a serene glow, blending earthy tones with captivating elegance, bringing a touch of nature indoors. [Combo of 2 Piece]';
                price = '119';
                deletePrice = '189';
                discount = '37%';
                break;
                case '43':
                mainImage = diya12;
                heading = 'Pink Crystal T Light';
                caption = 'Pink Crystal T-Lights: Infuse your space with a soft, romantic glow, adding a touch of warmth and sophistication to any setting or occasion. [Combo of 2 Piece]';
                price = '119';
                deletePrice = '189';
                discount = '37%';
                break;
                case '44':
                mainImage = thali1;
                heading = 'Resin Pooja Thali [1]';
                caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 8 inch]';
                price = '799';
                deletePrice = '899';
                discount = '11%';
                break;
                case '45':
                mainImage = thali2;
                heading = 'Resin Pooja Thali [2]';
                caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 6 inch]';
                price = '599';
                deletePrice = '699';
                discount = '15%';
                break;
                case '46':
                    mainImage = thali3;
                    heading = 'Resin Pooja Thali [3]';
                    caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 6 inch]';
                    price = '599';
                    deletePrice = '699';
                    discount = '15%';
                break;
                case '47':
                    mainImage = thali4;
                    heading = 'Resin Pooja Thali [4]';
                    caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 6 inch]';
                    price = '599';
                    deletePrice = '699';
                    discount = '15%';
                break;
                case '48':
                    mainImage = thali5;
                    heading = 'Resin Pooja Thali [5]';
                    caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 6 inch]';
                    price = '599';
                    deletePrice = '699';
                    discount = '15%';
                break;
                case '49':
                    mainImage = thali6;
                    heading = 'Resin Pooja Thali [6]';
                    caption = 'Embrace Tradition: Elevate your rituals with Resin Pooja Thalis, blending sacred significance with exquisite craftsmanship. [Size - 6 inch]';
                    price = '599';
                    deletePrice = '699';
                    discount = '15%';
                break;
                case '50':
                    mainImage = flowerhanging;
                    heading = 'Flower Hanging';
                    caption = 'Adorn your space with Flower Hanging Decor, bringing the beauty of nature indoors with delicate elegance. These graceful blooms elevate any setting, adding a touch of freshness and charm to your surroundings. [Ring Size - 6 inch]';
                    price = '599';
                    deletePrice = '799';
                    discount = '25%';
                break;
                case '51':
                    mainImage = toran1;
                    heading = 'Toran [1]';
                    caption = 'Torans: Adorn your entryway with these vibrant symbols of festivity and tradition, inviting joy and prosperity into your home with their colorful allure. [Size - 18 inch]';
                    price = '1999';
                    deletePrice = '2499';
                    discount = '20%';
                break;
                case '52':
                    mainImage = toran2;
                    heading = 'Toran [2]';
                    caption = 'Torans: Adorn your entryway with these vibrant symbols of festivity and tradition, inviting joy and prosperity into your home with their colorful allure. [Size - 18 inch]';
                    price = '2199';
                    deletePrice = '2599';
                    discount = '15%';
                break;
                case '53':
                    mainImage = toran3;
                    heading = 'Toran [3]';
                    caption = 'Torans: Adorn your entryway with these vibrant symbols of festivity and tradition, inviting joy and prosperity into your home with their colorful allure. [Size - 18 inch]';
                    price = '1599';
                    deletePrice = '1999';
                    discount = '20%';
                break;
                case '54':
                    mainImage = toran4;
                    heading = 'Toran [4]';
                    caption = 'Torans: Adorn your entryway with these vibrant symbols of festivity and tradition, inviting joy and prosperity into your home with their colorful allure. [Size - 18 inch]';
                    price = '1399';
                    deletePrice = '1799';
                    discount = '22%';
                break;
                case '55':
                    mainImage = rangoli1;
                    heading = 'Lotus Rangoli';
                    caption = 'Resin Lotus Rangoli: Intricate patterns of petals, blooming with vibrant hues, adorn floors in a celebration of tradition and beauty, inviting auspiciousness and harmony into homes, each design a masterpiece of artistry and culture, mesmerizing all who behold its intricate allure. [12 inch Rangoli with 5(3 inch) Lotus]';
                    price = '749';
                    deletePrice = '1499';
                    discount = '51%';
                break;
                case '56':
                    mainImage = rangoli2;
                    heading = 'Charan Rangoli';
                    caption = 'Resin Charan Rangoli: Infuse your space with spiritual significance and artistic beauty, honoring tradition with intricate patterns that radiate cultural richness and elegance. [12 inch Rangoli with 5(3 inch) Charan]';
                    price = '1399';
                    deletePrice = '1799';
                    discount = '22%';
                break;
                case '57':
                    mainImage = shub1;
                    heading = 'Shubh Labh [Light Blue]';
                    caption = ' Welcome prosperity and auspiciousness into your home with this traditional symbol, invoking blessings and abundance for a harmonious life ahead. [Size - 3 inch] [Combo of 2]';
                    price = '1099';
                    deletePrice = '1599';
                    discount = '31%';
                break;
                case '58':
                    mainImage = shub2;
                    heading = 'Shubh Labh [White]';
                    caption = ' Welcome prosperity and auspiciousness into your home with this traditional symbol, invoking blessings and abundance for a harmonious life ahead. [Size - 3 inch] [Combo of 2]';
                    price = '1099';
                    deletePrice = '1599';
                    discount = '31%';
                break;
                case '59':
                    mainImage = shub3;
                    heading = 'Shubh Labh [Brown]';
                    caption = ' Welcome prosperity and auspiciousness into your home with this traditional symbol, invoking blessings and abundance for a harmonious life ahead. [Size - 3 inch] [Combo of 2]';
                    price = '1099';
                    deletePrice = '1599';
                    discount = '31%';
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
    }, [productkeyringId]);
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

export default Productkeyring;
