import React from 'react';
import { CartItem } from '../types';
import '../styles/Cart.css'

interface CartProps {
  items: CartItem[];
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.product.name} className="cart-item">
            <div className="cart-item-image">
              <img src={item.product.image.src} alt={item.product.image.alt} />
            </div>
            <div className="cart-item-info">
              <p>{item.product.name}</p>
              <p>${item.product.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.product.name, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.name, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.product.name)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
