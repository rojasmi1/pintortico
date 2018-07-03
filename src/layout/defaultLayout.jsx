import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HeaderContainer from '../containers/headerContainer';
import Footer from '../components/footer';
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
          <Footer />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
