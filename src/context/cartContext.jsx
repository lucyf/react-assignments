import {createContext, useState} from 'react';

export const cartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    const addToCart =  (item) => {  
        if(isInCart(item) === -1){
            setCart([...cart,item]) 
        }    
    }
 
    const totalPrice = (product) =>{
        let priceQuantity = product.quantity * product.item.item.price
        let isItemInCart = cart.findIndex(c => c.item.item.id === product.item.item.id)
        if(isItemInCart === -1){
            return setPrice(price + priceQuantity)   
        }
    
    }

   const removeItem = (product) => {
        let removedPrice = product.quantity * product.item.item.price
        let removedItem = cart.filter(p => p.item.item.id !== product.item.item.id); 
        setCart(removedItem);
        setPrice(price - removedPrice)
      
          
   }
 
   const cancelShop = (product) => {
     let deleted = product.splice()
     let price = 0
     setCart(deleted)
     setPrice(price)

   }
    
    
      const isInCart = (prod) => {
         return cart.findIndex(c => c.item.item.id === prod.item.item.id)
   }

    return <cartContext.Provider value= {{cart, addToCart,cancelShop, removeItem, totalPrice, price}}>
        {children}
    </cartContext.Provider>

}