import { Button, Card} from 'react-bootstrap';


const ItemDetailComponent = ({item}) =>{
    return(
        <>
        <div className="row align-items-center">
            <div className="col-xs-4">
                <img src={item.img} width="250px" alt=""/>
            </div>
            <div className="col-4">
                <h1>{item.name}</h1>
                <h3>${item.price}</h3>
                <p>
                    incerte descripcion del producto aqui
                </p>
                <Button>Check Out</Button>
            </div>
        </div>
        </>
    )
}

export default ItemDetailComponent;