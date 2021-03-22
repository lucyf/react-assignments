import MapIcon from '@material-ui/icons/Map';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const ContactComponent = () => {


    return (
        <>

        <div id="whole-wrapper" className="m-3 ">
            <h4 className="mb-3 pb-6">Contactanos...</h4>
            <hr/>
            <div id="firts-row" className="row m-auto justify-content-center mt-3 p-6" style={{marginBottom:"40px"}}>
                <div id="column-1" className="col-sm-4">
                    <div className="row justify-content-center"> 
                     <img className="mr-2" src={'../img/whatsapp.svg'} width="30rem" alt="whatsapp"/>
                     <p className="mb-0" style={{fontSize:"0.85rem"}}>01155667788</p>
                    </div>
                </div>
                <div id="column-2" className="col-sm-4">
                    <div className="row align-items-center justify-content-center">
                    <MapIcon fontSize="large"/><p className="mb-0" style={{fontSize:"0.85rem"}}>Montes de Oca 863, Retiro, Capital Federal.</p>
                    </div>
                </div>
                <div id="column-3" className="col-sm-4">
                    <div className="row align-items-center justify-content-center">
                    <MailOutlineIcon className="mr-2" fontSize="large"/><p style={{fontSize:"0.85rem"}} className="mb-0">allyouneed@gmail.com</p>
                    </div>
                </div>
            </div>
           
            <div id="second-row" className="justify-content-center row mt-3">
                <div id="form" style={{backgroundColor:"#E8E9EB", borderRadius:"20px"}} className="p-5" >
                    <h4 className="mb-3">Envianos tu consulta</h4>
                    <Form > 
                    <div className="row">
                    <div className="col">
                    <Form.Label>Nombre/s</Form.Label>
                    <Form.Control type="text" placeholder="Nombre/s" />
                    </div>
                    <div className="col">
                    <Form.Label>Apellido/s</Form.Label>
                    <Form.Control type="text" placeholder="Apellido/s" />
                    </div>
                    </div>
                    <Form.Group className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number"  placeholder="Ingresa tu teléfono" />
                    </Form.Group>
                    <div className="mt-3 mb-3">
                         <Form.Label>Comentarios</Form.Label>
                        <Form.Control  as="textarea" rows={5}  placeholder="Dinos tu consulta" />
                    </div>
                    <div className="">
                        <Button  variant="danger">Enviar</Button>
                    </div>
                    </Form>
                </div>

            </div>
        </div>
        </>
    )

}

export default ContactComponent;