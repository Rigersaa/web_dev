import React from 'react';
import { Product } from '../types';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image.src} alt={product.image.alt} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
