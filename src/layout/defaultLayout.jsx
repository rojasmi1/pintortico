import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HeaderContainer from '../containers/headerContainer';
import Footer from '../components/footer';
import Menu from '../components/menu';
import withRoot from '../withRoot';

const drawerWidth = '20vw';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '80vh',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      height: '90vh'
    }
  },
  drawerPaper: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative'
    }
  },
  drawerRoot: {
    height: '80vh',
    [theme.breakpoints.up('sm')]: {
      height: '90vh'
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflow: 'scroll',
    width: '80vw',
    height: '80vh',
    [theme.breakpoints.up('sm')]: {
      height: '90vh'
    }
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
                  paper: classes.drawerPaper,
                  docked: classes.drawerRoot
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
            <Footer />
          </div>
        )}
      />
    );
  }
}

export default withRoot(withStyles(styles, { withTheme: true })(DefaultLayout));
