import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const withLoginRedirect = (Component) => {

class RedirectComponent extends React.Component {
    render() {
        if (!this.props.auth) return <Redirect to='/login' />
        return <Component {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    auth: state.auth.isLogged
})

let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
return connectedRedirectComponent;
}

export default withLoginRedirect