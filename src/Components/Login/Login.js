import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css";

import loginLogo from "../../assets/Amazon-Logo.png";
// import shoppingContext from '../../ContextAPI/Shopping/ShoppingContext';
import { auth } from '../../Firebase/Firebase';
// import AuthContext from '../../ContextAPI/authContext';

// const reducer = (state, action) =>{
//   if(action.type === "EMAIL_INPUT"){
//     return {...state, emailValue: action.payload}
//   }

//   if(action.type === "PASSWORD_INPUT"){
//     return {...state, passwordValue: action.payload}
//   }

//   return {emailValue: "", passwordValue: ""}
// }

const Login = () => {
  // const ctx = useContext(AuthContext);

  // const [formIsValid, setFormIsValid] = useState(false);

  // const [state, dispatch] = useReducer(reducer, {emailValue: "", passwordValue: ""});
  // const {emailValue, passwordValue} = state;

  // useEffect(() =>{
  //   const identifier = setTimeout(() => {
  //     console.log("Checking Form Validity");
  //     setFormIsValid(emailValue.includes("@") && passwordValue.trim().length > 6);
  //   }, 500);

  //   return () =>{
  //     console.log("CleanUp Here");
  //     clearTimeout(identifier);
  //   }
  // }, [emailValue, passwordValue]);

  // const emailHandler = (event) =>{
  //   dispatch({type: "EMAIL_INPUT", payload: event.target.value});
  // }

  // const passwordHandler = (event) =>{
  //   dispatch({type: "PASSWORD_INPUT", payload: event.target.value});
  // } 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const history = useHistory();

  // const shoppingCtx = useContext(shoppingContext);
  // const {basket, user} = shoppingCtx;

  const signIn = (event) =>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) =>{
      history.push("/")
    })
    .catch((error) => {
      alert(error);
    });
    // ctx.onLogin(emailValue, passwordValue);
  }
  
  const register = (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) =>{
      if(auth){
        history.push("/");
      }
    })
    .catch((error) =>{
      alert(error);
    });
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
          <input type='text' value={email} placeholder='Enter Email' required onChange={event => setEmail(event.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} placeholder='Enter Password' required onChange={event => setPassword(event.target.value)}/>
          <button className='login-button' onClick={signIn}>Submit</button>
        </form>
        <p>By Signing in you agree to the amazon fake clone Conditions of use & sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
        <button className='create-button' onClick={register}>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login