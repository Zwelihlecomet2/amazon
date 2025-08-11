import React, { useContext, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'
import NotFound from './Components/NotFound/NotFound'
import { auth } from './Firebase/Firebase'
import shoppingContext from './ContextAPI/Shopping/ShoppingContext';

// import Home from './Components/Home/Home'
// import Products from './Components/Products/Products'
// import Header from './Components/Heading/Header'
// import ProductDetails from './Components/Products/ProductDetails'

const App = () => {

  const shoppingCtx = useContext(shoppingContext);
  const {setUser} = shoppingCtx;

  useEffect(() =>{
    auth.onAuthStateChanged((authUser) =>{
      console.log("User is:", authUser);

      if(authUser){
        setUser(authUser);
      }

      else{
        setUser(null);
      }
    })
  }, []);

  return (
    <>
      <Navbar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Hero />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
          {/* <Route path='/home'>
            <Home />
          </Route>
          <Route path='/products' exact>
           <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route> */}
      </main>
    </>
  )
}

export default App