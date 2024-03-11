import React from 'react'
import { useField, ErrorMessage } from 'formik'

export const LoginInputs = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    // console.log(field, meta);
    return (
        <div className="mb-2-login">
            <label htmlFor={field.name}>{label}</label>
            <input className={`login-input profile-input shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props}
            autoComplete="off" />
            <ErrorMessage component="span" name={field.name} className="error" />
            
        </div>
    )
}