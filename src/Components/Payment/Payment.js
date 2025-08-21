import React, { useContext, useEffect, useState } from "react";
import axios from "../../Axios";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import shoppingContext from "../../ContextAPI/Shopping/ShoppingContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

const Payment = () => {
  const shoppingCtx = useContext(shoppingContext);
  const { basket, user, getBasketTotal } = shoppingCtx;

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      // try {
      //   const total = getBasketTotal(basket);
      //   if (total <= 0) return; // Don't make API call if basket is empty

      //   const response = await axios({
      //     method: "post",
      //     url: `/payment/create?total=${total * 100}`,
      //   });
      //   setClientSecret(response.data.clientSecret);
      // } catch (error) {
      //   console.error("Payment Error:", error);
      //   // Handle error appropriately
      // }
    const response = await axios({
      method: "post",
      url: `/payment/create?total=${basket.reduce((acc, item) => acc + item.price, 0) * 100}`
    });
    setClientSecret(response.data.clientSecret);
  };
    getClientSecret();
  }, [basket]);

  console.log("The Secrete is ", clientSecret);
  const handleSubmit = (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    }).then(({paymentIntent}) =>{
      //Payment intent = payment Confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      history.push('/orders')
    });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? "event.error.message": "");
  };

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
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment-price-container">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                dicimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now!!!"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
