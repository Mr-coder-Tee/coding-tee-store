import React from 'react';
import { useForm,FormProvider } from 'react-hook-form';
import { Grid,Button } from '@material-ui/core';
import FormInput from './CustomTextField';
import { commerce } from '../../lib/commerce';
const AddressForm = ({checkoutToken}) => {
    const methods=useForm();
    return ( <div>
        <h3>Shopping Address</h3>
        <FormProvider {...methods}>
            <form onSubmit="">
                <Grid container spacing={3}>
                    <FormInput name="firstname" label="First Name" required/>
                    <FormInput name="lastname" label="Last Name" required/>
                    <FormInput name="address1" label="Address 1" required/>
                    <FormInput name="address2" label="Address 2" />
                    <FormInput name="email" label="Email" required/>
                    <FormInput name="city" label="City" required/>
                    <FormInput name="province" label="Province" required/>
                    <FormInput name="zip" label="Zip/Postal Code" required/>
                </Grid>
              
            </form>
        </FormProvider>

    </div> );
}
 
export default AddressForm;