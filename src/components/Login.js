import React, { useState } from "react";
import "../style/login.css";
import {  Link } from "react-router-dom";
import firebaseInstance from "../firebase/firebase";
import googleImg from "../images/google.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleGoogleSignIn = () => {
    firebaseInstance.signInWithGoogle().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(null);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    firebaseInstance.signIn( formData.email, formData.password ).catch((err)=>{
      if(err.message.toLowerCase().includes('user-disabled')){
        setError("Account Disabled! Contact Admin ")
      }else{
        setError("Invalid Email ID or Password !");

      }
    })
  };

  return (
    <div className="container">
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <i
            className="fa-solid fa-shield-check fa-2xl"
            style={{ color: "#74C0FC" }}
          ></i>
        </div>
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="sign-in-btn">
            SIGN IN
          </button>
        </form>
        <div className="or-separator">OR</div>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <img src={googleImg} alt="Google Icon" /> Continue with Google
        </button>
        <div className="sign-up-link">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
