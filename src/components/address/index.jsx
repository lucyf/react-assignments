import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const AddressComponent = ()=>{

   return (<>
    <div id="shipping-address" className="mt-3 ml-3">
        <div className="row" >
        <h4 style={{backgroundColor:"black", color:"white"}} className="pr-2 pl-2 mr-2">2</h4>
        <h4>Datos del envío..</h4>
        </div>
    <div className="row align-items-center"> 
    <Form>
        <div className="row mb-3">
            <Form.Label>Direccion de envío *</Form.Label>
            <Form.Control type="text" placeholder="Calle, número, dpto." />
        </div>
        <div className="row p-0 mb-3">
            <div className="col pl-0">
            <Form.Label>Código Postal *</Form.Label>
            <Form.Control type="text" placeholder="Código postal" />
            </div>
            <div className="col">
            <Form.Label>Ciudad *</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" />
            </div>
            <div className="col">
            <Form.Label>Localidad*</Form.Label>
            <Form.Control type="text" placeholder="Localidad" />
            </div>
        </div>
        <div className="row mb-3">
        <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea" rows={3}  placeholder="Agrega comentarios necesarios para el envio." />
        </div>
        <div className="pl-0">
        <Button variant="dark" className="mr-2">Continuar</Button>
        <Button variant="outline-dark">Volver</Button>
        </div>
    </Form>
    </div>

    </div>

    </>)

}

export default AddressComponent;