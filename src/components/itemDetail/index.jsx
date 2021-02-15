import { useState } from 'react';
import { Button,} from 'react-bootstrap';
import ItemCountComponent from '../itemCount';


const ItemDetailComponent = ({item}) =>{
    const [goToCart, setGoToCart] = useState(false);
    const [number, setNumber] = useState()
    
    const onAdd = (number) =>{
        setNumber(number)
        setGoToCart(true);
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
                    incerte descripcion del producto aqui
                </p>
            <div className="">
                {goToCart ? <div>
                    <h6 className="mt-3 mb-3">{number} productos seleccionados</h6>
                    <Button variant="dark">Finalizar compra</Button> 
                
                </div>
                
                : <ItemCountComponent onAdd={onAdd}/> }    
            </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetailComponent;