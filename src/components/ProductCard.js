import React from 'react';
import { Link } from 'react-router-dom';
import '../style/productcard.css';
import StarRatings from 'react-star-ratings';

function ProductCard({product}) {
  return (
    <>
    <div className="product-card2">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <Link to={`/item/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-rating">
          <span>
          <StarRatings
            rating={4 + Math.random()}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="5px"
          />
          </span>
          <br/><br/>
          <strong>SKU :</strong> Sku-{product.id}
          <br/>
          <strong>Brand:</strong> {product.brand}
        </div>
        {Math.random() >0.5 && <span className="product-deal">Limited time deal</span>}
        <div className="product-price">
          <span className="current-price">₹{product.price}</span>
          <span className="original-price">M.R.P: ₹{product.discountPrice}</span>
          <span className="discount">{(((product.discountPrice-product.price)/product.discountPrice)*100).toFixed(2)}% off</span>
        </div>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </div>    
    </>
  )
}

export default ProductCard