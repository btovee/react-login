import React, { Component } from 'react';
import './App.css';

import Home from './components/home/home';
import Login from './components/login/login';
import LoginAPI from './services/login.api';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };


class App extends Component {

  state = {
    authToken: null,
    loggedIn: false,
    loading: false
  } 

  handleLogin = (username,password) => {
    let loginApi = new LoginAPI();
    this.setState({ loading: true });
    loginApi.login(username, password).then( (response) => {
      if(response.data) {
        const authToken = response.data;
        this.setState(
          {
            authToken : authToken,
            loggedIn: true,
            loading: false
          }
        );
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

handleLogout = () => {
  this.setState(
    {
      authToken : null,
      loggedIn: false
    }
  );
}


  render() {
    const { classes } = this.props;
    return (
      <div  className={classes.root}>
        <Home 
          handleLogin={this.handleLogin} 
          handleLogout={this.handleLogout}
          loading={this.state.loading} 
          loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

