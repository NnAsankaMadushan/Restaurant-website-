import React from 'react';
import './FoodDetails.css'; 


const FoodDetails = ({ show, onClose, foodItem }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button onClick={onClose} className="close-button">X</button>
        <div className='food-container'>
            <div className='food-photo'>
                <img className='food-photo-show' src={foodItem.image} alt={foodItem.name}/>
            </div>
            <div className='order'>
                <div>
                    <h2>{foodItem.name}</h2>
                    <h3>Price: {foodItem.price}/=</h3>
                </div>
                <div><label>Choice of Size</label></div>
                <div className='choice-container'>
                    <div className='choice'>
                        <input type="radio" id="regular" name="size" value="Regular" />
                        <label for="regular">Regular</label>
                    </div>
                    <div className='choice'>
                        <input type="radio" id="large" name="size" value="Large" />
                        <label for="large">Large (+LKR 350.00)</label>
                    </div>
                </div>
                <div className='text-area'>
                <div className='special'><label>Special Instructions</label></div>
                <div><textarea placeholder="Add a note"></textarea></div>
                </div>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
