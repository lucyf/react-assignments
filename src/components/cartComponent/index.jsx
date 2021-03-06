import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


const CartComponent = () =>{
    const {cart, cancelShop, removeItem, price} = useContext(cartContext);
    
    const condition = cart.length !== 0
 
    return (
        <>
        <div className="m-3 p-3">
            <div>
                <h3>Carrito de compras</h3>
                </div>
            <hr/>
            <div className="row">
            {condition ? 
            <div id="cart-content">
            <div className="row">
                <div className="col-xs-8 m-3">
                    {cart.map((cart) => {
                        return <div className="row justify-content-left col-xs-6" key={cart.item.item.id}>
                        <div className="m-3 col-xs-4">
                        <img src={cart.item.item.img} width="80px"alt=""/>
                        </div>
                        <div className="m-3 col-xs-6">
                            <h6><strong>{cart.item.item.name}</strong></h6>
                            <p style={{opacity:0.5}} className="mb-1">Cantidad: {cart.quantity}</p>
                            <p style={{opacity:0.5}}>Descripcion de producto</p>
                        </div>
                        <div className="m-3 col-xs-2">
                            <h6>Precio: $ {cart.item.item.price}</h6> 
                        </div>
                        <div className="col-xs-5 aling-items-top">
                            <Button onClick={()=>removeItem(cart)} variant="none" style={{opacity: 0.5}}>X</Button>
                        </div>    
                    </div>
                    })}
                <hr/>
                </div>
            </div>
            <div className=" m-3 justify-content-right"> 
                <div className="aling-items-top justify-content-right col-xs-3">
                    <h5>Total a pagar: ${price} </h5>
                </div>
                <div className="col-xs-3">
                    <Link to={`/checkout`}><Button variant="danger" className="m-3">Finalizar Compra</Button></Link>
                    <Button className="p-0" variant="link" style={{color:'black', opacity:0.7,fontSize:"0.8em"}} onClick={() =>cancelShop(cart)}>Cancelar compra</Button>
                </div>
            </div>
            </div>
           : <div id="empty-cart">
                <h6 className="mb-3"> 
                    No tienes productos agregados. 
                </h6>
               <Link to={`/`}> <Button variant="danger">Seguir comprando</Button></Link>
            </div>
            }
            </div>
        </div>
        </>
    )
}

export default CartComponent;