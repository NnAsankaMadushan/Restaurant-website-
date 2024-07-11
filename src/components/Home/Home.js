import React, { useState, useEffect, useRef } from 'react';
import brandIcon from '../Images/profile1.png';
import food1 from '../Images/foods/food-1.png';
import food2 from '../Images/foods/food-2.png';
import food3 from '../Images/foods/food-3.png';
import food4 from '../Images/foods/food-4.png';
import food5 from '../Images/foods/food-5.png';
import food6 from '../Images/foods/food-6.png';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const foodImgsRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (foodImgsRef.current) {
        foodImgsRef.current.scrollBy({
          left: 200, // Adjust this value for the desired scroll distance
          behavior: 'smooth',
        });
      }
    }, 2000); // Adjust this value for the desired scroll interval (in milliseconds)

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

              <p>At Burgers, we believe in doing things differently. Every burger we serve is made to order, using 100% grass-fed beef, locally sourced produce, and freshly baked buns. Our dedication to quality extends to our kitchen, where our team of skilled chefs prepare each meal with passion and precision.</p>

              <p>Thank you for choosing Burgers. Whether you’re dining in, taking out, or ordering delivery, we are committed to providing you with an unforgettable dining experience. Join us today and discover why we’re not just serving food, but creating memories.</p>

              <p>Burgers - Taste the Difference.</p>
            </div>
          </div>
          <div className='food-imgs' ref={foodImgsRef}>
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
            <img src={food3} alt="food" />
            <img src={food4} alt="food" />
            <img src={food5} alt="food" />
            <img src={food6} alt="food" />
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
            <img src={food3} alt="food" />
            <img src={food4} alt="food" />
            <img src={food5} alt="food" />
            <img src={food6} alt="food" />
          </div>
        </section>
      </div>
      <div className='contactContainer'>
        <h1>Contact</h1>
        <section className='contact'>
          <div className='about-description'>
            <div className='contactInfo'>
              <p><i className="fas fa-phone"></i> Telephone Number : 011 2 345 458</p>
              <p><i className="fas fa-envelope"></i> Email : burgers@gmail.com</p>
              <p><i className="fas fa-globe"></i> Website : www.burgers.com</p>
              <p><i className="fab fa-facebook"></i> Facebook : www.facebook.com/burgers</p>
              <p><i className="fab fa-facebook"></i> Facebook : www.facebook.com/burgers</p>
            </div>
            <img src={brandIcon} alt="Brand Icon" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
