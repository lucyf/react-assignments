import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pStyle = () => {
    
}

const CartDrawerComponent = () =>{
    const {cart, cancelShop, removeItem, price} = useContext(cartContext);
    
 
    return (
        <>
        <div className="m-3 p-3">
            <div>
                <h5 style={{opacity: 0.5, color:"red"}}>Agregado al Carrito</h5>
            </div>
            <hr/>
            <div className="row">
                <div className="col">
                {cart.map((cart) => {
                    return <div className="row justify-content-left align-items-top m-2 " key={cart.item.item.id}>
                    <div className="col-xs-3 m-1">
                        <img src={cart.item.item.img} width="70px" alt=""/>
                    </div> 
                    <div className=" col">
                        <h6 className="m-1">{cart.quantity} {cart.item.item.name}</h6>
                        <p className="m-1" style={{opacity: 0.5}}>${cart.item.item.price}</p> 
                    </div>
                    <div className="col-xs-1 aling-items-top">
                        <Button className="p-0" onClick={()=>removeItem(cart)} variant="none" style={{opacity: 0.5}}>X</Button>
                    </div>
                </div>
                })}
                </div>
            </div>
            <hr/>
            <h6 className="mb-2">Subtotal:$ {price}</h6>
            <div className="row justify-content-center">
                   <Link to={`/cart`}> <Button variant="danger" className="m-1" style={{padding:"0.3rem 5rem"}}>Ir al Carrito</Button></Link>
                    <Button  className="p-0" variant="link" style={{color:'black', fontSize:"0.85rem", opacity:0.7}} onClick={() =>cancelShop(cart)}>Cancelar</Button>
                        
                </div>
        </div>
        </>
    )
}

export default CartDrawerComponent;