import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';



const CartWidgetComponent = () => {
  return (
    <>
    <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
        <a className="">
          <img src="/img/carrito.png" width="30%" alt=""/>
        </a>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </>
    
  );
}

export default CartWidgetComponent;
