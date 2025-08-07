import React from 'react'
import Product from './Product';
import "./Products.css";

import firstDress from "../../assets/first-dress.jpg";
import secondDress from "../../assets/second-dress.jpg";
import thirdDress from "../../assets/third-dress.jpg";
import fourthDress from "../../assets/fourth-dress.jpg";
import fifthDress from "../../assets/fifth-dress.jpg";
import sixthDress from "../../assets/sixth-dress.jpg";

const Products = () => {
  return (
    <>
    <div className='products'>
        <Product 
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
        <Product 
        image={secondDress}
        title="Slip Dress for Women Adjustable Spaghetti Straps Under Dresses Basic Full Slips Cami Long Slip Dress Nightgown"
        rating="4.4"
        price="R400.00"
        />
    </div>
    <div className='products'>
        <Product 
        image={thirdDress}
        title="WIHOLL Dresses for Women 2025 Casual Summer V Neck Wedding Guest Dress Short Sleeve Fashion Beach Vacation Clothes"
        rating="4.3"
        price="R108.4"
        />
        <Product 
        image={fourthDress}
        title="BTFBM Women Summer Bohemian Floral Casual Wrap V Neck Ruffle Cap Sleeveless Belt A-Line Pleated Hem Midi Sun Dress White"
        rating="7"
        price="R350"
        />
        <Product 
        image={fifthDress}
        title="2025 Loose V Neck Ruffle Sleeve Tiered Flowy Casual A Line Mini Beach Dress with Pockets"
        rating="4.1"
        price="R250.00"
        />
    </div>
    <div className='products'>
        <Product 
        image={sixthDress}
        title="Sexy Elegant Lace Beach Cover Up for Women, Bathing Suit Cover Up, V-Neck Swimsuit Coverup for Poolside, Seaside and Party"
        rating="10"
        price="R600.30"
        />
    </div>
    </>
  )
}

export default Products