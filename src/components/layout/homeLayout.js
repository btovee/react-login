import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBarLayout from './appBarLayout/appBarLayout';




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

class HomeLayout extends Component {
 
  render() {
    const { classes } = this.props;

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

export default withStyles(styles)(HomeLayout);