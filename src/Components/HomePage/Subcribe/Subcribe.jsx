import React from 'react';
import TextField from './Textfield/TextField'
import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const Subcribe = () => {
    return ( 
            <div className="subContainer flexCenter">
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
                                    <div><TextField label="First Name" name="name" type="text"/></div>
                                    <div className="formbtnbx">
                                        <div><TextField label="Your Email" name="email" type="text"/></div>
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