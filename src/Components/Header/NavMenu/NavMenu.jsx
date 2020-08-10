import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Header.module.css';

const NavMenu = (props) => {
    return (
        <nav className={classes.nav}>

           <div className={classes.nav__link} ><NavLink onClick={props.toggleOpenMode ? props.toggleOpenMode : null} to={"/"} >Main</NavLink></div> 
           {props.loginName === 'admin' ? 
            <div className={classes.nav__link} ><NavLink onClick={props.toggleOpenMode ? props.toggleOpenMode : null} to={"/newgoodsform"} >Form</NavLink></div> :
            null   
        }

        </nav>
    )
}
export default NavMenu;