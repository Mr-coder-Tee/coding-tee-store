import React,{useState} from 'react';
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';
import { Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button } from '@material-ui/core';
import useStyle from './styles'

const steps=['Shipping address','Payments']

const Confirmation=()=>(
    <div>Confirmation</div>
)

const Checkout = () => {
    const [activeStep,setActiveStep]=useState(0)
    const classes=useStyle();

    const Form=()=>activeStep===0
        ? <AddressForm/>
        : <PaymentForm/>


    return ( <div className="toolbar"> 
        <div className="layout">
            <Paper className={classes.paper}>
                <div className="CheckOutheader">
                    <h1>Checkout</h1>
                </div>
                <Stepper activeStep={activeStep} className="stepper">
                    {
                        steps.map((step)=>(
                            <Step key={step}>

                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
                { activeStep===steps.length?<Confirmation/>:<Form/>}
            </Paper>
        </div>
    </div>  );
}
 
export default Checkout;