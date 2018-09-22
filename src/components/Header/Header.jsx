import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  appBar: {
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      width: '100vw'
    }
  },
  loadingIndicator: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.normal,
    height: '5px'
  }
});

class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <AppBar className={classes.appBar}>
          <div className={classes.loadingIndicator}>
            {this.props.isLoading && <LinearProgress color="secondary" />}
          </div>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.toggleDrawer}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="headline" color="inherit" noWrap>
              Max Rojas Vargas
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
