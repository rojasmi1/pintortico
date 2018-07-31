import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Hidden, Divider, Typography } from '@material-ui/core';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import Menu from '../components/menu';
import withRoot from '../withRoot';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  title: {
    paddingBottom: theme.spacing.unit * 5
  }
});

class DefaultLayout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { component: Component, title, ...rest } = this.props;
    const { classes, theme } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => (
          <div className={classes.root}>
            <HeaderContainer toggleDrawer={this.handleDrawerToggle} />
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper
                }}
                ModalProps={{
                  keepMounted: true // Better open performance on mobile.
                }}
              >
                <Menu />
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                <Menu />
              </Drawer>
            </Hidden>
            <div className={classes.content}>
              <div className={classes.toolbar} />
              <div className={classes.title}>
                <Typography variant="title">{title}</Typography>
                <Divider />
              </div>
              <Component {...matchProps} />
            </div>
            <FooterContainer />
          </div>
        )}
      />
    );
  }
}

export default withRoot(withStyles(styles, { withTheme: true })(DefaultLayout));
