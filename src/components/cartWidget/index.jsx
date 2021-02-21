
import {Dropdown} from 'react-bootstrap';




const CartWidgetComponent = () => {

  return (

    <>
       <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-left">
            <img src="/img/carrito.png" width="30%" alt=""/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div>
            <ul>
              <li className="row">
                <h6 className="m-1"><strong>soy un item</strong></h6>

                
              </li>
            </ul>
          </div>
        </Dropdown.Menu>
    </Dropdown>

    </>
    
  );
}

export default CartWidgetComponent;
