import React from "react";
import TextField from "./Textfield/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Firebase from "../../Firebase/Firebase";

const Subcribe = () => {
  const db = Firebase.firestore();

  const validate = Yup.object({
    name: Yup.string().required("enter valid name") ,
    email: Yup.string().required("enter valid your email").email("enter valid email"),
    
    });
    const createFirebaseUser = (
      _name,
      _email
    ) => {
      db.collection("users")
        .add({
          name: _name,
          email: _email,
        })
        .then((res) => {
          console.log("user created");
        })
        .catch((err) => {
          console.log("error->", err);
        });
    };
  return (
    <div className="subContainer flexCenter">
      <div className="SubForm">
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
            createFirebaseUser(
              values.name,
              values.email
            );
          }}
        >
          {(formik) => (
            <div className="form-holder">
              <div className="subcText">
                <h2>Subscribe</h2>
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
                  <button type="submit" className="btn btnfont">Sign up</button>
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
