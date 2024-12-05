import React, { useState, useEffect, useRef } from 'react';
import brandIcon from '../Images/profile1.png';
import food1 from '../Images/foods/food-1.png';
import food2 from '../Images/foods/food-2.png';
import food3 from '../Images/foods/food-3.png';
import food4 from '../Images/foods/food-4.png';
import food5 from '../Images/foods/food-5.png';
import food6 from '../Images/foods/food-6.png';
import table from '../Images/table.png';
import booked from '../Images/booked.png';
import available from '../Images/available.png';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWordpressSimple, FaGlobe, FaFacebook } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { Helmet } from 'react-helmet';
import FoodDetails from '../FoodShow/FoodDetails'

const Home = () => {
const [seats, setSeats] = useState ([
  // table 1
  { id: 1, top: "6%", left: "15%", isBooked: false },
  { id: 2, top: "6%", left: "25%", isBooked: false },
  { id: 3, top: "6%", left: "35%", isBooked: false },
  { id: 4, top: "30%", left: "15%", isBooked: false },
  { id: 5, top: "30%", left: "25%", isBooked: false },
  { id: 6, top: "30%", left: "35%", isBooked: false },
  { id: 7, top: "18%", left: "41%", isBooked: false },
  { id: 8, top: "18%", left: "10%", isBooked: false },

  // tabele 2
  { id: 9, top: "63%", left: "15%", isBooked: false },
  { id: 10, top: "63%", left: "25%", isBooked: false },
  { id: 11, top: "63%", left: "35%", isBooked: false },
  { id: 12, top: "86%", left: "15%", isBooked: false },
  { id: 13, top: "86%", left: "25%", isBooked: false },
  { id: 14, top: "86%", left: "35%", isBooked: false },
  { id: 15, top: "75%", left: "41%", isBooked: false },
  { id: 16, top: "75%", left: "10%", isBooked: false },

  // table 3
  { id: 17, top: "19%", left: "65%", isBooked: false },
  { id: 18, top: "19%", left: "54%", isBooked: false },

  // table 4
  { id: 19, top: "75%", left: "65%", isBooked: false },
  { id: 20, top: "75%", left: "54%", isBooked: false },

  // table 5
  { id: 21, top: "47%", left: "88%", isBooked: false },
  { id: 22, top: "47%", left: "77%", isBooked: false }
]);

const toggleSeat = (id) => {
  setSeats((prevSeats) => 
    prevSeats.map((seat) => 
    seat.id === id ? {...seat, isBooked: !seat.isBooked}:seat)
  )
}


const [showModal, setShowModal] = useState(false);

const foodItem = {
  name: 'Large Pizza',
  price: 200,
  image: food4
};

const handleDetailsClick = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};
  const [menuOpen, setMenuOpen] = useState(false);
  const foodImgsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('Burgers');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (foodImgsRef.current) {
        foodImgsRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });
      }
    }, 2000);
    return () => clearInterval(scrollInterval);
  }, []);
  const mapRef = useRef(null);
  useEffect(() => {
    if (window.google) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 5.96359, lng: 80.60980 },
      zoom: 15,
    });
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Burgers':
        return <div>
          <div className='burger-content'>
            <div className='burger-content-row'>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
                {/* Render the modal */}
      <FoodDetails show={showModal} onClose={handleCloseModal} foodItem={foodItem} />
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              
              
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      case 'Desserts':
        return <div>
          <div className='burger-content'>
            <div className='burger-content-row'>
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button' onClick={handleDetailsClick}>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food5} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      case 'Drinks':
        return <div>
          <div className='burger-content'>
            <div className='burger-content-row'>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      case 'Pasta':
        return <div>
          <div className='burger-content'>
            <div className='burger-content-row'>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              
              
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      case 'Pizzas':
        return <div>Pizzas Content</div>;
      case 'Salads':
        return <div>Salads Content</div>;
      default:
        return null;
    }
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
          <div>Booking</div>
          <div>Contact</div>
          <div>About</div>
          <div className='cart'><FaCartShopping /></div>
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
      <div className='orderContainer'>
      <h1>Orders</h1>
        <section className='orders'>
        <nav id="orders-content" className='orders-content'>
            <a className='order-kind' onClick={() => setSelectedCategory('Burgers')}>Burgers</a>
            <a className='order-kind' onClick={() => setSelectedCategory('Desserts')}>Desserts</a>
            <a className='order-kind' onClick={() => setSelectedCategory('Drinks')}>Drinks</a>
            <a className='order-kind' onClick={() => setSelectedCategory('Pasta')}>Pasta</a>
            <a className='order-kind' onClick={() => setSelectedCategory('Pizzas')}>Pizzas</a>
            <a className='order-kind' onClick={() => setSelectedCategory('Salads')}>Salads</a>
          </nav>
          {renderContent()}
          {/* <div className='burger-content'>
            <div className='burger-content-row'>
              <div className='food-item'>
                <img className='food-photo' src={food1} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food1} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food1} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food1} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food2} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food3} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
              <div className='food-item'>
                <img className='food-photo' src={food4} alt="food-item-1"/>
                <div className='food-details'>
                  <h2>Large Pizza</h2>
                  <h3>Price: 200/=</h3>
                  <div className='order-buttons'>
                    <div className='cart-but button'><FaCartShopping /> Add to cart</div>
                    <div className='details-but button'>See Details</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
        </section>
      </div>
    <div className="bookingContainer">
      <h1>Booking</h1>
    <section className="booking">
      <img className="table" src={table} alt="Table" />
      {seats.map((seat) => (
        <div
          key={seat.id}
          className="seat"
          style={{ top: seat.top, left: seat.left }}
          onClick={() => toggleSeat(seat.id)}
        >
           <img 
          src={seat.isBooked ? booked : available} 
          alt={seat.isBooked ? "Seat Booked" : "Seat Available"} 
        />
        </div>
      ))}
      </section>
    </div>

      <div className='contactContainer'>
        <h1>Contact Us</h1>
        <section className='contact'>
        <div className="contact-body">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><FaMapMarkerAlt /> 198 West 21th Street, Suite 721 New York NY 10016</p>
          <p><FaPhone /> 011 2 345 458</p>
          <p><FaFacebook /> www.facebook.com</p>
          <p><FaEnvelope /> burgers@gmail.com</p>
          <p><FaGlobe /><a href="http://burgers.com">www.burgers.com</a></p>
        </div>
      </div>
        </section>
        <div
        id="map"
        ref={mapRef}
        className="contact-map"
      ></div>

      </div>

    </div>
  );
}

export default Home;
