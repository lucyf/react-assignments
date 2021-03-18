import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { checkoutContext } from '../../context/checkoutContext';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { dataBaseContex } from '../../context/dataBaseContext';

const PaymentDataComponent = ()=>{
    const {activeStep, handleBack, orderId } = useContext(checkoutContext);
    const {itemList} = useContext(dataBaseContex);
    const {cancelShop, cart} = useContext(cartContext);
    const [show, setShow] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    const isEnabled = cardNumber.length > 9 && cardName.length > 9 && expirationDate.length === 5 && securityCode.length > 2

    const handleClose = () => {
        setShow(false);
        cancelShop(cart);
    };

    const finishShop = () =>{
        cart.map((cart) => console.log(cart.item.item.id))

    }
    
    const handleShow = () => setShow(true);

   return (
        <>
    <div className="mt-3 ml-3 pl-3 row align-items-center"> 
    <Form>
        <div className="row mb-3">
            <Form.Label>Número de Tarjeta</Form.Label>
            <Form.Control  onChangeCapture={(e) =>{setCardNumber(e.target.value)}} type="number" placeholder="xxxx" />
        </div>
        <div className="row">
            <Form.Label>Nombre del Titular</Form.Label>
            <Form.Control  onChangeCapture={(e) =>{setCardName(e.target.value)}} type="text" placeholder="Como figura en tarjeta" />
        </div>
        <div className="row mt-3 mb-3">
            <div className="col pl-0">
            <Form.Label>Fecha de Vencimiento</Form.Label>
            <Form.Control  onChangeCapture={(e) =>{setExpirationDate(e.target.value)}} type="text" placeholder="mm/aa" />
            </div>
            <div className="col">
            <Form.Label>Cod. Seguridad</Form.Label>
            <Form.Control  onChangeCapture={(e) =>{setSecurityCode(e.target.value)}}   type="text" placeholder="xxx" />
            </div>
        </div>
        <div className="pl-0">
        {activeStep !== 0 && (
            <Button variant="outline-dark" className="mr-2" onClick={handleBack}>Volver</Button>
        )}
            <Button disabled={!isEnabled} onClick={handleShow} variant="dark">Finalizar Compra</Button>
        </div>
    </Form>
    </div>
    <div id="modal">

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Gracias por tu compra...</Modal.Title>
            </Modal.Header>
            <Modal.Body>El numero de tu pedido es <strong># {orderId}</strong>. Te enviamos un mail con la información de tu compra.</Modal.Body>
            <Modal.Footer>
                <Link to={`/`}><Button variant="danger" onClick={finishShop}>
                        Cerrar
                </Button></Link>
            </Modal.Footer>
    </Modal>

    </div>
    </>)
}

export default PaymentDataComponent;