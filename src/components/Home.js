import React,{useContext} from 'react'
// import {Context } from '../context/UserContext'
import firebaseInstance from '../firebase/firebase';
import Header from './Header';
import { CartContext } from '../context/CartContex';
import ImageSlider from './ImageSlider';
import FeaturedProducts from './FeaturedProduct';


function Home() {
  const images = [
    'https://via.placeholder.com/1600x600.png?text=Slide+1',
    'https://via.placeholder.com/1600x600.png?text=Slide+2',
    'https://via.placeholder.com/1600x600.png?text=Slide+3',
  ];
  // const {user,setUser} = useContext(Context);
  const {cart,setCart} = useContext(CartContext);
  const user = firebaseInstance.auth.currentUser;
  console.log(user)
  return (
  <>
    <Header />
    <ImageSlider images={images} />
    <FeaturedProducts/>
    <div className='centered-container'>Welcome,{user.displayName} 👀!!
        <br/>
        <button onClick={()=>firebaseInstance.auth.signOut()}>Logout</button>
        {/* <button onClick={()=>setCart(cart+1)}>Add to cart +</button>
        <button onClick={()=>cart>0 ? setCart(cart-1) : setCart(0)}>Remove from cart -</button> */}
    </div>
    </>
  )
}

export default Home;

