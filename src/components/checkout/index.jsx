import { useContext } from "react";
import { checkoutContext } from "../../context/checkoutContext";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import BuyerDataComponent from "../buyerData";
import AddressComponent from "../address";
import PaymentDataComponent from "../paymentData";


const CheckoutComponent = ()=>{
  const {activeStep, steps, } = useContext(checkoutContext)

    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return <BuyerDataComponent />;
          case 1:
            return <AddressComponent />;
          case 2:
            return <PaymentDataComponent/>
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
        <div id="each-step">
                {getStepContent(activeStep)}
        </div>
        </>
    )
  
}
export default CheckoutComponent;