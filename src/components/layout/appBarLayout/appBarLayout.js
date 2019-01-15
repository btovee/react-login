import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../../../store/actions';
import classes from './appBarLayout.module.css'
import { Grid } from '@material-ui/core';

class AppBarLayout extends Component {

  handleLogout = () => {
    this.props.history.push('/login');
    this.props.dispatchLogout();
  } 
 
  render() {

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.content}>
                    <Grid container>
                      <Grid xs={11}>
                        <Typography variant="h6" color="inherit"  >
                            Web App
                        </Typography>
                      </Grid>
                      <Grid xs={1}>
                        { this.props.loggedIn ? <Button color="inherit"  onClick={this.handleLogout}>Log off</Button> : null }
                      </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
  }
}

AppBarLayout.propTypes = {
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
      dispatchLogout: () => dispatch({ type: actionTypes.LOG_OUT }) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles()(withRouter(AppBarLayout)));