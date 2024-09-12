import React from 'react';
import { CartItem } from '../types';
import '../styles/Cart.css';

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
              <p className="cart-item-name">{item.product.name}</p>
              <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button 
                  onClick={() => updateQuantity(item.product.name, item.quantity - 1)} 
                  disabled={item.quantity === 1}
                  className="quantity-button"
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.product.name, item.quantity + 1)} 
                  className="quantity-button"
                >
                  +
                </button>
                <p className="cart-item-total-price">
                  Total: ${(item.quantity * item.product.price).toFixed(2)}
                </p>
              </div>
              <button 
                onClick={() => removeFromCart(item.product.name)} 
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
