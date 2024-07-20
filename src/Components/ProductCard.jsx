import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">{product.price}</p>
      <button className="product-card__button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
