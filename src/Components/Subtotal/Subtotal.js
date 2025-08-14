import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import shoppingContext from "../../ContextAPI/Shopping/ShoppingContext";

const Subtotal = () => {
    const shoppingCtx = useContext(shoppingContext);
    const {basket, getBasketTotal} = shoppingCtx;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={
          (value => (
            <>
              <p>
                Subtotal({basket?.length} items) : <strong>{value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" />
                This Order Contains a Gift
              </small>
            </>
          ))
        }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"R"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
