import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import CheckoutComponent from '../checkout';
import { useState } from 'react';
import { dataBaseContex } from '../../context/dataBaseContext';
import { getFirestore, } from '../../firebase';




const CartComponent = () =>{
    const {cart, cancelShop, removeItem, price} = useContext(cartContext);
    const {itemList} = useContext(dataBaseContex);
    const [show,setShow]= useState(true)
    const [hide,setHide]= useState(false)
    
    const condition = cart.length !== 0


    const handleView = () =>{
             setShow(false)
             setHide(true)
        
    }

    const db = getFirestore()

    const finishShop =  () => {
        let cartIds = cart.map((cart) => cart.item.item.id)
        let filter = itemList.filter(itemList => {
            let res = itemList.id.includes(cartIds.toString())
            return res === true
        })
        let cartStock = cart.map((cart) => cart.quantity)
        // let finalStock = cart.map((cart)=> filter.stock - cart.quantity)
        console.log(cartStock)
        db.collection('ItemCollection').get().then((value) =>{
                value.forEach((value, i) =>{
                    if(cartIds.includes(value.id) === true ){
                      return cart.map((cart)=>{
                        db.collection('ItemCollection').doc(value.id.toString()).update(
                         {stock: value.data().stock - cart.quantity}) 
                      }) 
                    }else if(value.data().stock <= 0){
                        alert('Los objetos seleccionados ya no se encuentran disponibles.')

                    }
                        
                })
             })
    }
 
    return (
        <>
        <div className="m-3 p-3">
            <div>
                <h3>Carrito de compras</h3>
                </div>
            <hr/>
            <div id="whole-content" className="row">
            <div className="row col-sm-6">
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
                            <p style={{opacity:0.5}}>{cart.description}</p>
                        </div>
                        <div className="m-3 col-xs-2">
                            <h6>Precio: $ {cart.item.item.price}</h6> 
                        </div>
                        <div className="col-xs-5 aling-items-top" hidden={hide}>
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
                <div className="col-xs-3" hidden={hide}>
                    <Button variant="danger" onClick={handleView} className="m-3">Checkout</Button>
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
            <div hidden={show} className="col-sm-6 pl-4" style={{borderLeftColor:"gainsboro", borderLeftStyle:"solid"}}>
                <CheckoutComponent/>
            </div>
            </div>
        </div>

        <div>
            <button onClick={finishShop}>FinishMock</button>
        </div>
        </>
    )
}

export default CartComponent;