import React, { useContext, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'
import NotFound from './Components/NotFound/NotFound'
import { auth } from './Firebase/Firebase'
import shoppingContext from './ContextAPI/Shopping/ShoppingContext';
import Checkout from './Components/Checkout/Checkout'
import Payment from './Components/Payment/Payment'

const promise = loadStripe("pk_test_51RxiUA2Om1YmuXswBslIEYG4vqi2krOSTV47skGQMeCGN4zqs6rdZOMKnvwJYrd1Y3hKzwcB6XXoKPsvuBq9AGiI000qFGa9Ex");

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
          <Route path="/checkout">
            <Checkout />
          </Route> 
          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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