import React from 'react';
import './AdditionalSection.css';

const AdditionalSection = () => {
  return (
    <section className="additional-section">
     
     <div className="additional-section__grid">
        <div className="additional-section-card">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/716e0a9c24091291.jpeg?q=20" alt="Extra 1" className="additional-section-card__image" style={{width:'100%' ,height:'300px'}} />
          
        </div>
        <div className="additional-section-card">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/b9670bbcfe794c85.jpeg?q=20" />
          
        </div>
        <div className="additional-section-card">
          <img src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a6a6001d28fbc933.jpeg?q=20" />
         
        </div>
      </div>
    </section>
  );
};

export default AdditionalSection;
