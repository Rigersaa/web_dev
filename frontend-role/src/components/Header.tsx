import React, { memo } from 'react';
import { CartItem } from '../types';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = memo(({ cartItems, onCartClick }) => {
  return (
    <div className="header">
      <div className="cart-icon" onClick={onCartClick}>
        <i className="fas fa-shopping-cart"></i>
        <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>
    </div>
  );
});

export default Header;
