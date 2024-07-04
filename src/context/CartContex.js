import { createContext } from "react";

const CartContext = createContext(0);

const CartProvider = () =>{
    const [cart, setCart] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    return(
        <CartContext.Provider value={[cart, setCart, cartItems, setCartItems]}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider};