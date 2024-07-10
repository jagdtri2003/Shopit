import React from 'react'
// import {Context } from '../context/UserContext'
import Header from './Header';
// import { CartContext } from '../context/CartContex';
import ImageSlider from './ImageSlider';
import FeaturedProducts from './FeaturedProduct';
import Categories from './Categories';
import img1 from '../images/img1.png'
import img2 from '../images/img2.jpg'


function Home() {
  const images = [
    img1,
    img2,
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
    <Categories/>
    </>
  )
}

export default Home;

