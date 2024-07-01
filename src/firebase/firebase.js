import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signOut, sendPasswordResetEmail, updatePassword, updateEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, orderBy, startAfter, limit, query, where } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.db = getFirestore();
    this.storage = getStorage();
  }

  // AUTH ACTIONS ------------

  createAccount = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  signIn = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  signInWithGoogle = () =>
    signInWithPopup(this.auth, new GoogleAuthProvider());

  signInWithFacebook = () =>
    signInWithPopup(this.auth, new FacebookAuthProvider());

  signInWithGithub = () =>
    signInWithPopup(this.auth, new GithubAuthProvider());

  signOut = () => signOut(this.auth);

  passwordReset = (email) => sendPasswordResetEmail(this.auth, email);

  addUser = (id, user) => setDoc(doc(this.db, "users", id), user);

  getUser = (id) => getDoc(doc(this.db, "users", id));

  passwordUpdate = (password) => updatePassword(this.auth.currentUser, password);

  changePassword = (currentPassword, newPassword) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          updatePassword(user, newPassword)
            .then(() => {
              resolve("Password updated successfully!");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

//   reauthenticate = (currentPassword) => {
//     const user = this.auth.currentUser;
//     const cred = EmailAuthProvider.credential(user.email, currentPassword);

//     return user.reauthenticateWithCredential(cred);
//   };

  updateEmail = (currentPassword, newEmail) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          updateEmail(user, newEmail)
            .then(() => {
              resolve("Email Successfully updated");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  updateProfile = (id, updates) =>
    updateDoc(doc(this.db, "users", id), updates);

  onAuthStateChanged = () =>
    new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Auth State Changed failed"));
        }
      });
    });

  saveBasketItems = (items, userId) =>
    updateDoc(doc(this.db, "users", userId), { basket: items });

  // PRODUCT ACTIONS --------------

  getSingleProduct = (id) => getDoc(doc(this.db, "products", id));

  getProducts = (lastRefKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKey) {
          try {
            const q = query(collection(this.db, "products"),
              orderBy("id"),
              startAfter(lastRefKey),
              limit(12)
            );

            const snapshot = await getDoc(q);
            const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ products, lastKey });
          } catch (e) {
            reject(e?.message || "Failed to fetch products.");
          }
        } else {
          const timeout = setTimeout(() => {
            didTimeout = true;
            reject(new Error("Request timeout, please try again"));
          }, 15000);

          try {
            const totalQuery = await getDoc(collection(this.db, "products"));
            const total = totalQuery.docs.length;
            const q = query(collection(this.db, "products"),
              orderBy("id"),
              limit(12)
            );

            const snapshot = await getDoc(q);

            clearTimeout(timeout);
            if (!didTimeout) {
              const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              resolve({ products, lastKey, total });
            }
          } catch (e) {
            if (didTimeout) return;
            reject(e?.message || "Failed to fetch products.");
          }
        }
      })();
    });
  };

  searchProducts = (searchKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        const productsRef = collection(this.db, "products");

        const timeout = setTimeout(() => {
          didTimeout = true;
          reject(new Error("Request timeout, please try again"));
        }, 15000);

        try {
          const searchedNameRef = query(productsRef,
            orderBy("name_lower"),
            where("name_lower", ">=", searchKey),
            where("name_lower", "<=", `${searchKey}\uf8ff`),
            limit(12)
          );
          const searchedKeywordsRef = query(productsRef,
            orderBy("dateAdded", "desc"),
            where("keywords", "array-contains-any", searchKey.split(" ")),
            limit(12)
          );

          const [nameSnaps, keywordsSnaps] = await Promise.all([
            getDoc(searchedNameRef),
            getDoc(searchedKeywordsRef)
          ]);

          clearTimeout(timeout);
          if (!didTimeout) {
            const searchedNameProducts = nameSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const searchedKeywordsProducts = keywordsSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            // MERGE PRODUCTS
            const mergedProducts = [
              ...searchedNameProducts,
              ...searchedKeywordsProducts,
            ];
            const hash = {};

            mergedProducts.forEach((product) => {
              hash[product.id] = product;
            });

            resolve({ products: Object.values(hash) });
          }
        } catch (e) {
          if (didTimeout) return;
          reject(e);
        }
      })();
    });
  };

  getFeaturedProducts = (itemsCount = 12) =>
    query(collection(this.db, "products"),
      where("isFeatured", "==", true),
      limit(itemsCount)
    );

  getRecommendedProducts = (itemsCount = 12) =>
    query(collection(this.db, "products"),
      where("isRecommended", "==", true),
      limit(itemsCount)
    );

  addProduct = (id, product) =>
    setDoc(doc(this.db, "products", id), product);

  generateKey = () => doc(this.db, "products").id;

//   storeImage = async (id, folder, imageFile) => {
//     const snapshot = await put(ref(this.storage, `${folder}/${id}`), imageFile);
//     const downloadURL = await getDownloadURL(snapshot.ref);

//     return downloadURL;
//   };

  deleteImage = (id) => deleteObject(ref(this.storage, `products/${id}`));

  editProduct = (id, updates) =>
    updateDoc(doc(this.db, "products", id), updates);

  removeProduct = (id) => deleteObject(doc(this.db, "products", id));
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
