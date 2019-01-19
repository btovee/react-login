import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBarLayout from './appBarLayout/appBarLayout';
import classes from './homeLayout.module.css'


class HomeLayout extends Component {
 
  render() {

    return (
        <>
            <AppBarLayout />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.containerMargin}
                >
                {this.props.children}
            </Grid>
        </>
    );
  }
}

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(HomeLayout);