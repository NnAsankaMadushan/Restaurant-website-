import React from 'react'
import brandIcon from '../Images/profile1.png';
import "./Home.css"

const Home = () => {
  return (
    <div className='container'>
        <nav className="navbar">
            <div className="navbar-brand">
            <img src={brandIcon} alt="Brand Icon" />
            <span>Burgers</span>
            </div>
            <div className="navbar-info">
            <div>Home</div>
            <div>Orders</div>
            <div>Contact</div>
            <div>ane mn dannaa
            </div>
            
            </div>
        </nav>
    </div>
  )
}

export default Home