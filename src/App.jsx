import React from 'react';
import Header from './Components/Header';
import './index.css';

import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Slider from './Slider';
import DealSection from './DealSection';
import FeaturedSection from './FeaturedSection';
import FeaturedBrand from './FeaturedBrands';
import AdditionalSection from './AdditionalSection';




const App = () => {
  return (
    <div className="app">
      <Header />
      <Categories />
      <Slider />
      <DealSection />
      <FeaturedSection /> 
      <FeaturedBrand />
      <AdditionalSection />
    
      <Footer />
    </div>
  );
};

export default App;
