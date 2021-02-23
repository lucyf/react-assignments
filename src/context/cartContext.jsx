import {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart, setCart] = useState([])

    const addToCart =  (item) => {  
        if(isInCart(item) === -1){
            setCart([...cart,item]) 
        }    
    }
 
   const removeItem = (product) => {
      let removedItem = cart.filter(p => p.item.item.id !== product.item.item.id); 
      return setCart(removedItem)
   }
 
   const cancelShop = (product) => {
     let deleted = product.splice()
     return setCart(deleted)
   }
    
    
      const isInCart = (prod) => {
         return cart.findIndex(c => c.item.item.id === prod.item.item.id)
   }

    return <cartContext.Provider value= {{cart, addToCart,cancelShop, removeItem}}>
        {children}
    </cartContext.Provider>

}