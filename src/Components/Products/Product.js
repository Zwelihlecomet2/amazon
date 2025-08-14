import React, { useContext } from 'react'
import "./Product.css";

import ShoppingContext from '../../ContextAPI/Shopping/ShoppingContext';

const Product = (props) => {
    const { id, image, title, rating, price } = props;

    const shoppingCtx = useContext(ShoppingContext);
    const {addToBasket} = shoppingCtx;

    const addToBasketHandler = () =>{
      // addToBasket({item: {id, image, title, rating, price}})
      addToBasket({id, image, title, rating, price})
    }

  return (
    <div className='product' key={id}>
        <img src={image} alt='product-image' className='product-image'/>
        <div className='product-info'>
            <p>{title}</p>
            <div className='product-rating'>
                <p>{rating}</p>
            </div>
            <p className='product-price'>R{price}</p>
        </div>
        <button className='product-btn' onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  )
}

export default Product