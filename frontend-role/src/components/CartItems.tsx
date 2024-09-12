// CartItem.tsx
import React, { useState } from 'react';
import '../styles/CartItem.css';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, onQuantityChange }) => {
  const handleIncrease = () => onQuantityChange(quantity + 1);
  const handleDecrease = () => onQuantityChange(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="cart-item">
      <span>{name}</span>
      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <span>${(price * quantity).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
