import React from 'react'
import "./Hero.css";
import Products from '../Products/Products';

import heroImage from "../../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <img src={heroImage} alt='hero-Image' className='hero-image'/>
            <Products />
        </div>
    </div>
  )
}

export default Hero