import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../../../store/actions';

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
  },
  containerMargin : {
      margin : "2%"
  }

});

class AppBarLayout extends Component {

  handleLogout = () => {
    this.props.history.push('/login');
    this.props.dispatchLogout();
  } 
 
  render() {
    const { classes } = this.props;

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Web App
                    </Typography>
                    { this.props.loggedIn ? <Button color="inherit" onClick={this.handleLogout}>Log off</Button> : null }
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(AppBarLayout)));