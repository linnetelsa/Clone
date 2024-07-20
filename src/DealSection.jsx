import React from 'react';
import './DealSection.css';

const DealSection = () => {
  const phones = [
    {
      id: 1,
      image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
      name: 'Motorola Moto G60',
      price: '12,700',
    },
    {
        id: 1,
        image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
        name: 'Motorola Moto G60',
        price: '12,700',
    },
    
    {
        id: 1,
        image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
        name: 'Motorola Moto G60',
        price: '12,700',
    },
    

    {
        id: 1,
        image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
        name: 'Motorola Moto G60',
        price: '12,700',
    },
    

    {
        id: 1,
        image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
        name: 'Motorola Moto G60',
        price: '12,700',
    },
    

    {
        id: 1,
        image: 'https://www.jiomart.com/images/product/original/rvggmqrpy2/knotyy-motorola-moto-g60-black-back-cover-product-images-orvggmqrpy2-p601882988-0-202305271033.jpg?im=Resize=(420,420)',
        name: 'Motorola Moto G60',
        price: '12,700',
    },
    


  ];

  return (
    <section className="deal-section">
      <h2>Deal on Smartphones</h2>
      <div className="deal-section__cards">
        {phones.map((phone) => (
          <div key={phone.id} className="deal-card">
            <img src={phone.image} alt={phone.name} className="deal-card__image" />
            <div className="deal-card__details">
              <h3 className="deal-card__name">{phone.name}</h3>
              <p className="deal-card__price">₹{phone.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealSection;
