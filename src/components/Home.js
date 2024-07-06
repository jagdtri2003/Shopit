import React from 'react'
// import {Context } from '../context/UserContext'
import Header from './Header';
// import { CartContext } from '../context/CartContex';
import ImageSlider from './ImageSlider';
import FeaturedProducts from './FeaturedProduct';


function Home() {
  const images = [
    'https://via.placeholder.com/1000x400.png?text=Slide+1',
    'https://via.placeholder.com/1000x400.png?text=Slide+2',
    'https://via.placeholder.com/1000x400.png?text=Slide+3',
    'https://via.placeholder.com/1000x400.png?text=Slide+4',
    'https://via.placeholder.com/1000x400.png?text=Slide+5',
    'https://via.placeholder.com/1000x400.png?text=Slide+6'
  ];
  // const {cart,setCart} = useContext(CartContext);
  return (
  <>
    <Header />
    <ImageSlider images={images} />
    <FeaturedProducts/>
    </>
  )
}

export default Home;

