import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedProduct from './components/FeaturedProduct';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import Cart from './components/Cart';
import Sorting from './components/Sorting';
import { Product, CartItem } from './types';
import './App.css';
import { mockProducts } from './mockData';
import filterIcon from './assets/filter-icon.png';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';



const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [sortType, setSortType] = useState<string>('alphabetically');
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterPrice, setFilterPrice] = useState<number | ''>('');
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.name !== productName));
  };

  const updateQuantity = (productName: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const handleCategoryChange = (category: string) => {
    setFilterCategory(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (price: number) => {
    setFilterPrice(price);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSidebarOpen(false);
  };

  const handleSignupLinkClick = () => {
    setShowSignup(true);
  };

  const handleLoginLinkClick = () => {
    setShowSignup(false);
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        showSignup ? (
          <SignupForm onLoginClick={handleLoginLinkClick} />
        ) : (
          <LoginForm setIsAuthenticated={setIsAuthenticated} onSignupClick={handleSignupLinkClick} />
        )
      ) : (
        <>
          <Header cartItems={cartItems} onCartClick={toggleCartVisibility} />
          <FeaturedProduct products={mockProducts} addToCart={addToCart} />
          <div className="main-content-wrapper">
            {!isMobile && (
              <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <h3>Category</h3>
                <ul>
                  {['Pets', 'People', 'Food', 'Landmarks'].map(category => (
                    <li key={category}>
                      <label>
                        <input
                          type="checkbox"
                          value={category}
                          onChange={() => handleCategoryChange(category.toLowerCase())}
                        />
                        {category}
                      </label>
                    </li>
                  ))}
                </ul>
                <h3>Price range</h3>
                <ul>
                  {[
                    { label: 'Lower than $20', value: 20 },
                    { label: '$20 - $100', value: 100 },
                    { label: '$100 - $200', value: 200 },
                    { label: 'More than $200', value: 201 },
                  ].map(price => (
                    <li key={price.label}>
                      <label>
                        <input
                          type="radio"
                          name="price"
                          value={price.value}
                          onChange={() => handlePriceChange(price.value)}
                        />
                        {price.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
            <main className="main-content">
              {isMobile && (
                <>
                  <button className="toggle-sidebar-btn" onClick={toggleDropdown}>
                    <img src={filterIcon} alt="Filter" className="filter-icon" />
                    Photography / Premium Photos
                  </button>
                  <div className={`sidebar-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                    <h3>Category</h3>
                    <ul>
                      {['Pets', 'People', 'Food', 'Landmarks'].map(category => (
                        <li key={category}>
                          <label>
                            <input
                              type="checkbox"
                              value={category}
                              onChange={() => handleCategoryChange(category.toLowerCase())}
                            />
                            {category}
                          </label>
                        </li>
                      ))}
                    </ul>
                    <h3>Price range</h3>
                    <ul>
                      {[
                        { label: 'Lower than $20', value: 20 },
                        { label: '$20 - $100', value: 100 },
                        { label: '$100 - $200', value: 200 },
                        { label: 'More than $200', value: 201 },
                      ].map(price => (
                        <li key={price.label}>
                          <label>
                            <input
                              type="radio"
                              name="price"
                              value={price.value}
                              onChange={() => handlePriceChange(price.value)}
                            />
                            {price.label}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              <Sorting sortType={sortType} setSortType={setSortType} />
              <ProductList
                products={mockProducts}
                addToCart={addToCart}
                page={page}
                setPage={setPage}
                sortType={sortType}
                filterCategory={filterCategory}
                filterPrice={filterPrice}
              />
               <Pagination page={page} setPage={setPage} />
            </main>
          </div>
          {isCartVisible && (
            <div className="cart-overlay">
              <div className="cart-header">
                <h3>Your Cart</h3>
                <button className="close-button" onClick={closeCart}>
                  &times;
                </button>
              </div>
              <Cart
                items={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
