import React from 'react';
import DefaultLayout from '../layout/defaultLayout';
import HomeContainer from '../containers/homeContainer';
import ContactContainer from '../containers/contactContainer';
import { Switch } from 'react-router-dom';

const Nav = ({ store }) => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={HomeContainer} title="Home" />
      <DefaultLayout
        exact
        path="/contact"
        component={ContactContainer}
        title="Contact"
      />
    </Switch>
  );
};

export default Nav;
