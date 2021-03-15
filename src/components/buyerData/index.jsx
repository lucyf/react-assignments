import Form from 'react-bootstrap/Form';
import {Button }from 'react-bootstrap';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { getFirestore } from '../../firebase';
import { checkoutContext } from '../../context/checkoutContext';

const BuyerDataComponent = ()=>{
    const {cart, price, cancelShop} = useContext(cartContext)
    const {activeStep, handleNext, handleBack, handleOrderId, orderId} = useContext(checkoutContext)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [show, setShow] = useState(true);

    let isEnabled = name.length > 0 && email.length > 0 && phone.length > 0 && phone.length > 0

    const handleShow = () => setShow(false);

    let newOrder = {buyer:{name: name, lastname: lastName, email: email, phone: phone},items: [...cart], total:price}

    const db = getFirestore()
    const OrderCollection = db.collection("Orders")

   const orderBtn = ()=>{
        OrderCollection.add(newOrder).then((value) =>{
            handleOrderId(value.id);

        });
        handleShow();
        handleNext();

    }
   
    return (
            <div id="form" className="mt-3 ml-3 pl-3 row align-items-center">
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
                    <Form.Control type="email" onChangeCapture={(e) =>{setEmail(e.target.value)}} placeholder="Ingresa tu email" />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" onChangeCapture={(e) =>{setPhone(e.target.value)}} placeholder="Ingresa tu teléfono" />
                </Form.Group>
                {activeStep !== 0 && (
                    <Button variant="outline-dark" className="mr-2" onClick={handleBack}>Volver</Button>
                    )}
                <Button disabled={!isEnabled} onClick={orderBtn} variant="dark">Continuar</Button>

            </Form>
            </div>

    )
}
export default BuyerDataComponent;