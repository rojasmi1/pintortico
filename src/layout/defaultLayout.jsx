import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HeaderContainer from '../containers/headerContainer';
import '../styles/main.css';

const DefaultLayout = ({ component: Component, isAuthenticated, isPrivate, ...rest }) => {
  
  let isRouteAvailable = false;

  if (!isPrivate){
    isRouteAvailable = true;
  } else if (isAuthenticated) {
    isRouteAvailable = true;
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <HeaderContainer />
          <div className='container'>
            {
              isRouteAvailable
                ? <Component {...matchProps} />
                : <Redirect to='/login' />
            }
          </div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
