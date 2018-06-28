import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from '../containers/headerContainer';
import "../styles/main.css";


const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <HeaderContainer />
          <div className="container">
            <Component {...matchProps} />
          </div>
        </div>
      )}
    />
  );
};

export default DefaultLayout;
