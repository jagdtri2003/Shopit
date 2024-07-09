import { failToast, successToast } from "../components/ToastComponent.js";
import firebaseInstance from "../firebase/firebase.js";

const handlePayment = (amount, cartItems, setCartItems) => () => {
  if (typeof window.Razorpay === "undefined") {
    alert("Razorpay SDK not loaded");
    return;
  }

  const options = {
    key: "rzp_test_TNEcCYqxdstfpH",
    amount: amount * 100,
    currency: "INR",
    name: "Shopit",
    description: "Test Transaction",
    image:
      "https://c8.alamy.com/comp/2A10TY5/shopping-bag-logo-design-icon-online-shop-symbol-vector-illustrations-2A10TY5.jpg",
    handler: function (response) {
      successToast(
        `Payment successful! Payment ID: ${response.razorpay_payment_id}`
      );
      firebaseInstance.saveOrderHistory({
        id: firebaseInstance.auth.currentUser.uid,
        items: [...cartItems],
        total: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        date: new Date().toDateString(),
      });
      setCartItems([]);
    },
    prefill: {
      // name: "Shubham",
      email: "email@example.com",
      // contact: "9454355011",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
    modal: {
      ondismiss: function () {
        failToast("Payment Cancelled !!");
      },
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

export { handlePayment };
