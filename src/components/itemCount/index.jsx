import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';


const ItemCountComponent = ({onAdd}) => {
    const [number, setNumber]= useState(1);

    const plus = ()=>{
        let max = 5
        if(number <= max){
        setNumber(number + 1)
        }
    }

    const less = ()=>{
        let min = 1
        if(number > min){
        setNumber(number - 1)
        }
    }

    const handlerOnAdd =() =>{
        onAdd(number)
    }
     
    return (

    <>
    <div className="aling-items-center">
        <div id="counter" className="row d-flex justify-content-left m-1 align-items-center">
            <Button className="" onClick= {less} variant="danger" disabled={number <= 1}>-</Button> 
            <div className="ml-3 mr-3">
                <h6>{number}</h6>
            </div>
            <Button onClick={plus} variant="danger" disabled={number === 5}>+</Button>    
        <div className="m-3 d-flex justify-content-left">
                <Button id="" onClick={handlerOnAdd} className="p-1" variant="outline-danger">Agregar al carrito</Button>
        </div>
        </div>
        <div className="mb-3">
            <h6>Productos seleccionados: {number}</h6>
        </div>
    </div>
    </>
 );
}

export default ItemCountComponent;