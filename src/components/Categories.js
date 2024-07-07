import React from 'react';
import '../style/featuredproduct.css';


function Categories() {
    const featuredList = [
        'https://via.placeholder.com/300x200.png?text=Slide+1',
        'https://via.placeholder.com/300x200.png?text=Slide+2',
        'https://via.placeholder.com/300x200.png?text=Slide+3',
        'https://via.placeholder.com/300x200.png?text=Slide+4',
        'https://via.placeholder.com/300x200.png?text=Slide+5',
        'https://via.placeholder.com/300x200.png?text=Slide+6'
    ]
  return (
    <>
    <section className="featured-products">
    <div className='heading-container'>
      <h2 className="heading">Categories
      </h2>
      <hr className='horizontal-rule'/>
      </div>
      <div className="product-carousel">
        {featuredList.map((item, index) => (
            <div className="product-card" key={index}>
                <img loading='lazy' src={item} alt="product" />
                <h4 className='cat-name'>Category {index+1}</h4>
                <div>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</div>
                <button className='shop-now'>SHOP NOW </button>
            </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Categories