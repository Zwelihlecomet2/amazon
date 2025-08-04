import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css";

import loginLogo from "../../assets/Amazon-Logo.png";

const reducer = (state, action) =>{
  if(action.type === "EMAIL_INPUT"){
    return {...state, emailValue: action.payload}
  }

  if(action.type === "PASSWORD_INPUT"){
    return {...state, passwordValue: action.payload}
  }

  return {emailValue: "", passwordValue: ""}
}
const Login = () => {
  const [password, setPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {emailValue: "", passwordValue: ""});

  const signIn = (event) =>{
    event.preventDefault();
    console.log(formIsValid);
    console.log("Entered Email:", state.emailValue);
    console.log("Entered Password:", state.passwordValue);
  }

  const emailHandler = (event) =>{
    dispatch({type: "EMAIL_INPUT", payload: event.target.value});
  }

  const passwordHandler = (event) =>{
    dispatch({type: "PASSWORD_INPUT", payload: event.target.value});
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
          <input type='text'value={state.emailValue} placeholder='Enter Email' required onChange={emailHandler}/>
          <h5>Password</h5>
          <input type='password' value={state.passwordValue} placeholder='Enter Password' required onChange={passwordHandler}/>
          <button className='login-button' onClick={signIn}>Submit</button>
        </form>
        <p>By Signing in you agree to the amazon fake clone Conditions of use & sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
        <button className='create-button'>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login