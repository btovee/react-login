import React, { Component } from 'react';
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

class welcome extends Component {
 
  render() {
    const { classes } = this.props;


    return (
    <>
        <Paper elevation={1}>
            <Grid container >
                <Grid item xs={11}>
                    <Typography variant="h3" gutterBottom>
                        Welcome 
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </>
    );
  }
}

welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(welcome);