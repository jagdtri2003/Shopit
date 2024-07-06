import React,{useContext} from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContex';

function Header() {

  const {cart} = useContext(CartContext);

  return (
    <header className="header">
      <Link to='/' className="logo">Shopit</Link>
      <input type="text" className="search-bar" placeholder="Search for products..." />
      <span className='search-logo' ><i class="fa-solid fa-magnifying-glass"></i></span> 
      <nav className="navigation">
        <Link className='navigation-item' to="/account"><i title='Account' class="fa-duotone fa-user"></i></Link>
        <Link className='navigation-item' to="/cart">
        <div className="cart-container">
            <i title="Your Cart" className="fa-duotone fa-cart-shopping cart-icon"></i>
            <div className="cart-count" id="cart-count">{cart || 0}</div>
        </div>
          
        </Link>
      </nav>
    </header>
  );
}

export default Header;
