import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";

import loginLogo from "../../assets/Amazon-Logo.png";
const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (event) =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  }
  
  return (
    <div className='login'>
      <Link to='/'>
        <img src={loginLogo} alt='amazon-logo' className='login-logo'/>
      </Link>
      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='text' placeholder='Enter Email' required ref={emailRef}/>
          <h5>Password</h5>
          <input type='password' placeholder='Enter Password' required ref={passwordRef}/>
          <button className='login-button' onClick={signIn}>Submit</button>
        </form>
        <p>By Signing in you agree to the amazon fake clone Conditions of use & sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
        <button className='create-button'>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login