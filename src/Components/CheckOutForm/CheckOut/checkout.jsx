import React, { useState,useEffect } from "react";
import PaymentForm from "../PaymentForm";
import AddressForm from "../AddressForm";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyle from "./styles";
import { commerce } from "../../../lib/commerce";


const steps = ["Shipping address", "Payments"];







const Confirmation = () => <div>Confirmation</div>;

const Checkout = ({cart,handleCaptureCheckout,order,error}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken,setCheckoutToken]=useState(null);
  const [shippingData,setShippingData]=useState({});
  const classes = useStyle();


  useEffect(()=>{

    const generateToken=async ()=>{
        try{
            const token =await commerce.checkout.generateToken(cart.id,{type:'cart'})
            setCheckoutToken(token);
        }catch(error){

        }

    }

    generateToken();

},[cart]);


const nextStep=()=> setActiveStep((prevActiveStep)=>prevActiveStep+1)
const backStep=()=> setActiveStep((prevActiveStep)=>prevActiveStep-1)

const next=(data)=>{
    setShippingData(data)
    nextStep();
}

  const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : <PaymentForm nextStep={nextStep} backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} setShippingData={setShippingData} checkoutToken={checkoutToken}/>);
  return (
    <div className="toolbar">
      <div className="layout">
        <Paper className={classes.paper}>
          <div className="CheckOutheader">
            <h1>Checkout</h1>
          </div>
          <Stepper activeStep={activeStep} className="stepper">
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </div>
    </div>
  );
};

export default Checkout;
