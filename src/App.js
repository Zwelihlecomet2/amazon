import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'
// import Home from './Components/Home/Home'
// import Products from './Components/Products/Products'
// import Header from './Components/Heading/Header'
// import ProductDetails from './Components/Products/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Hero />
        </Route>
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
    </div>
  )
}

export default App