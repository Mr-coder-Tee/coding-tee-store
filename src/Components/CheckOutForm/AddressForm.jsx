import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Grid, Button } from "@material-ui/core";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ checkoutToken,next }) => {
  const methods = useForm();
  return (
    <div>
      <h3>Shopping Address</h3>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data)=>next(data))}>
          <Grid container spacing={3}>
            <FormInput name="firstname" label="First Name" required />
            <FormInput name="lastname" label="Last Name" required />
            <FormInput name="address1" label="Address 1" required />
            <FormInput name="address2" label="Address 2" />
            <FormInput name="city" label="City" required />
            <FormInput name="zip" label="Zip/Postal Code" required />
            <FormInput name="email" label="Email" required />
            <FormInput name="phone" label="Phone Number" required />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button
              className="design-primary"
              type="submit"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
