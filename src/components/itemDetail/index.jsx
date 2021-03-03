import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button,} from 'react-bootstrap';
import { cartContext } from '../../context/cartContext';
import ItemCountComponent from '../itemCount';


const ItemDetailComponent = ({item}) =>{
    const [goToCart, setGoToCart] = useState(false);
    const [number, setNumber] = useState()
   const {addToCart, totalPrice} = useContext(cartContext);
  
    
    const onAdd = (number) =>{
        setNumber(number)
        setGoToCart(true);
        addToCart({item: {item}, quantity:number});
        totalPrice({item: {item}, quantity:number})
    }

    return(
        <>
        <div className="row align-items-center justify-content-center">
            <div className="col-xs-4 m-3 p-3">
                <img src={item.img} width="250px" alt=""/>
            </div>
            <div className="col-xs-4 m-3 p-3">
                <h1>{item.name}</h1>
                <h3>${item.price}</h3>
                <p>
                    {item.description}
                </p>
            <div className="">
                {goToCart ? <div>
                    <h6 className="mt-3 mb-3">Cantidad seleccionada: {number}</h6>
                   <Link to={`/cart`}><Button variant="dark">Finalizar compra</Button></Link>
                   <Link to={`/`}><Button className="m-1" variant="danger">Seguir comprando</Button></Link>
                </div>
                
                    : <div>
                        <h6 style={{opacity: 0.5}}>{item.stock} productos disponibles</h6>
                        <ItemCountComponent onAdd={onAdd}/>

                      </div>}    
            </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetailComponent;