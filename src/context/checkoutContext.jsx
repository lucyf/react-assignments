import {createContext} from 'react';
import * as React from 'react';
import { useState } from 'react';


export const checkoutContext = createContext();

export const CheckoutProvider = ({children})=> {   
    const [activeStep, setActiveStep] =useState(0);
    const [orderId, setOrderId] = useState('');

    const handleOrderId = (value) => {
        setOrderId(value)
    }

    
    const steps = ['Agrega tus datos', 'Datos de Envio', 'Datos de pago'];

    const handleNext = () => {
        setActiveStep(activeStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
 

    return <checkoutContext.Provider value={{activeStep, handleNext, handleBack, steps, orderId, handleOrderId}}>
        {children}
    </checkoutContext.Provider>
}