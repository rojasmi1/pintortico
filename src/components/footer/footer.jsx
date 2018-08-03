import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100vw',
    padding: 10
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container spacing={8} justify="flex-end">
        <Grid item md={6} xs={12}>
          <Typography>
            Copyright © 2017{' '}
            <a href="mailto:michael.rojasp@gmail.com">Michael Rojas Pereira</a>.
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          Icons
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles)(Footer);
