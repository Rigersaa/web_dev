import React from 'react';
import { Product } from '../types';
import '../styles/FeaturedProduct.css';

interface FeaturedProductProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ products, addToCart }) => {
  const featuredProduct = products.find(product => product.featured);

  if (!featuredProduct) {
    return <p>No featured product available.</p>;
  }

  return (
    <div className="featured-product">
      <div className="product-item">
        <img src={featuredProduct.image.src} alt={featuredProduct.image.alt} className="featured-image" />
        <div className="product-info">
          <div className="product-details">
            <button onClick={() => addToCart(featuredProduct)}>Add to Cart</button>
            <h3>About the {featuredProduct.name}</h3>
            <p className="category">{featuredProduct.category}</p>
            <p className="description">{featuredProduct.details?.description || 'No description available.'}</p>
          </div>
          <div className="recommendations">
            <h4>People also buy</h4>
            <div className="images">
              {featuredProduct.details?.recommendations?.map((rec, index) => (
                <img key={index} src={rec.src} alt={rec.alt} className="recommendation-image" />
              )) || <p>No recommendations available.</p>}
            </div>
          </div>
        </div>
        <div className="additional-info">
          <div className="details">
            <h4>Details</h4>
            <p>Dimensions: {featuredProduct.details?.dimmentions?.width || 'N/A'} x {featuredProduct.details?.dimmentions?.height || 'N/A'} pixels</p>
            <p>Size: {(featuredProduct.details?.size || 0) / 1000} MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
