import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Login from '../login/login';
import Welcome from './welcome/welcome';


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

class home extends Component {
 
  render() {
    const { classes } = this.props;

    let homePartial = null;

    if(this.props.loggedIn){
        homePartial = <Welcome />;
    } else {
        homePartial = <Login 
                        handleLogin={this.props.handleLogin}
                        loading={this.props.loading} />;
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Web App
                    </Typography>
                    { this.props.loggedIn ? <Button color="inherit" onClick={this.props.handleLogout}>Log off</Button> : null }
                </Toolbar>
            </AppBar>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerMargin}
                >
                { homePartial }

            </Grid>
        </>
    );
  }
}

home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(home);