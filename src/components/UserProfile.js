import React from 'react';
import '../style/userprofile.css';
import Header from './Header';
import firebaseInstance from '../firebase/firebase.js';

const UserProfile = ({ user }) => {
  // user.orders=[
  //   {id:1, date:'27/04/2024',total:'2400'}
  // ]
  return (
    <>
    <Header/>
    <div className="centered-container">
    <div className="user-profile">
      <h1>User Profile</h1>
      <div className="user-info">
      <img src={user.profileImage?user.profileImage :`https://via.placeholder.com/300x200.png?text=${user.displayName.charAt(0)}`} alt="Profile" className="profile-image" />
      <div className="user-details">
      <h2>{user.displayName}  <i title='Logout' onClick={()=>firebaseInstance.signOut()} style={{color:'red',cursor:'pointer'}} className="fa-solid fa-right-from-bracket"></i></h2>
      <p>Email: {user.email}</p>
      </div>
      </div>
      <div className="order-history">
        <h2>Order History</h2>
        {user.orders ? (
          <ul>
            {user.orders.map((order) => (
              <li key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Total: ₹ {order.total}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default UserProfile;
