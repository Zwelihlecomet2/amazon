import React, { useContext } from "react";
import "./Navbar.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
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
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">FURNISH</span>
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Shop</Link>
          <Link to="/" className="nav-link">Collections</Link>
          <Link to="/" className="nav-link">About</Link>
        </div>

        <div className="nav-actions">
          <div className="search-area">
            <input className="search-input" type="text" placeholder="Search furniture..." />
            <SearchIcon className="search-icon" />
          </div>

          <Link to={!user && "/login"} className="nav-icon-link">
            <div className="nav-icon" onClick={handleAuthentication}>
              <PersonOutlineOutlinedIcon />
              <span className="nav-icon-label">{user ? "Account" : "Sign In"}</span>
            </div>
          </Link>

          <div className="nav-icon">
            <FavoriteOutlinedIcon />
            <span className="nav-badge">0</span>
          </div>

          <Link to="checkout" className="nav-icon-link">
            <div className="nav-icon cart-icon">
              <ShoppingCartOutlinedIcon />
              {basket?.length > 0 && (
                <span className="nav-badge">{basket.length}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
