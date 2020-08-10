import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './GoodsCatalog.module.css'
import DeleteButton from '../common/DeleteButton/DeleteButton.jsx'

const GoodsItem = (props) => {

   const removeItem = () => {
        let id = props.id
        props.removeCatalogItem(id)
    }
    return (
        <div className={classes.goodsItem}>
            <div>
                <NavLink to={`/goodsitem/${props.id}`}>
                    <img src={props.goodsPhoto ? props.goodsPhoto : props.phoneLogo} alt="" className={classes.goodsPhoto} />
                </NavLink>
            </div>
            <div className={classes.goodsName}>{props.goodsName}</div>
            <div className={classes.goodsPrice}>Price <span>{props.goodsPrice}</span> UAH</div>
            {props.loginName === 'admin' ? <div className={classes.delete__goods}><DeleteButton onclickFunc={removeItem} /></div> : null}
        </div>
    )
}

export default GoodsItem;