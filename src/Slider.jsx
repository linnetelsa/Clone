import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Slider = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2024/07/19/1444073-untitled-design-2024-07-19t174624.003.jpg?im=Resize=(1280,720)" alt="Sale Image 1"  style={{width:'100%' , height:'500px'} }/>
        <div className="slider__caption">
          <h3>Goat Sale</h3>
          <p>From July 23-25</p>
          <button className="slider__button">Shop Now</button>
        </div>
      </div>
      <div>
        <img src="https://assets.gopaisa.com/unsafe/0x0/https://gpcdn.ams3.cdn.digitaloceanspaces.com/ddhomebanner/flipkart-mobilebonanza-offer-banner-13112019.jpg" alt="Sale Image 2" style={{width:'100%' , height:'500px'} }/>
        <div className="slider__caption">
          <h3>Bank Offers</h3>
          <p>Exclusive Discounts with XYZ Bank</p>
        </div>
      </div>
      

      <div>
        <img src="https://www.91-cdn.com/hub/wp-content/uploads/2024/04/Top-Laptop-Deals-Feat.jpg" alt="Sale Image 2" style={{width:'100%' , height:'500px'} }/>
      </div>
      



    </Carousel>
  );
};

export default Slider;
