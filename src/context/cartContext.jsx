import {createContext, useState} from 'react';
import ProductList from "../mocks/products"

export const cartContext = createContext();

export const CartProvider = ({children})=> {
   // const [cart, setCart] = useState()
    const [cart, setCart] = useState([])


    return <cartContext.Provider value= {{cart, setCart}}>
        {children}
    </cartContext.Provider>

}