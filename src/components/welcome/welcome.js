import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './welcome.module.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class Welcome extends Component {
 
  render() {

    let welcomeMessage = null;

    if(this.props.username){
        welcomeMessage = (
        <Typography variant="h3" className={classes.extraMargin}>
            Welcome {this.props.username}
        </Typography>);
    } else {
        welcomeMessage = (
            <Typography variant="h3" className={classes.extraMargin}>
                Welcome 
            </Typography>);
    }


    return (
    <>  
        <Grid item xs={10}>
            <Paper xs={12}>
                <Grid container >
                    <Grid item xs={12}>
                        {welcomeMessage}
                        <Typography variant="body1" className={classes.extraMargin} >
                            You have successfully logged in.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
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

export default connect(mapStateToProps)(Welcome);