import React, { useState } from 'react';
import './Signup.css';
import profileImage from '../Images/profile1.png';
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }
        try {
            await axios.post('http://localhost:5000/api/register', { email, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Login;
