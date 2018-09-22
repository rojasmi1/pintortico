import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import Collections from '@material-ui/icons/Collections';
import DateRange from '@material-ui/icons/DateRange';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      marginTop: 70,
      backgroundColor: theme.palette.secondary.main,
      width: '100%'
    }
  },
  menu: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: 0
    }
  },
  selectedLink: {
    borderBottom: `4px solid ${theme.palette.secondary.dark}`
  }
});

const Menu = props => {
  const { classes, isDesktop } = props;

  const activeClass = link => {
    if (props.location.pathname === link) return classes.selectedLink;
  };

  return (
    <div className={classes.root}>
      <List className={classes.menu}>
        <ListItem button component={Link} to="/" className={activeClass('/')}>
          {!isDesktop && (
            <ListItemIcon>
              <Home />
            </ListItemIcon>
          )}
          <ListItemText align="center" primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/gallery"
          className={activeClass('/gallery')}
        >
          {!isDesktop && (
            <ListItemIcon>
              <Collections />
            </ListItemIcon>
          )}
          <ListItemText align="center" primary="Gallery" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/events"
          className={activeClass('/events')}
        >
          {!isDesktop && (
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
          )}
          <ListItemText align="center" primary="Events" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/contact"
          className={activeClass('/contact')}
        >
          {!isDesktop && (
            <ListItemIcon>
              <Info />
            </ListItemIcon>
          )}
          <ListItemText align="center" primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default withRouter(withStyles(styles, { withTheme: true })(Menu));
