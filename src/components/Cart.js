import React, { useState, useContext, useEffect } from "react";
import "../style/cart.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { CartContext } from "../context/CartContex";
import { handlePayment } from "../services/payment";
const CartItem = ({ item, onRemove }) => (
  <div className="cart-item">
    <table>
      <tbody>
        <tr>
          <td>
            <img src={item.image} alt="" className="cart-item-image" />
          </td>
          <td>
            <h4>{item.name}</h4>
            <p>
              Sku: {item.sku}
              <br />
              Brand: {item.brand}
            </p>
            <button className="remove-button" onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </td>
          <td data-quantity={item.quantity}>
            <p> ₹ {item.price}</p>
          </td>
          <td>
            <p>{item.quantity}</p>
          </td>
          <td>
            <p>₹{(item.price * item.quantity)}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const [discount, setDiscount] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [totalAmount, setTotalAmount] = useState(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  });
  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
    if(promoCode === "FREE20" && totalAmount>200){
      setDiscount(totalAmount*0.2);
    }else{
      setDiscount(null);
    }
  },[cartItems, totalAmount,promoCode]);
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  const handleApplyPromoCode = () => {
    // Apply promo code logic here
    setPromoCode(document.getElementById('promo-code').value);
    if (promoCode === "FREE20" && totalAmount>200) {
      setDiscount(totalAmount*0.2);
    }
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Shopping cart</span>
        </div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Shopping cart</h2>
            <p>Your cart is empty!</p>
            <Link to="/" className="continue-shopping-button">
              CONTINUE SHOPPING &nbsp;
              <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart">
              <div className="cart-items-container">
                <div className="cart-header">
                  <table className="table-header">
                    <thead>
                      <tr>
                        <td colSpan={3}>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              </div>
              <div className="order-summary-container">
                <div className="order-summary">
                  <h2>Order summary</h2>
                  <p>Sub total: ₹ {totalAmount.toFixed(2)}</p>
                  {discount && <p>Discount: ₹ {discount.toFixed(2)} ({promoCode})</p> }
                  <p>Total: ₹ {discount ? totalAmount.toFixed(2)-discount.toFixed(2) : totalAmount.toFixed(2)}</p> 
                  <p>(Inclusive of tax ₹ 0.00)</p>
                  <button onClick={handlePayment(discount ? (totalAmount*100)-(discount.toFixed(2)*100) : totalAmount * 100,cartItems,setCartItems)} className="checkout-button">CHECKOUT</button>
                </div>
              </div>
            </div>
            <div className="promo-code">
              <h3>Promotion code?</h3>
              <br/>
              <input id="promo-code"
                type="text"
                placeholder="Enter coupon code"
              />
              <button className="apply-button" onClick={handleApplyPromoCode}>
                Apply
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
