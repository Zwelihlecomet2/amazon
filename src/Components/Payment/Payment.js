import React, { useContext } from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import shoppingContext from "../../ContextAPI/Shopping/ShoppingContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

const Payment = () => {
  const shoppingCtx = useContext(shoppingContext);
  const { basket, user } = shoppingCtx;

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
            Checkout <Link to="checkout">{basket?.length} Items</Link>
        </h1>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>Delivery address</h3>
        </div>
        <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Pololwane South Africa</p>
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>Review items and Delivery</h3>
        </div>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="payment-section">
        <div className="payment-title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment-details">
             {/* Srtipe Code */}
        </div>
       </div> 
    </div>
  );
};

export default Payment;
