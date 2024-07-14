import React, { useState } from 'react';
import './Signup.css';
import profileImage from '../Images/profile1.png';
import brandIcon from '../Images/profile1.png';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={brandIcon} alt="Brand Icon" />
          <span>Burgers</span>
        </div>
        <button className="toggle-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-info ${menuOpen ? 'show' : ''}`}>
          <div>Email: info@burgers.com</div>
          <div>Phone: 011 234-5678</div>
          <div className='signinup'>
            <a href="#" onClick={() => setIsFlipped(false)}>Sign Up</a>
            <a href="#" onClick={() => setIsFlipped(true)}>Sign In</a>
          </div>
        </div>
      </nav>
      <div className="logincontainer">
        <div className={`form-container ${isFlipped ? 'flipped' : ''}`}>
          <form className="form signup-form" onSubmit={handleSubmit}>
            <img src={profileImage} alt="Grand Restaurant Logo" className="logo" />
            <h1 className="title">
              <span style={{ color: 'red', fontSize: '40px' }}>Welcome</span>&nbsp;
              <span style={{ color: 'orange' }}>Back !</span>
            </h1>
            <p className="subtitle">Enter your details to access your account</p>
            <input type="email" className="input" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="input" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className="checkbox-wrapper">
              <input type="checkbox" className="checkbox" />
              <label className="label">Accept terms and conditions</label>
            </div>
            <button className="button">Sign Up</button>
            <p className="text-signin">Or sign in with</p>
            <div className="social-buttons">
              <button className="google-button">
                <SocialIcon url="https://google.com" className="custom-social-icon" />Sign in with Google
              </button>
              <button className="facebook-button">
                <SocialIcon url="https://facebook.com" className="custom-social-icon" />Sign in with Facebook
              </button>
            </div>
            <button className="flip-button" type="button" onClick={() => setIsFlipped(true)}>Sign In</button>
          </form>
          <form className="form signin-form" onSubmit={handleSigninSubmit}>
            <img src={profileImage} alt="Grand Restaurant Logo" className="logo" />
            <h1 className="title">
              <span style={{ color: 'red', fontSize: '40px' }}>Welcome</span>&nbsp;
              <span style={{ color: 'orange' }}>Back !</span>
            </h1>
            <p className="subtitle">Enter your details to sign in to your account</p>
            <input type="email" className="input" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="button">Sign In</button>
            <p className="text-signin">Or sign in with</p>
            <div className="social-buttons">
              <button className="google-button">
                <SocialIcon url="https://google.com" className="custom-social-icon" />Sign in with Google
              </button>
              <button className="facebook-button">
                <SocialIcon url="https://facebook.com" className="custom-social-icon" />Sign in with Facebook
              </button>
            </div>
            <button className="flip-button" type="button" onClick={() => setIsFlipped(false)}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
