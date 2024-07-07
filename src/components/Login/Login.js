import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <img src="../Images/profile.png" alt="Grand Restaurant Logo" className="logo" />
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Enter your details to access to your account</p>
        <input type="email" className="input" placeholder="Enter your email address" />
        <input type="password" className="input" placeholder="Password" />
        <input type="password" className="input" placeholder="Confirm password" />
        <div className="checkbox-wrapper">
          <input type="checkbox" className="checkbox" />
          <label className="label">Accept terms and conditions</label>
        </div>
        <button className="button">Sign Up</button>
        <p className="text-signin">Or sign in with</p>
        <div className="social-buttons">
          <button className="google-button">Sign in with Google</button>
          <button className="facebook-button">Sign in with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
