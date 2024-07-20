import React from 'react';
import './FeaturedSection.css';

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div className="featured-section__column">
        <h2>Monsoon Essentials</h2>
        <div className="featured-section__grid">
          <div className="featured-card">
            <img src="https://wildcraft.com/media/catalog/product/1/_/1_1636.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg" className="featured-card__image" />
            <h3>Men's Raincoats</h3>
            <p>From ₹999</p>
          </div>
          <div className="featured-card">
            <img src="https://m.media-amazon.com/images/I/61g7qrq9bQL._AC_UY1100_.jpg" className="featured-card__image" />
            <h3>Umbrellas</h3>
            <p>Starting ₹299</p>
          </div>
          <div className="featured-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgPUVZUW3MsrJcINtgVzm5F6A_Yzf_GOlGA&s" className="featured-card__image" />
            <h3>Waterproof Shoes</h3>
            <p>Min 30% Off</p>
          </div>
          <div className="featured-card">
            <img src="https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/tent/g/n/n/120gsm-tirpal38-kayra-decor-original-imaf9v2cxyg8szhh.jpeg?q=90&crop=false" className="featured-card__image" />
            <h3>Rain Covers</h3>
            <p>From ₹199</p>
          </div>
        </div>
      </div>

      <div className="featured-section__column">
        <h2>Gadgets & Appliances</h2>
        <div className="featured-section__grid">
          <div className="featured-card">
            <img src="https://m.media-amazon.com/images/I/71vnZFYiscL._AC_UF1000,1000_QL80_.jpg" alt="Shavers" className="featured-card__image" />
            <h3>Shavers</h3>
            <p>From ₹499</p>
          </div>
          <div className="featured-card">
            <img src="https://m.media-amazon.com/images/I/51fkoZe-K6L.jpgpath/to/earbuds-image.jpg" alt="True Wireless Earbuds" className="featured-card__image" />
            <h3>True Wireless Earbuds</h3>
            <p>Starting ₹1,500</p>
          </div>
          <div className="featured-card">
            <img src="https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpgpath/to/smartwatch-image.jpg" alt="Smartwatch" className="featured-card__image" />
            <h3>Smartwatch</h3>
            <p>From ₹3,000</p>
          </div>
          <div className="featured-card">
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=427&qlt=100,1&resMode=sharp2&size=427,320&chrss=full" alt="Gaming Laptop" className="featured-card__image" />
            <h3>Gaming Laptop</h3>
            <p>Up to 20% Off</p>
          </div>
        </div>
      </div>

      <div className="featured-section__column">
        <img src='https://newspaperads.ads2publish.com/wp-content/uploads/2019/02/flipkart-save-on-the-flights-cheaper-flights-elsewhere-ad-times-of-india-bangalore-01-02-2019.png' style={{width:'100%',height:'700px'}} />
      </div>
    </section>
  );
};

export default FeaturedSection;