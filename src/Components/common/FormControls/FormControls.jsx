import React from 'react'
import classes from './FormControls.module.css'


export const InputElem = ({field, form, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <>
            <input className={`${classes.formControl__input} ${hasError ? classes.formControl__input_error : null}`} {...field} {...props}  />
            {hasError && <span className={classes.formControl__error}>{meta.error}</span>}
        </>
    )
}