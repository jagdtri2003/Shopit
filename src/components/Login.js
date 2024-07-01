import React, { useContext } from "react";
import "../style/login.css";
import { Context } from "../context/UserContext";
import { Navigate,Link } from "react-router-dom";
import firebaseInstance from "../firebase/firebase";
import googleImg from '../images/google.png';


function Login() {

    const handleGoogleSignIn = ()=>{
        firebaseInstance.signInWithGoogle().then((result)=>{
            console.log(result);
            <Navigate to="/" replace={true} />
        })
    }

  const { setUser } = useContext(Context);
  const user = firebaseInstance.auth.currentUser;
  console.log(user)
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
        <i className="fa-solid fa-shield-check fa-2xl" style={{color: "#74C0FC"}}></i>
        </div>
        <h2>Welcome Back!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email ID</label>
            <input type="email" placeholder="xyz@gmail.com" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            onClick={() => {
              setUser({ name: "shubham" });
            }}
            className="sign-in-btn"
          >
            SIGN IN
          </button>
        </form>
        <div className="or-separator">OR</div>
        <button className="google-btn" onClick={handleGoogleSignIn}>


          <img src={googleImg} alt="Google Icon" /> Continue with Google
        </button>
        <div className="sign-up-link">
          Don't have an account? <a><Link to="/signup">Sign Up</Link></a>
        </div>
      </div>
    </div>
  );
}

export default Login;
