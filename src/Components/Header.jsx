import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNju7w1CeiteE9eiNIN8qeoXoehxdfFYgPtQ&s" alt="Flipkart Logo" className="header__logo"  style={{width:'50px'}}/>
        
      </div>
      <div className="header__center">
        <input type="text" className="header__search" placeholder="Search for products, brands and more" />
        <button className="header__searchButton">Search</button>
      </div>
      <div className="header__right">
        <button className="header__button">Login</button>
        <a href="#" className="header__link">Become a Seller</a>
        <a href="#" className="header__cart">
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
