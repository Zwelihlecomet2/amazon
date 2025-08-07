import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogOut: () => {}
})

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      useEffect(() =>{
      const userInfo = localStorage.getItem('isLoggedIn');
        if(userInfo === '1'){
          setIsLoggedIn(true);
        }
      }, []);
    
      const loginHandler = (email, password) =>{
        localStorage.setItem("isLoggedIn", '1');
        setIsLoggedIn(true);
      }
    
      const logOutHandler = () =>{
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      }

    return(<AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogOut: logOutHandler}}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;