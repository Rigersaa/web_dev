import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776; Menu
      </div>
      <div className="sidebar-content">
        <h3>Category</h3>
        <ul>
          <li className="category-section">
            <label><input type="checkbox" name="category" value="pets" />Pets</label>
            <label><input type="checkbox" name="category" value="people" />People</label>
            <label><input type="checkbox" name="category" value="food" />Food</label>
            <label><input type="checkbox" name="category" value="landmarks" />Landmarks</label>
          </li>
          <h3>Price range</h3>
          <li className="price-section">
            <label><input type="radio" name="price" value="low" />$20 or less</label>
            <label><input type="radio" name="price" value="mid" /> $20 - $100</label>
            <label><input type="radio" name="price" value="high" />$100 - $200</label>
            <label><input type="radio" name="price" value="premium" />More than $200</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
