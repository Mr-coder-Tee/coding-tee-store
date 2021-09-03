import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
 
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        as={TextField}
        render = {({ field :{value,onChange}})=> (
          <TextField
              fullWidth
              label={label}
              required
              value={value}
              onChange={onChange}
          />
      )}
      />
    </Grid>
  );
};


//        render={({ field }) => <TextField fullWidth label={label} required />}

export default FormInput;
