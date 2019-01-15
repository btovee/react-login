import React, { Component } from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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

class Welcome extends Component {
 
  render() {
    const { classes } = this.props;


    let welcomeMessage = null;

    if(this.props.username){
        welcomeMessage = (
        <Typography variant="h3" gutterBottom>
            Welcome {this.props.username}
        </Typography>);
    } else {
        welcomeMessage = (
            <Typography variant="h3" gutterBottom>
                Welcome 
            </Typography>);
    }


    return (
    <>
        <Paper elevation={1}>
            <Grid container >
                <Grid item xs={11}>
                    {welcomeMessage}
                    <Typography variant="body1" gutterBottom>
                        You have successfully logged in.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </>
    );
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        username: state.username,
        loggedIn: state.loggedIn
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Welcome));