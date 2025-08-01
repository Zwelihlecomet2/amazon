import React from 'react'
import "./NotFound.css";

import notFoundText from "../../assets/not-found-text.png";
import notFoundImage from "../../assets/not-found-image.jpg";
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='not-found'>
        <Link to="/">
            <div>
                <img src={notFoundText} alt='Page Not Found' className='top-image'/>
            </div>
            <div>
                <img src={notFoundImage} alt='Not Found Image' className='bottom-image'/>
            </div>
        </Link>
    </div>
  )
}

export default NotFound