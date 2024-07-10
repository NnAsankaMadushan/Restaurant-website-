import React, { useState } from 'react';
import brandIcon from '../Images/profile1.png';
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container'>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={brandIcon} alt="Brand Icon" />
          <span>Burgers</span>
        </div>
        <button className="toggle-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-info ${menuOpen ? 'show' : ''}`}>
          <div>Home</div>
          <div>Orders</div>
          <div>Contact</div>
          <div>About</div>
        </div>
      </nav>
      <div className='homeContainer'>
        <img src={brandIcon} alt="Brand Icon" />
      </div>
    </div>
  );
}

export default Home;
