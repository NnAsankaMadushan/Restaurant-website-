import React, { useState, useEffect } from 'react';
import brandIcon from '../Images/profile1.png';
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const foodImgs = document.querySelector('.food-imgs');
      if (foodImgs) {
        const firstImg = foodImgs.firstElementChild;
        foodImgs.appendChild(firstImg);
      }
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(scrollInterval);
  }, []);

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
        <h1>About Us</h1>
        <section className='about'>
          <div className='about-description'>
            <img src={brandIcon} alt="Brand Icon" />
            <div>
              <p>Welcome to <span>Burgers</span>, where flavor meets quality! Since our founding in 2010, we have been committed to crafting the most delicious and satisfying burgers in town. Our journey began with a simple yet powerful idea: to create a place where people could enjoy high-quality, gourmet burgers made from the freshest ingredients.</p>

              <p>Thank you for choosing Burgers. Whether you’re dining in, taking out, or ordering delivery, we are committed to providing you with an unforgettable dining experience. Join us today and discover why we’re not just serving food, but creating memories.</p>

              <p>Burgers - Taste the Difference.</p>
            </div>
          </div>
          <div className='food-imgs'>
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
      
          </div>
        </section>
      </div>
      <div className='homeContainer'>
        <h1>About Us</h1>
        <section className='about'>
          <div className='about-description'>
            <img src={brandIcon} alt="Brand Icon" />
            <div>
              <p>Welcome to <span>Burgers</span>, where flavor meets quality! Since our founding in 2010, we have been committed to crafting the most delicious and satisfying burgers in town. Our journey began with a simple yet powerful idea: to create a place where people could enjoy high-quality, gourmet burgers made from the freshest ingredients.</p>

              <p>Thank you for choosing Burgers. Whether you’re dining in, taking out, or ordering delivery, we are committed to providing you with an unforgettable dining experience. Join us today and discover why we’re not just serving food, but creating memories.</p>

              <p>Burgers - Taste the Difference.</p>
            </div>
          </div>
          <div className='food-imgs'>
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
            <img src={brandIcon} alt="Brand Icon" />
      
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
