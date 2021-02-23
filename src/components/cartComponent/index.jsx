import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';


const CartComponent = () =>{
    const {cart, cancelShop, removeItem} = useContext(cartContext);
    
 
    return (
        <>
        <div className="m-3 p-3">
            <div>
                <h3>Carrito de compras</h3>
                </div>
            <hr/>
            <div className="row">
            <div className="col-xs-6 m-3">
            {cart.map((cart) => {
                return <div className="row justify-content-left col-xs-6" key={cart.item.item.id}>
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
            <div className="col-xs-6 m-3 justify-content-right"> 
                <div className="row aling-items-top justify-content-right">
                    <h5>Total Price: </h5>
                    <Button variant="link" style={{color:'black'}} onClick={() =>cancelShop(cart)}>Cancelar Compra</Button>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default CartComponent;