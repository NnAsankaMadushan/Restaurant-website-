import React from 'react';
import './Signup.css';
import profileImage from '../Images/profile1.png';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <img src={profileImage} alt="Grand Restaurant Logo" className="logo" />
        <h1 className="title">
          <span style={{ color: 'red', fontSize: '40px'  }}>Welcome</span>
          &nbsp;
          <span style={{ color: 'orange'}}>Back !</span>
        </h1>

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
          <button className="google-button">
          <SocialIcon url="www.google.com" className="custom-social-icon" />Sign in with Google
          </button>
          <button className="facebook-button">
            <SocialIcon url="www.facebook.com" className="custom-social-icon" />Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
