import React from 'react';
import classes from './App.module.css';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header'
import GoodsCatalog from './Components/GoodsCatalog/GoodsCatalog';
import Login from './Components/Login/Login';
import NewGoodsForm from './Components/NewGoodsForm/NewGoodsForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className={classes.app}>

      <Grid container justify="center" alignItems="center" spacing={0}>

        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <div className="main-content">
            <Route path="/" component={GoodsCatalog} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/newgoodsform" component={NewGoodsForm} exact /> 
          </div>
        </Grid>

      </Grid>

    </div>
  );
}

let mapStateToProps = (state) => {
  return {
      loginName: state.auth.loginName
  }
}

export default connect(mapStateToProps)(App)