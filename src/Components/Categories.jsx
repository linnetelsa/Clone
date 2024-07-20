import React from 'react';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faMobileAlt, faTshirt, faShoppingBag, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <FontAwesomeIcon icon={faTv} className="category__icon" />
        <p>Home Appliances</p>
      </div>
      <div className="category">
        <FontAwesomeIcon icon={faMobileAlt} className="category__icon" />
        <p>Electronics</p>
      </div>
      <div className="category">
        <FontAwesomeIcon icon={faTshirt} className="category__icon" />
        <p>Fashion</p>
      </div>
      <div className="category">
        <FontAwesomeIcon icon={faShoppingBag} className="category__icon" />
        <p>Beauty</p>
      </div>
      <div className="category">
        <FontAwesomeIcon icon={faMale} className="category__icon" />
        <p>Men</p>
      </div>
      <div className="category">
        <FontAwesomeIcon icon={faFemale} className="category__icon" />
        <p>Women</p>
      </div>
    </div>
  );
};

export default Categories;
