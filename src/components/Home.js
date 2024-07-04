import React from 'react'
// import {Context } from '../context/UserContext'
import firebaseInstance from '../firebase/firebase';
import Header from './Header';


function Home() {
  // const {user,setUser} = useContext(Context);
  const user = firebaseInstance.auth.currentUser;
  console.log(user)
  return (
  <>
    <Header/>
    <div className='centered-container'>Welcome,{user.displayName} 👀!!
        <br/>
        <button onClick={()=>firebaseInstance.auth.signOut()}>Logout</button>
    </div>
    </>
  )
}

export default Home;

