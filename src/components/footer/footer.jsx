import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from 'components/icon';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px`
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: 'none'
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.root}>
      <Grid container spacing={8} justify="flex-end">
        <Grid item md={8} xs={12}>
          <Typography align="center">
            Copyright © {`${new Date().getFullYear()} `} -{' '}
            <a className={classes.link} href="mailto:michael.rojasp@gmail.com">
              Michael Rojas Pereira
            </a>.
            <br />
            By sending the contact form you are agreeing to our{' '}
            <a
              className={classes.link}
              href="https://termsfeed.com/privacy-policy/90a226431fd33be5791bfab592cabed8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>.
          </Typography>
        </Grid>
        <Grid item md={2} xs={12} className={classes.socialIcons}>
          <IconButton
            component="a"
            href="https://www.facebook.com/max.rojas.98"
            aria-label="Facebook"
          >
            <Icon iconKey="facebook" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/maxrojas3/"
            aria-label="Instagram"
          >
            <Icon iconKey="instagram" />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles, { withTheme: true })(Footer);
