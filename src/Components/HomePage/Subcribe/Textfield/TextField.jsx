import React from 'react';
import { ErrorMessage,useField } from 'formik';

const TextField = ({label,...props}) => {
    const [field,meta]=useField(props);
    return (  
        <div>
            <input {...field}{...props}  placeholder={label} 
             autoComplete="off"/>
            <ErrorMessage name={field.name} component="div" className="error"/>
        </div>
    );
}
 
export default TextField;