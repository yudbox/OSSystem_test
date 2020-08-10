import React, { useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import classes from './NewGoodsForm.module.css'
import { Formik, Form, Field } from 'formik';
import { inputValidation, inputNumberValidation } from '../../utilites/validators/validators'
import { InputElem } from '../common/FormControls/FormControls'
import { addCatalogItem } from '../../redux/goods-reducer'
import withLoginRedirect from '../../hoc/withLoginRedirect'
import preloader from '../../image/loading24.svg'


const NewGoodsForm = (props) => {

    const [isFetching, setIsFetching] = useState(false);



    const initialValues = {
        goodsName: '',
        goodsPrice: '',
        goodsDescr: '',
        goodsQuantity: ''
    }

    const onSubmit = (values, onSubmitProps,) => {

        setIsFetching(true)
        setTimeout(() => {
            let id = Math.floor(Math.random() * 100)

            let data = { id, ...values }
            props.addCatalogItem(data)
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            setIsFetching(false)
        }, 2000)

    };

    return (
        <div className={classes.newGoods__container}>
            <div className={classes.newGoods__form}>
                <h2 className={classes.newGoods__title}>Please add new item</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    {(props) => (

                        <Form autoComplete="off">

                            <div className={classes.formControl}>
                                <label><span>Name</span>
                                    <Field name='goodsName' validate={inputValidation} placeholder="Doe" >
                                        {InputElem}
                                    </Field>
                                </label>
                            </div>

                            <div className={classes.formControl}>
                                <label><span>Price</span>
                                    <Field name='goodsPrice' placeholder="Goods price" validate={inputNumberValidation}>
                                        {InputElem}
                                    </Field>
                                </label>
                            </div>
                            <div className={classes.formControl}>
                                <label><span>Description</span>
                                    <Field name='goodsDescr' placeholder="Enter description" validate={inputValidation}>
                                        {InputElem}
                                    </Field>
                                </label>
                            </div>
                            <div className={classes.formControl}>
                                <label><span>Quantity</span>
                                    <Field name='goodsQuantity' placeholder="Enter quantity" validate={inputNumberValidation}>
                                        {InputElem}
                                    </Field>
                                </label>
                            </div>
                            {/* <div className={classes.formControl}>
                                <label><span>Photo</span>
                                    <input className={classes.newGoods__form__input} type="file" name="goodsPhoto" onChange={selectNewPhoto} />
                                </label>
                            </div> */}

                            <div className={classes.submit__btn}>
                                <button type="submit" disabled={props.isSubmitting}>{isFetching ? <span><img src={preloader} alt="" /></span> : <span>ADD</span>}</button>
                            </div>


                        </Form>
                    )}

                </Formik>
            </div>


        </div>
    )
}

export default compose(connect(null, { addCatalogItem }),withLoginRedirect)(NewGoodsForm)
