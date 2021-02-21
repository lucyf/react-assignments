import { cartContext } from '../../context/cartContext';
import { useContext, useState } from 'react';
import ItemCountComponent from '../itemCount';


const CartComponent = () =>{
    const {cart} = useContext(cartContext);
    
 
    return (
        <>
             <div className="m-3 p-3">
            <div>
                <h3>Carrito de compras</h3>
                </div>
            <hr/>
            {cart.map((cart) => {
                return <div className="row justify-content-center" key={cart.item.item.id}>
                <div className="m-3 col-xs-5">
                <img src={cart.item.item.img} width="200px"alt=""/>
                </div>
                <div className="m-3 col-xs-5">
                    <h4>{cart.item.item.name}</h4>
                    <h6 style={{opacity:0.5}}>{cart.quantity} cantidad seleccionada</h6>
                    <p>Descripcion de producto</p>
                </div>
                <div className="m-3 col-xs-5">
                    <h4>Precio: $ {cart.item.item.price}</h4>
                    
                </div>
            </div>
            })}
 

            </div>
        </>
    )
}

export default CartComponent;