import Form from 'react-bootstrap/Form';
import {Button }from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { getFirestore } from '../../firebase';
import Modal from 'react-bootstrap/Modal';

// import FormControl from 'react-bootstrap/FormControl';
// import FormFile from 'react-bootstrap/FormFile';
// import FormCheck from 'react-bootstrap/FormCheck'

const CheckoutComponent = ()=>{
    const {cart, price, cancelShop} = useContext(cartContext)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [show, setShow] = useState(false);
   // const [disabled, setDisabled] = useState(true)
    let isEnabled = name.length > 0 && email.length > 0 && phone.length > 0 && phone.length > 0

    const handleClose = () => {
        setShow(false);
        cancelShop(cart)
    };
    const handleShow = () => setShow(true);

    let newOrder = {buyer:{name: name, lastname: lastName, email: email, phone: phone},items: [...cart], total:price}

    const db = getFirestore()
    const OrderCollection = db.collection("Orders")

   const orderBtn = ()=>{
        OrderCollection.add(newOrder).then((value) =>{
            setOrderId(value.id)
        });
        handleShow()
    }  
    

   
    return (
        <div className="mt-3 ml-3">
            <div id="checkout">
           <div className="row mb-3">
               <h1>CheckOut</h1>
            </div>
            <div id="form" className="row align-items-center">
            <Form >
                
                <div className="row">
                <div className="col">
                <Form.Label>Nombre/s</Form.Label>
                <Form.Control type="text" onChangeCapture={(e) =>{setName(e.target.value)}} placeholder="Nombre/s" />
                </div>
                <div className="col">
                <Form.Label>Apellido/s</Form.Label>
                <Form.Control type="text" onChangeCapture={(e) =>{setLastName(e.target.value)}} placeholder="Apellido/s" />
                </div>
                </div>
                <Form.Group className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChangeCapture={(e) =>{setEmail(e.target.value)}} placeholder="Ingresa tu email" />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" onChangeCapture={(e) =>{setPhone(e.target.value)}} placeholder="Ingresa tu teléfono" />
                </Form.Group>
                <Button disabled={!isEnabled} onClick={orderBtn} variant="dark">Comprar</Button>
            </Form>
            </div>
            </div>
            <div id="modal">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Compra exitosa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        Gracias por confiar en nosotros. Tu compra ha sido procesada con éxito.
                        </p>
                        <h6>Tu numero de orden es: <strong> {orderId}</strong></h6>
                    </Modal.Body>
                    <Modal.Footer>
                    <Link to={`/`}><Button variant="dark" onClick={handleClose}>
                        Finalizar
                    </Button>
                    </Link>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )

}

export default CheckoutComponent;