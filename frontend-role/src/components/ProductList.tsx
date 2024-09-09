import React from 'react';
import { Product } from '../types';
import '../styles/ProductList.css';

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sortType: string;
  filterCategory: string[];
  filterPrice: number | '';
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  addToCart,
  page,
  setPage,
  sortType,
  filterCategory,
  filterPrice,
}) => {
  
  const filteredProducts = products.filter(product => {
    if (filterCategory.length > 0 && !filterCategory.includes(product.category.toLowerCase())) {
      return false;
    }
 
    if (filterPrice !== '') {
      if (filterPrice === 20 && product.price >= 20) {
        return false;
      }
      if (filterPrice === 100 && (product.price < 20 || product.price >= 100)) {
        return false;
      }
      if (filterPrice === 200 && (product.price < 100 || product.price >= 200)) {
        return false;
      }
      if (filterPrice === 201 && product.price < 200) {
        return false;
      }
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === 'alphabetically') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'price') {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

 
  const startIndex = (page - 1) * 6;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + 6);

  return (
    <div>
      <div className="product-list">
        {paginatedProducts.map(product => (
          <div key={product.name} className="product">
            <img src={product.image.src} alt={product.image.alt} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {/* <div className="pagination">
        {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
        {startIndex + 6 < sortedProducts.length && <button onClick={() => setPage(page + 1)}>Next</button>}
      </div> */}
    </div>
  );
};

export default ProductList;
