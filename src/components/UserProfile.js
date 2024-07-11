import React,{useState,useEffect} from 'react';
import '../style/userprofile.css';
import Header from './Header';
import firebaseInstance from '../firebase/firebase.js';

const UserProfile =  ({ user }) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const localOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(localOrders);

    firebaseInstance.getOrderHistory(user.uid).then((querySnapshot) => {
      if (!querySnapshot.empty) {
        const firebaseOrders = [];
        querySnapshot.forEach((doc) => {
          firebaseOrders.push(doc.data());
        });
        setOrders(firebaseOrders);
        localStorage.setItem('orders', JSON.stringify(firebaseOrders));
      }
    });
  }, [user.uid]);
  // user.orders=[
  //   {id:1, date:'27/04/2024',total:'2400'}
  // ]
  return (
    <>
    <Header/>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
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
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li key={order.paymentId}>
                <p>Order ID: {order.paymentId.slice(4)}</p>
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
