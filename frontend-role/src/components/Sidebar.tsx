// Sidebar.tsx
import React, { useState } from 'react';
import '../styles/Sidebar.css'


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
          <li><input type="radio" name="category" /> Pets</li>
          <li><input type="radio" name="category" /> People</li>
          <li><input type="radio" name="category" /> Food</li>
          <li><input type="radio" name="category" /> Landmarks</li>
        </ul>
        <h3>Price range</h3>
        <ul className="sidebar-list">
          <li><input type="radio" name="price" /> Lower than $20</li>
          <li><input type="radio" name="price" /> $20 - $100</li>
          <li><input type="radio" name="price" /> $100 - $200</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
