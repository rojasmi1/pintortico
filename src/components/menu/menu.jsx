import React from 'react';
import { Link } from 'react-router-dom';
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
  toolbar: theme.mixins.toolbar
});

const Menu = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/#">
          <ListItemIcon>
            <Collections />
          </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>
        <ListItem button component={Link} to="/#">
          <ListItemIcon>
            <DateRange />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Menu);
