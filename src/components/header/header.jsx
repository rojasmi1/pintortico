import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
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
      <AppBar className={classes.appBar}>
        <div className={classes.loadingIndicator}>
          {this.props.isLoading ? <LinearProgress color="secondary" /> : null}
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
