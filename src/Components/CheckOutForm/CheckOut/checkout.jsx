import React, { useState, useEffect } from "react";
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
import { set } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const steps = ["Shipping address", "Payments"];

const Checkout = ({ cart, handleCaptureCheckout, order, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [shippingmethod, setShippingMathod] = useState("");
  const [isFinished,setIsFinished]=useState(false);
  const classes = useStyle();
  const history=useHistory();
  const scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"})


  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        setShippingMathod(token.shipping_methods[0].id);
      } catch (error) {
        // history.pushState('/')
        console.log("Checkout error->",error)
      }
      scrollToTop();
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  const timeout=()=>{
    setTimeout(()=>{
      
    },3000)
  }

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () =>
    order.customer ? (
      <>
        <div className="doneheader">
          <h3>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </h3>
          <div className="dividor" />
          <h4>Order ref:ref</h4>
        </div>
        <Button component={Link} to="/" className="btn" type="button">
          Back to Home
        </Button>
      </>
    ) : isFinished?(
      <>
        <div className="doneheader">
          <h4>
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </h4>
          <div className="dividor" />
          <h6>Order ref: {order.id}</h6>
        </div>
        <Button component={Link} to="/" className="btn" type="button">
          Back to Home
        </Button>
      </>
    )
    :(
      <div>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <h5>Error:{error}</h5>
      <br />
      <Button component={Link} to="/" type="button">
        Back to Home
      </Button>
    </>;
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingmethod={shippingmethod}
        nextStep={nextStep}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        setShippingData={shippingData}
        checkoutToken={checkoutToken}
        timeout={timeout}
      />
    );

    console.log("order",order);
    console.log("handleCaptureCheckout",handleCaptureCheckout);
    console.log("cart",cart);
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
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </div>
    </div>
  );
};

export default Checkout;
