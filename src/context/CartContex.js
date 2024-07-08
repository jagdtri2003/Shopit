import { createContext,useState } from "react";

const CartContext = createContext(0);

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id, item, count) => {
        setCartItems((prevCartItems) => {
          const existingItem = prevCartItems.find((i) => i.id === id);
          if (existingItem) {
            return prevCartItems.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + count } : i
            );
          } else {
            setCart((prevCount) => prevCount + 1);
            return [
              ...prevCartItems,
              { id, name: item.name, quantity: count, price: item.price, image: item.image, sku:`Sku-${id}`,brand:'Brand 1'},
            ];
          }
        });
      };

    return(
        <CartContext.Provider value={{cart, setCart, cartItems, setCartItems,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider};