import React from 'react'
import Product from './Product';
import "./Products.css";

import firstDress from "../../assets/first-dress.jpg";
import secondDress from "../../assets/second-dress.jpg";
import thirdDress from "../../assets/third-dress.jpg";
import fourthDress from "../../assets/fourth-dress.jpg";
import fifthDress from "../../assets/fifth-dress.jpg";
import sixthDress from "../../assets/sixth-dress.jpg";

const Products = () => {
  return (
    <div className='products-container'>
      <div className='products-header'>
        <h2>Featured Furniture</h2>
        <p>Transform your space with our curated collection</p>
      </div>
      <div className='products-grid'>
        <Product
          id="1"
          image={firstDress}
          title="Modern Velvet Accent Chair"
          description="Elegant velvet upholstery with solid wood legs"
          rating={4.8}
          price={899.99}
        />
        <Product
          id="2"
          image={secondDress}
          title="Scandinavian Oak Dining Table"
          description="Solid oak construction with minimalist design"
          rating={4.9}
          price={1299.00}
        />
        <Product
          id="3"
          image={thirdDress}
          title="Mid-Century Modern Sofa"
          description="Premium fabric with tufted cushions and tapered legs"
          rating={4.7}
          price={1899.99}
        />
        <Product
          id="4"
          image={fourthDress}
          title="Industrial Bookshelf Unit"
          description="Metal frame with reclaimed wood shelves"
          rating={4.6}
          price={749.00}
        />
        <Product
          id="5"
          image={fifthDress}
          title="Contemporary Coffee Table"
          description="Tempered glass top with marble base"
          rating={4.8}
          price={599.00}
        />
        <Product
          id="6"
          image={sixthDress}
          title="Luxury King Bed Frame"
          description="Upholstered headboard with storage drawers"
          rating={4.9}
          price={1499.00}
        />
      </div>
    </div>
  )
}

export default Products