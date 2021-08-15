import React from 'react';
import useStyles from './styles'
import { WbSunnyOutlined,Brightness2Outlined } from '@material-ui/icons';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import TextField from './Subcribe/TextField';




const Footer = () => {
    return ( 
        <div className="footerContainer">
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
            <div className="contactInfo">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </div>
            <div className="copyRights">
                <div>
                    <span>&copy;2021 Coding Tee</span>
                </div>
                <div>
                    <WbSunnyOutlined/>
                    <Brightness2Outlined/>
                </div>
            </div>
        </div> 
    );
}
 
export default Footer;