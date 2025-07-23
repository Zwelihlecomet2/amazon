import React from 'react'
import Product from './Product';
import "./Products.css";

import firstDress from "../../assets/first-dress.jpg";
import secondDress from "../../assets/second-dress.jpg";

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
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
    </div>
    <div className='products'>
        <Product 
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
        <Product 
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
        <Product 
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
    </div>
    <div className='products'>
        <Product 
        image={firstDress}
        title="SOLY HUX Women's V Neck Halter Tops Open Back Y2k Ruched Floral Metal Summer Going Out Cami Tops"
        rating="4"
        price="R59.99"
        />
    </div>
    </>
  )
}

export default Products