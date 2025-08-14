import React, { useContext } from 'react'
import "./CheckoutProduct.css"
import shoppingContext from '../../ContextAPI/Shopping/ShoppingContext';

const CheckoutProduct = (props) => {
    const { id, image, title, rating, price, hideButton } = props;

    const shoppingCtx = useContext(shoppingContext);
    const {removeFromBasket} = shoppingCtx;

    const removeFromBasketHandler = () =>{
        removeFromBasket({id: id});
    }

    return (
    <div className='checkout'>
        <img src={image} alt='checkoutProduct-image' className='checkoutProduct-image'/>
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>{title}</p>
            <div className='checkoutProduct-rating'>
                <p>{rating}</p>
            </div>
            <p className='checkoutProduct-price'>R{price}</p>
            {!hideButton && <button onClick={removeFromBasketHandler}>Remove from Basket</button>}
        </div>
    </div>
  )
}

export default CheckoutProduct