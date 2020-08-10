import React from 'react';
import withLoginRedirect from '../../hoc/withLoginRedirect'
import { connect } from 'react-redux';
import { compose } from 'redux'
import classes from './GoodsCatalog.module.css'
import GoodsItem from './GoodsItem'
import {removeCatalogItem} from '../../redux/goods-reducer'
import { NavLink } from 'react-router-dom';
import phoneLogo from '../../image/phone_logo2.png'



const GoodsCatalog = ({catalog, loginName, removeCatalogItem}) => {
    let totalQuantity = 0
    let totalPrice = 0
    catalog.map(item => {
        totalQuantity = totalQuantity + item.goodsQuantity
        totalPrice = totalPrice + item.goodsQuantity * Number(item.goodsPrice)
    })
    let avaragePrice = (totalPrice / totalQuantity).toFixed(2)
    return (
        <div className={classes.catologContainer}>
            <div className={classes.catalog}>
                {
                    catalog.map(cat => <div key={cat.id} className={classes.goods}>
                        <GoodsItem phoneLogo={phoneLogo} loginName={loginName} removeCatalogItem={removeCatalogItem} {...cat} />
                    </div>)
                }
            </div>
            {loginName === 'admin' ? <div className={classes.nav__link} ><NavLink to={"/newgoodsform"} >Add new goods</NavLink></div>  : null}
            

            <div className={classes.catalog__info}>
                <div className={classes.catalog__info_item}>
                    <span>Total quantity: </span>{totalQuantity} pcs
                </div>
                <div className={classes.catalog__info_item}>
                    <span>Total price: </span>{totalPrice} UAH
                </div>
                <div className={classes.catalog__info_item}>
                    <span>Avarage price: </span>{avaragePrice} UAH
                </div>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        catalog: state.goods.catalog,
        loginName: state.auth.loginName

    }
}




export default compose(connect(mapStateToProps, {removeCatalogItem}),withLoginRedirect)(GoodsCatalog)