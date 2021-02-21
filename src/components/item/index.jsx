import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ItemCountComponent from '../itemCount';
import { cartContext } from '../../context/cartContext';
import { useContext, useState } from 'react';


const ItemComponent = ({item}) =>{

    return(
        <>
            <Card style={{ width: '15rem' }} >
            <Card.Img width="200px" variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Precio: $ {item.price}
                </Card.Text>
                <div className="align-items-center justify-content-center ">
                <Link to={`/item/${item.id}`}> <Button variant="light" className="mb-2 pl-5 pr-5">Ver detalle</Button></Link>
                </div>
            </Card.Body>
            </Card>
        </>
    )
}

export default ItemComponent;