import React from 'react';
import DefaultLayout from '../layout/defaultLayout';
import HomeContainer from '../containers/homeContainer';
import LoginContainer from '../containers/loginContainer';
import ProfessionalContainer from '../containers/professionalContainer';
import { Switch } from 'react-router-dom';
import { hasRouteAccess } from '../constants';

const Nav = ({ store }) => {
  const { global } = store.getState();

  return (
    <Switch>
      <DefaultLayout
        exact
        path="/"
        component={HomeContainer}
        isPrivate={false}
      />
      <DefaultLayout
        path="/professional"
        component={ProfessionalContainer}
        isAuthorized={hasRouteAccess(global.user, 'professional')}
        isPrivate={true}
      />
      <DefaultLayout
        path="/login"
        component={LoginContainer}
        isPrivate={false}
      />
    </Switch>
  );
};

export default Nav;
