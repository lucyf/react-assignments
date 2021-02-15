import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ItemComponent = ({item}) =>{
    return(
        <>
            <Card style={{ width: '15rem' }}>
            <Card.Img width="80%" variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Precio: $ {item.price}
                </Card.Text>
                <Link to={`/item/${item.id}`}> <Button variant="danger">Comprar</Button></Link>
            </Card.Body>
            </Card>
        </>
    )
}

export default ItemComponent;