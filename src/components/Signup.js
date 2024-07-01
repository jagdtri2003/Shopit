import React from "react";
import "../style/login.css"; 
import googleImg from '../images/google.png';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <i className="fa-solid fa-shield-check fa-2xl" style={{ color: "#74C0FC" }}></i>
        </div>
        <h2>Create an Account</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Name</label>
            <input type="text" placeholder="Enter your name" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" placeholder="xyz@gmail.com" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="sign-in-btn">SIGN UP</button>
        </form>
        <div className="or-separator">OR</div>
        <button className="google-btn">
          <img src={googleImg} alt="Google Icon" /> Continue with Google
        </button>
        <div className="sign-up-link">
          Already have an account? <a><Link to="/login">Login</Link></a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
