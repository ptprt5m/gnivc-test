import React from 'react'
import classes from './FormControls.module.css'

export const Input = ({classNameInput, input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return (
        <div>
            <div>
                <input {...input} {...props}
                       className={(hasError && classes.error) + " " + classNameInput}
                       placeholder={hasError && meta.error || props.placeholder}
                />
            </div>
            {/*{hasError && <span className={classes.errorText}>{meta.error}</span>}*/}
        </div>
    )
}