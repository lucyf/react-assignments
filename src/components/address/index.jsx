import { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { checkoutContext } from '../../context/checkoutContext';


const AddressComponent = ()=>{
    const {activeStep, handleNext, handleBack} = useContext(checkoutContext);
    const [address, setAddress]= useState('');
    const [zipCode, setZipCode]= useState('');
    const [city, setCity]= useState('');
    const [localidad, setLocalidad]= useState('');
    const [comment, setComment]= useState('');

    const isEnabled = address.length > 2 && zipCode.length > 2 && city.length > 2 && localidad.length > 2; 

    

   return (
        <>
    <div className="mt-3 ml-3 pl-3 row align-items-center"> 
    <Form>
        <div className="row mb-3">
            <Form.Label>Direccion de envío *</Form.Label>
            <Form.Control type="text" onChangeCapture={(e) =>{setAddress(e.target.value)}} placeholder="Calle, número, dpto." />
        </div>
        <div className="row p-0 mb-3">
            <div className="col pl-0">
            <Form.Label>Código Postal *</Form.Label>
            <Form.Control onChangeCapture={(e) =>{setZipCode(e.target.value)}} type="text" placeholder="Código postal" />
            </div>
            <div className="col">
            <Form.Label>Ciudad *</Form.Label>
            <Form.Control onChangeCapture={(e) =>{setCity(e.target.value)}} type="text" placeholder="Ciudad" />
            </div>
            <div className="col">
            <Form.Label>Localidad*</Form.Label>
            <Form.Control onChangeCapture={(e) =>{setLocalidad(e.target.value)}} type="text" placeholder="Localidad" />
            </div>
        </div>
        <div className="row mb-3">
        <Form.Label>Comentarios</Form.Label>
            <Form.Control onChangeCapture={(e) =>{setComment(e.target.value)}} as="textarea" rows={3}  placeholder="Agrega comentarios necesarios para el envio." />
        </div>
        <div className="pl-0">
        {activeStep !== 0 && (
            <Button variant="outline-dark" className="mr-2" onClick={handleBack}>Volver</Button>
        )}
            <Button disabled={!isEnabled} onClick={handleNext} variant="dark">Continuar</Button>
        </div>
    </Form>
    </div>
    </>)
}

export default AddressComponent;