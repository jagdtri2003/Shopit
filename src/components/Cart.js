import React, {useState,useContext} from "react";
import "../style/cart.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { CartContext } from "../context/CartContex";

const CartItem = ({ item, onRemove }) => (
    
  <div className="cart-item">
    <table >
      <tbody>
        <tr>
          <td>
            <img src={item.image} className="cart-item-image" />
          </td>
          <td>
            <h4>{item.name}</h4>
            <p>Sku: {item.sku}<br/>
            Brand: {item.brand}</p>
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
            <p>₹ {(item.price * item.quantity).toFixed(2)}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Cart = () => {
    const {cartItems,setCartItems} = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Nike air zoom pegasus 35",
//       size: "L",
//       color: "Green",
//       price: 411.0,
//       quantity: 1,
//       image: "https://via.placeholder.com/300.png?text=Product", // replace with actual image URL
//     },
//     {
//       id: 2,
//       name: "Mix and match chuck taylor all star",
//       size: "X",
//       color: "Brown",
//       price: 798.0,
//       quantity: 2,
//       image: "https://via.placeholder.com/300.png?text=Product", // replace with actual image URL
//     },
//   ]);

  const [promoCode, setPromoCode] = useState("");

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromoCode = () => {
    // Apply promo code logic here
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
    // const totalAmount = 0;


  return (
    <>
    <Header/>
    <div className="cart-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Shopping cart</span>
      </div>
      <div className="cart">
        <div className="cart-header">
            <table >
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
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </div>
        <div className="order-summary">
          <h2>Order summary</h2>
          <p>Sub total: ₹ {totalAmount.toFixed(2)}</p>
          <p>Total: ₹ {totalAmount.toFixed(2)}</p>
          <p>(Inclusive of tax ₹ 0.00)</p>
          <button className="checkout-button">CHECKOUT</button>
        </div>
        <div className="promo-code">
          <h3>Promotion code?</h3>
          <input
            type="text"
            value={promoCode}
            onChange={handlePromoCodeChange}
            placeholder="Enter coupon code"
          />
          <button className="apply-button" onClick={handleApplyPromoCode}>
            Apply
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Cart;
