import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


const ItemCountComponent = () => {
    const [number, setNumber]= useState(0);
 
    return (

    <>
    <div className="col-4 align-items-center">
        <div className="row m-3 align-items-center">
        
        <Button onClick={() =>{setNumber(number + 1)}} variant="light" disabled={number === 5}>+</Button>
        <div className="ml-3 mr-3">
            <h6>{number}</h6>
        </div>
        <Button onClick={() =>{setNumber(number - 1)}} variant="light" disabled={number === 0}>-</Button>
        
        </div>

        <div className=" row m-3">
            <Button>Agregar al carrito</Button>
        </div>
    </div>
    </>
 );
}

export default ItemCountComponent;