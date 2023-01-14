import { createContext, useState } from "react";


export const CartContext= createContext();

const CartContextProvider=({children})=>{
    const [product, setProduct] = useState([]);
    return(
        <CartContext.Provider value={{product,setProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
