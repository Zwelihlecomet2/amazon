import React, { useContext } from 'react'
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

import ShoppingContext from '../../ContextAPI/Shopping/ShoppingContext';

const Product = (props) => {
    const { id, image, title, description, rating, price } = props;

    const shoppingCtx = useContext(ShoppingContext);
    const {addToBasket} = shoppingCtx;

    const addToBasketHandler = () =>{
      addToBasket({id, image, title, rating, price})
    }

  return (
    <div className='product' key={id}>
        <div className='product-image-container'>
            <img src={image} alt='product-image' className='product-image'/>
            <button className='product-ar-btn' title="View in AR">
                <ViewInArIcon />
            </button>
        </div>
        <div className='product-info'>
            <h3 className='product-title'>{title}</h3>
            <p className='product-description'>{description}</p>
            <div className='product-rating'>
                <StarIcon className='star-icon' />
                <span className='rating-value'>{rating}</span>
                <span className='rating-count'>({Math.floor(Math.random() * 500) + 100} reviews)</span>
            </div>
            <p className='product-price'>${price.toFixed(2)}</p>
        </div>
        <button className='product-btn' onClick={addToBasketHandler}>Add to Cart</button>
    </div>
  )
}

export default Product