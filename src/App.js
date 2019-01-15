import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Welcome from './components/welcome/welcome';
import Login from './components/login/login';
import HomeLayout from './components/layout/homeLayout';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Authentication from './components/authentication/authentication';





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
  render() {
    const { classes } = this.props;
    return (

      <div  className={classes.root}>
      <BrowserRouter>
        <HomeLayout>
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Authentication >
              <Route path="/" exact component={Welcome}/>
            </Authentication>
          </Switch>
        </HomeLayout>
      </BrowserRouter>
      </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

