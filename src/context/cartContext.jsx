import {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart, setCart] = useState([])

   const addToCart =  (item) => {      
        setCart([...cart,item]) 
   }

  const removeItem = (product) => {
     let index = cart.findIndex(p => p.id === product.id);
        return cart.splice(index, 1)
  }

   
   
     const isInCart = (item) => {

         return 
  }


    return <cartContext.Provider value= {{cart, addToCart, removeItem}}>
        {children}
    </cartContext.Provider>

}