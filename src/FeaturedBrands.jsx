import React from 'react';
import './FeaturedBrands.css';

const FeaturedBrands = () => {
  return (
    <section className="featured-brands">
      <h2>Featured Brands</h2>
      <div className="featured-brands__grid">
        <div className="featured-brand-card">
          <img src="https://rukminim2.flixcart.com/image/720/864/xif0q/smartwatch/v/w/h/-original-imagppkdgk35beqz.jpeg?q=60&crop=false" className="featured-brand-card__image" />
          <p>Just ₹1099</p>
        </div>
        <div className="featured-brand-card">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a61af763870605.5abf3ace2a3af.jpg" alt="Brand 2" className="featured-brand-card__image" style={{width:'100%', height:'370px'}} />
          <p>Min 50% Off</p>
        </div>
        <div className="featured-brand-card">
          <img src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/10/batch_Acer-Spin-3-1.jpg" style={{width:'100%', height:'370px'}}  />
          <p>From ₹1,97,000 Onward</p>
        </div>
      </div>
    </section>

 
  );
};

export default FeaturedBrands;
