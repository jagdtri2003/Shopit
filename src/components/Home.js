import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
// import {Context } from '../context/UserContext'
import firebaseInstance from '../firebase/firebase';


function Home() {
  // const {user,setUser} = useContext(Context);
  const user = firebaseInstance.auth.currentUser;
  console.log(user)
  return (
    <div>Home
        <br/>
        <button onClick={()=>firebaseInstance.auth.signOut()}><Link to="/about" >About</Link></button>
    </div>
  )
}

export default Home