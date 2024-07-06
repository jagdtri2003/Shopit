import React from 'react';
import '../style/featuredproduct.css';

function FeaturedProducts() {
    const createDiscount = () =>{
      const discount = Math.round(Math.random() * 100);
      return discount>60 ? discount-50 : discount+1;
    }
    const featuredList = [
        'https://via.placeholder.com/300x200.png?text=Slide+1',
        'https://via.placeholder.com/300x200.png?text=Slide+2',
        'https://via.placeholder.com/300x200.png?text=Slide+3',
        'https://via.placeholder.com/300x200.png?text=Slide+4',
        'https://via.placeholder.com/300x200.png?text=Slide+5',
        'https://via.placeholder.com/300x200.png?text=Slide+6'
    ]
  return (
    <section className="featured-products">
    <div className='heading-container'>
      <h2 className="heading">Featured Products
      </h2>
      <hr className='horizontal-rule'/>
      </div>
      <div className="product-carousel">
        {featuredList.map((item, index) => (
            <div className="product-card" key={index}>
                <img loading='lazy' src={item} alt="product" />
                <div className='discount'> <span className='discount-per'>{createDiscount()}% off</span> Limited time deal</div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
