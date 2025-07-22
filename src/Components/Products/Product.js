import React from 'react'
import "./Product.css";

const Product = (props) => {
    const { image, title, rating, price } = props;
  return (
    <div className='product'>
        <img src={image} alt='product-image' className='product-image'/>
        <div className='product-info'>
            <p>{title}</p>
            <div className='product-rating'>
                <p>{rating}</p>
            </div>
            <p className='product-price'>{price}</p>
        </div>
    </div>
  )
}

export default Product