import React, { Component } from 'react';
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

class login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

 

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
                value={this.state.username}
                onChange={this.handleChange('username')}
                />
                <TextField
                id="outlined-adornment-password"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                type={this.state.showPassword ? 'text' : 'password'}
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
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
                    onClick={ () => { this.props.handleLogin(this.state.username, this.state.password) } }
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

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);