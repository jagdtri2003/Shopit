import React from 'react'
// import {Context } from '../context/UserContext'
import firebaseInstance from '../firebase/firebase';


function Home() {
  // const {user,setUser} = useContext(Context);
  const user = firebaseInstance.auth.currentUser;
  console.log(user)
  return (
    <div>Welcome,{user.displayName} 👀!!

        <br/>
        <button onClick={()=>firebaseInstance.auth.signOut()}>Logout</button>
    </div>
  )
}

export default Home