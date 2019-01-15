import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoginAPI from '../../services/login.api';
import { setJwt, removeJwt } from '../../helpers/jwt-helper';
import * as actionTypes from '../../store/actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  buttonMargin: {
      margin: "3%"
  }

});

class Login extends Component {
  state = {
    password: '',
    showPassword: false,
  };

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleLogin = (username,password) => {

    let loginApi = new LoginAPI();
    this.setState({ loading: true });
    loginApi.login(username, password).then( (response) => {
      
      if(response.data) {
        
        const authToken = response.data.token;
        setJwt(authToken)

        this.setState(
          {
            loggedIn: true,
            loading: false,
            username: username
          }
        );

        this.props.history.push('/');
      }

    }).catch((err) => {
      this.setState({
        loading: false
      })
      if(err.response.status === 401) {
        console.log(err.response.data);
      }
    })
  }
 
  render() {
    const { classes } = this.props;


    let loginPartial = null;

    if(this.props.loading){
        loginPartial = <CircularProgress className={classes.progress} />
    } else {
        loginPartial = (
          <>      
            <Paper elevation={1}>
                <Grid item xs={12}>
                <TextField
                  id="outlined-adornment-weight"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  label="Username"
                  value={this.props.username}
                  onChange={(e) => this.props.handleUsernameChange(e)}
                  />
                <TextField
                  id="outlined-adornment-password"
                  className={classNames(classes.margin, classes.textField)}
                  variant="outlined"
                  type={this.state.showPassword ? 'text' : 'password'}
                  label="Password"
                  value={this.state.password}
                  onChange={(e) => this.handlePasswordChange(e)}
                  InputProps={{
                      endAdornment: (
                      <InputAdornment position="end">
                          <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          >
                          {this.state.showPassword ?  <Visibility /> : <VisibilityOff /> } 
                          </IconButton>
                      </InputAdornment>
                      ),
                  }}
                />
                </Grid>

                <Grid item xs={12}>
                  <Button 
                      variant="contained" 
                      color="primary" 
                      className={ [classes.button, classes.buttonMargin] }
                      onClick={ () => { this.handleLogin(this.props.username, this.state.password) } }
                      >
                      Login
                  </Button>
                </Grid>
              </Paper>
          </>
        )
    }

    return (
    <>
         { loginPartial }
    </>);
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
      username: state.username,
      loggedIn: state.loggedIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
      handleUsernameChange: (event) => dispatch({ type: actionTypes.SET_USER, username: event.target.value }),
      onAuthorisedToken: () => dispatch({ type: actionTypes.LOG_IN }),
      onUnauthorisedToken: () => dispatch({ type: actionTypes.LOG_OUT })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Login)));