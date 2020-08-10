import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import logo from '../../image/Logo_company.png'
import classes from './Header.module.css'
import NavMenu from './NavMenu/NavMenu'
import { connect } from 'react-redux';

const Header = (props) => {
    const [openMode, setOpenMode] = useState(false)

    const toggleOpenMode = () => {
        setOpenMode(!openMode)
    }
    return (<>
        <Grid className={classes.header} container   alignItems="center" spacing={0}>
            <Grid item xs={10}>
                {props.isLogged ? 
                <div className={classes.burger}>
                    <div onClick={toggleOpenMode} className={openMode ? `${classes.burgerMenu} ${classes.open}` : classes.burgerMenu}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={openMode ? `${classes.burger_nav} ${classes.burger_nav_active}` : `${classes.burger_nav} ${classes.burger_nav_deactive}`}>
                        <NavMenu loginName={props.loginName} toggleOpenMode={toggleOpenMode} />
                    </div>

                </div> :
                null}
            </Grid>
            <Grid item xs={2} className={classes.logo} >
                <img src={logo} alt="" />
            </Grid>
        </Grid>
    </>);
}
let mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        loginName: state.auth.loginName

    }
}

export default connect(mapStateToProps)(Header)