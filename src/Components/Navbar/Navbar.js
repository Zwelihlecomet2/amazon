import React, { useContext } from "react";
import "./Navbar.css";

import amazonLogo from "../../assets/second-logo.png";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import shoppingContext from "../../ContextAPI/Shopping/ShoppingContext";
import { auth } from "../../Firebase/Firebase";

const Navbar = () => {
  const shoppingCtx = useContext(shoppingContext);
  const { basket, user } = shoppingCtx;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      console.log("Signed Out");
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={amazonLogo} alt="amazonLogo" />
        </Link>
      </div>
      <div className="search-area">
        <input className="search-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="nav-options">
        <Link to={!user && "/login"}>
          <div className="options" onClick={handleAuthentication}>
            <span className="optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="optionTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="options">
            <span className="optionOne">Returns</span>
            <span className="optionTwo">& order</span>
          </div>
        </Link>
        <div className="options">
          <span className="optionOne">Your</span>
          <span className="optionTwo">Prime</span>
        </div>

        <Link to="checkout">
          <div className="navBasket">
            <ShoppingBasketIcon className="shoppingBasket" />
            <span className="optionTwo basket-count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
