import React from "react";
import TextField from "./Textfield/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Subcribe = () => {
  return (
    <div className="subContainer flexCenter">
      <div className="SubForm">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            age: "",
            dob: "",
            location: "",
          }}
        >
          {(formik) => (
            <div className="form-holder">
              <div className="subcText">
                <h2>Subcribe</h2>
                <p>
                  Sign up to get the latest on sales,new releases and more...
                </p>
              </div>
              <Form className="flexCenter flex-colonm">
                <div>
                  <TextField className="mT-10 input" label="First Name" name="name" type="text" />
                </div>
                <div>
                  <TextField className="mT-10 input" label="Your Email" name="email" type="text" />
                </div>
                <div className="btnbx">
                  <button className="btn btnfont">Sign up</button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Subcribe;
