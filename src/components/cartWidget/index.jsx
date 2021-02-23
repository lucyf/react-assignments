import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap';




const CartWidgetComponent = () => {

  return (

    <>
       <Link to={`/cart`}> <Button variant="none"><img src="/img/carrito.png" width="20px"alt=""/></Button></Link>

    </>
    
  );
}

export default CartWidgetComponent;
