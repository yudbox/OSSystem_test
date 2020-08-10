import React from 'react'
import { Redirect } from 'react-router-dom';
import classes from './Login.module.css'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { inputLoginValidation } from '../../utilites/validators/validators'
import { InputElem } from '../common/FormControls/FormControls'
import { setAuthUserData } from '../../redux/auth-reducer'

const LoginForm = (props) => {

    const initialValues = {
        loginName: '',
    }


    const onSubmit = (values, onSubmitProps,) => {
        let text = values.loginName;
        props.setAuthUserData(text, true)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()


    };


    return (
        <div className={classes.form_container}>
            <div className={classes.loginBox}>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    {(formik) => (

                        <Form autoComplete="off">

                            <div className={classes.formControl}>
                                <label><span>Name </span> 
                                    <Field name="loginName" placeholder="Enter name" validate={inputLoginValidation}>
                                        {InputElem}
                                    </Field>
                                </label>
                            </div>

                            <div className={classes.submit__btn}>
                                <button>Register</button>
                            </div>


                        </Form>
                    )}

                </Formik>
            </div>

        </div>
    )
}







const Login = (props) => {

    if (props.auth) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1 className={classes.login__title}>Please set your role. admin or user</h1>

            <div>
                {!props.auth && <LoginForm setAuthUserData={props.setAuthUserData} />}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    auth: state.auth.isLogged
})

export default connect(mapStateToProps, { setAuthUserData })(Login)
