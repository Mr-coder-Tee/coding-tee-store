import React from 'react';
import TextField from './Textfield/TextField'
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const Subcribe = () => {
    return ( 
            <div className="subContainer">
                <div className="SubForm">
                    <Formik
                        initialValues={{
                            name:'',
                            surname:'',
                            age:'',
                            dob:'',
                            location:''
                        }}
                        >
                        {formik=>(
                            <div className="form">
                                <h2>Subcribe</h2>
                                <p>Sign up to get the latest on sales,new releases and more...</p>
                                <Form>
                                    <TextField label="First Name" name="name" type="text"/>
                                    <TextField label="Your Email" name="name" type="text"/>
                                    <div className="formbtnbx">
                                        <button>Sign up</button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div> 
        );
}
 
export default Subcribe;