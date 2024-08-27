import React from 'react';
import './FoodDetails.css'; 


const FoodDetails = ({ show, onClose, foodItem }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='food-container'>
            <button onClick={onClose} className="close-button">X</button>
            <img className='food-photo' src={foodItem.image} alt={foodItem.name}/>
            <h2>{foodItem.name}</h2>
            <h3>Price: {foodItem.price}/=</h3>
            <div>
            <label>Choice of Size</label>
            <div>
                <input type="radio" id="regular" name="size" value="Regular" />
                <label for="regular">Regular</label>
            </div>
            <div>
                <input type="radio" id="large" name="size" value="Large" />
                <label for="large">Large (+LKR 350.00)</label>
            </div>
            </div>
            <div>
            {/* <label>Special Instructions</label>
            <textarea placeholder="Add a note"></textarea> */}
            </div>
            <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
