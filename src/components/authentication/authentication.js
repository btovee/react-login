import React , {Component} from 'react'; 
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';
import LoginAPI from '../../services/login.api';
import { getJwt, removeJwt } from '../../helpers/jwt-helper';


class Authentication extends Component {
      
      componentDidMount = () => {
        const jwt = getJwt();
        if(!jwt) {
          this.props.history.push('/login');
        }

        let loginAPI = new LoginAPI();
        loginAPI.verifyToken()
            .then(res => { 
                if(res.data === "OK"){
                    this.props.onAuthorisedToken();
                }
            }).catch( err => {
                this.props.onUnauthorisedToken();
                this.props.history.push('/login');
            });
      }
    
     

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        username: state.username,
        loggedIn: state.loggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthorisedToken: () => dispatch({ type: actionTypes.LOG_IN }),
        onUnauthorisedToken: () => dispatch({ type: actionTypes.LOG_OUT })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));