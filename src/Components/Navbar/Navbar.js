import React from 'react'
import "./Navbar.css";

import amazonLogo from '../../assets/second-logo.png'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <Link to="/">
                <img src={amazonLogo} alt='amazonLogo'/>
            </Link>
        </div>
        <div className='search-area'>
            <input className='search-input' type='text'/>
            <SearchIcon className='search-icon'/>
        </div>
        <div className='nav-options'>
            <Link to="/login">
                <div className='options'>
                    <span className='optionOne'>Hello Guest</span>
                    <span className='optionTwo'>Sign In</span>
                </div>
            </Link>
            <div className='options'>
                <span className='optionOne'>Returns</span>
                <span className='optionTwo'>& order</span>
            </div>

            <div className='options'>
                <span className='optionOne'>Your</span>
                <span className='optionTwo'>Prime</span>
            </div>

            <div className='navBasket'>
                <ShoppingBasketIcon className='shoppingBasket'/>
                <span className='optionTwo basket-count'>0</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar