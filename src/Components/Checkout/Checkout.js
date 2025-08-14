import React, { useContext } from "react";
import "./Checkout.css";
import shoppingContext from "../../ContextAPI/Shopping/ShoppingContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct"; 
import Subtotal from "../Subtotal/Subtotal";

import checkoutImage from "../../assets/checkout-img.jpg"

const Checkout = () => {
  const shoppingCtx = useContext(shoppingContext);
  const { basket, user } = shoppingCtx;

  return (
    <div className="checkout">
        <div className="checkout-left">
            <img src={checkoutImage} alt="" className="checkout-add" />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout-title">Your Shoppin Cart</h2>
                {basket.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                />
                ))}
            </div>
        </div>
        <div className="checkout-right">
            <Subtotal/>
        </div>
    </div>
  );
};

export default Checkout;
