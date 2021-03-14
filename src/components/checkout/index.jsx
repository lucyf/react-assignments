import { useState } from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import BuyerDataComponent from "../buyerData";
import AddressComponent from "../address";
import { Button } from "react-bootstrap";

const CheckoutComponent = ()=>{
    const [activeStep, setActiveStep] =useState(0);

    const steps = ['Agrega tus datos', 'Datos de Envio', 'Datos de pago'];

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };

    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return <BuyerDataComponent />;
          case 1:
            return <AddressComponent />;
        //   case 2:
        //     return 
          default:
            throw new Error('Unknown step');
        }
      }

    return (
        <>
        <div>
        <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
            {activeStep === steps.length ? (
                <div id="finished-msg">
                    <h5>Gracias por tu compra.</h5>
                    <h6>Tu numero de orden es: <strong>#111111</strong>. Te enviamos la confirmacion de la orden por mail y te enviaremos la actualizacion del estado de tu pedido.</h6>
                </div>

            ) : ( 
                <div id="each-step">
                    {getStepContent(activeStep)}
                    
                    <div id="checkout-btns">
                    
                    {activeStep !== 0 && (
                    <Button variant="outline-dark" className="mr-2" onClick={handleBack}>Volver</Button>
                    )}
                    
                    <Button variant="dark" onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finalizar Compra' : 'Siguiente'}</Button>
                </div>

                </div>) }
        </div>


        </>
    )
  
}
export default CheckoutComponent;