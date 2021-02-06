import {Card, Button} from 'react-bootstrap';

const ItemComponent = ({item}) =>{
    return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Precio: $ {item.price}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default ItemComponent;