import Form from 'react-bootstrap/Form';
import {Button }from 'react-bootstrap';
import { useContext, useState } from 'react';
import { cartContext } from '../../context/cartContext';
import { getFirestore } from '../../firebase';
import AddressComponent from '../address';


// import FormControl from 'react-bootstrap/FormControl';
// import FormFile from 'react-bootstrap/FormFile';
// import FormCheck from 'react-bootstrap/FormCheck'

const BuyerDataComponent = ()=>{
    const {cart, price, cancelShop} = useContext(cartContext)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [show, setShow] = useState(true);
    const [hide, setHide] = useState(false);
    // const [radio, setRadio] = useState(false)


    let isEnabled = name.length > 0 && email.length > 0 && phone.length > 0 && phone.length > 0

    const handleShow = () => setShow(false);
    const handleHide = () => setHide(true)

    let newOrder = {buyer:{name: name, lastname: lastName, email: email, phone: phone},items: [...cart], total:price}

    const db = getFirestore()
    const OrderCollection = db.collection("Orders")

   const orderBtn = ()=>{
        OrderCollection.add(newOrder).then((value) =>{
            setOrderId(value.id)
        });
        handleShow();
        handleHide();

    }  


    // const handleRadio = (event) => {
    //     setRadio(event)
    // }
    


   
    return (
        <div className="mt-3 ml-3 pl-3">
            <div id="checkout">
           <div className="row mb-3">
              <h4 style={{backgroundColor:"black", color:"white"}} className="pr-2 pl-2 mr-2">1</h4>
              <h4>Ingresa tus datos...</h4>
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
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="radio" onChange={(e)=>{setRadio(e.target.checked)}} checked={radio} label="Envio a domicilio" />
                    <p style={{opacity: 0.5, fontSize: "0.85rem"}}>* Si no seleccionas la opción de envío, te escribiremos para que pases a retirar el pedido por el local.</p>
                </Form.Group> */}
                <Button disabled={!isEnabled} onClick={orderBtn} variant="dark">Continuar</Button>
                <Button className="ml-3" variant="outline-dark">Volver</Button>
            </Form>
            </div>
            </div>
        </div>

    )
}
export default BuyerDataComponent;