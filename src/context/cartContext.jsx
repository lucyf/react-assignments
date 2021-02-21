import {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart, setCart] = useState([])

   const addToCart =  (item) => {      
        
         setCart([...cart,item]) 
      
   }

   
   const isInCart = (id) => {

         return cart.findIndex(prod => prod.id === id)
  }

    return <cartContext.Provider value= {{cart, addToCart}}>
        {children}
    </cartContext.Provider>

}