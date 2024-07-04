import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Shopit</div>
      <input type="text" className="search-bar" placeholder="Search for products..." />
      <span className='search-logo' ><i class="fa-solid fa-magnifying-glass"></i></span> 
      <nav className="navigation">
        <Link className='navigation-item' to="/">Home</Link>
        <Link className='navigation-item' to="/about">About</Link>
        <Link className='navigation-item' to="/contact">Contact</Link>
        <Link className='navigation-item' to="/account">Account</Link>
        <Link className='navigation-item' to="/cart"><i title="Your Cart" class="fa-duotone fa-cart-shopping"></i></Link>
      </nav>
    </header>
  );
}

export default Header;
