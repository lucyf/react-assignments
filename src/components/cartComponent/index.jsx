import { cartContext } from '../../context/cartContext';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';


const CartComponent = () =>{
    const {cart, removeItem} = useContext(cartContext);
    
 
    return (
        <>
             <div className="m-3 p-3">
            <div>
                <h3>Carrito de compras</h3>
                </div>
            <hr/>
            {cart.map((cart) => {
                return <div className="row justify-content-left" key={cart.item.item.id}>
                <div className="m-3 col-xs-5">
                <img src={cart.item.item.img} width="100px"alt=""/>
                </div>
                <div className="m-3 col-xs-5">
                    <h4>{cart.item.item.name}</h4>
                    <h6 style={{opacity:0.5}}>{cart.quantity} productos seleccionados</h6>
                    <p>Descripcion de producto</p>
                </div>
                <div className="m-3 col-xs-5">
                    <h4>Precio: $ {cart.item.item.price}</h4> 
                </div>
                <div className="col-xs-5 aling-items-top">
                    <Button onClick={()=>removeItem(cart)} variant="none" style={{opacity: 0.5}}>x</Button>
                </div>
            </div>
            })}
 

            </div>
        </>
    )
}

export default CartComponent;