import {createContext} from 'react';
import * as React from 'react';
import { useState } from 'react';


export const checkoutContext = createContext();

export const CheckoutProvider = ({children})=> {   
    const [activeStep, setActiveStep] =useState(0);
    const [orderId, setOrderId] = useState('');
    const [checked, setChecked] = useState(false);

    const handleOrderId = (value) => {
        setOrderId(value)
    }

    
    const steps = ['Agrega tus datos', 'Datos de Envio', 'Datos de pago'];

    const handleNext = () => {
        if(checked === true){
          setActiveStep(activeStep + 1);
        }else{
          setActiveStep(activeStep + 2);
        }
      };
    
      const handleBack = () => {
        if(checked === true){
          setActiveStep(activeStep - 1);
        }else{
          setActiveStep(activeStep - 2);
        }
      };
 

    return <checkoutContext.Provider value={{activeStep, handleNext, handleBack, steps, orderId, handleOrderId, checked,setChecked}}>
        {children}
    </checkoutContext.Provider>
}