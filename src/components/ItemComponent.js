import React, { useState,useEffect, useContext } from "react";
import "../style/itemcomponent.css";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { CartContext } from "../context/CartContex.js";
import { successToast } from "./ToastComponent.js";
import product from "../products/products.js";
import Footer from "./Footer.js";
import StarRatings from "react-star-ratings";

const ItemComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const item = product[id];

  const handleAddToCart = (e) => {
    e.target.setAttribute("disabled", "true");
    addToCart(
      id,
      {
        id,
        name: item.name,
        quantity: count,
        sku: `Sku-${id}`,
        brand: item.brand,
        price: item.price,
        image: item.image,
      },
      count
    );
    successToast("Item Added to Cart !!");
    setTimeout(() => {
      e.target.removeAttribute("disabled");
    }, 3000);
  };
  return (
    <>
      <Header />
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/category/${item.category}`}>{item.category} </Link> / <span>{`Sku-${id}`}</span>
      </div>
      <div style={{ margin: "30px" }} className="item-container">
        <div className="item-image">
          <img style={{ marginTop: "30px" }} src={item.image} alt={item.name} />
          <br />
        </div>
        <div className="item-details">
          <h2 className="item-name">{item.name}</h2>
          <p>
            <strong>SKU ID:</strong> Sku-{id} &nbsp; &nbsp;
            <StarRatings
            rating={4 + Math.random()}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="5px"
          />
          </p>
          <p>
            <strong>Brand:</strong> {item.brand}
          </p>
          <div className="item-price">
          <span style={{color:'red',fontSize:'20px'}}>{- (((item.discountPrice-item.price)/item.discountPrice)*100).toFixed(2)}%  &nbsp;</span> 
            <span className="price">
              ₹{item.price} </span>
          </div>
          <div style={{marginTop:'-8px',fontSize:'15px'}}>
          M.R.P : ₹
          <span className="discount-price">{item.discountPrice}</span></div>
          <div className="count-btn">
            <button onClick={() => (count > 1 ? setCount(count - 1) : null)}>
              -
            </button>
            <input id="count" value={count} type="number" min={1} readOnly />
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart">
            Add to Cart
          </button>
          <p className="item-specifications">{item.specifications}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemComponent;
