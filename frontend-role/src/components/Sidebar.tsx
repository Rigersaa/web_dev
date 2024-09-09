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
        <ul className="sidebar-list">
          <li><label><input type="checkbox" name="category" /> People</label></li>
          <li><label><input type="checkbox" name="category" /> Premium</label></li>
          <li><label><input type="checkbox" name="category" /> Pets</label></li>
          <li><label><input type="checkbox" name="category" /> Food</label></li>
          <li><label><input type="checkbox" name="category" /> Landmarks</label></li>
          <li><label><input type="checkbox" name="category" /> Cities</label></li>
          <li><label><input type="checkbox" name="category" /> Nature</label></li>
        </ul>
        <h3>Price range</h3>
        <ul className="sidebar-list">
          <li><label><input type="radio" name="price" /> Lower than $20</label></li>
          <li><label><input type="radio" name="price" /> $20 - $100</label></li>
          <li><label><input type="radio" name="price" /> $100 - $200</label></li>
          <li><label><input type="radio" name="price" /> More than $200</label></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
