import React from 'react'
import Products from '../Products/Products';
import "./Hero.css";

import heroImage from "../../assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-banner'>
            <img src={heroImage} alt='hero-Image' className='hero-image'/>
            <div className='hero-content'>
                <h1 className='hero-title'>Design Your Perfect Space</h1>
                <p className='hero-subtitle'>Discover timeless furniture pieces that blend style, comfort, and craftsmanship</p>
                <button className='hero-btn'>Shop Now</button>
            </div>
        </div>
        <Products />
    </div>
  )
}

export default Hero