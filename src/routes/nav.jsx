import React from 'react';
import DefaultLayout from '../layout/defaultLayout';
import HomeContainer from '../containers/homeContainer';
import { Switch } from 'react-router-dom';

const Nav = ({ store }) => {
  return (
    <Switch>
      <DefaultLayout
        exact
        path="/"
        component={HomeContainer}
        isPrivate={false}
      />
    </Switch>
  );
};

export default Nav;
