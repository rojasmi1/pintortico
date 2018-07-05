import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import '../styles/main.css';

const DefaultLayout = ({
  component: Component,
  isAuthorized = true,
  isPrivate,
  ...rest
}) => {
  let isRouteAvailable = false;

  if (!isPrivate) {
    isRouteAvailable = true;
  } else if (isAuthorized) {
    isRouteAvailable = true;
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <HeaderContainer />
          <div className="container">
            {isRouteAvailable ? (
              <Component {...matchProps} />
            ) : (
              <Redirect to="/login" />
            )}
          </div>
          <FooterContainer />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
