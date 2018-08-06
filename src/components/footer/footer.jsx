import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px`
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container spacing={8} justify="flex-end">
        <Grid item md={8} xs={12}>
          <Typography align="center">
            Copyright © {`${new Date().getFullYear()} `} - Support (506)
            88888888 -{' '}
            <a href="mailto:michael.rojasp@gmail.com">Michael Rojas Pereira</a>.
            <br />
            By sending the contact form you are agreeing to our{' '}
            <a
              href="https://termsfeed.com/privacy-policy/90a226431fd33be5791bfab592cabed8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>.
          </Typography>
        </Grid>
        <Grid item md={2} xs={12}>
          <IconButton aria-label="Facebook">
            <SvgIcon>
              <path d="M967.503 938.667h-911.007c-31.202 0-56.497-25.294-56.497-56.497v0-911.007c0-31.202 25.294-56.497 56.497-56.497v0h490.814v396.006h-133.297v155.012h133.297v114.052c0 132.237 80.861 204.27 198.797 204.27 0.733 0.002 1.602 0.003 2.472 0.003 41.042 0 81.574-2.181 121.487-6.434l-4.963 0.429v-138.24h-81.214c-64.265 0-76.8-30.367-76.8-75.211v-98.692h153.6l-19.95-155.012h-134.532v-396.182h261.297c31.202 0 56.497 25.294 56.497 56.497v0 911.007c0 31.202-25.294 56.497-56.497 56.497v0z" />
            </SvgIcon>
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles, { withTheme: true })(Footer);
