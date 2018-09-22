import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import Menu from 'components/Menu';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexWrap: 'wrap'
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 4,
    width: '100%',
    height: '100%'
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
            <Hidden mdDown>
              <Menu isDesktop />
            </Hidden>
            <div className={classes.content}>
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
