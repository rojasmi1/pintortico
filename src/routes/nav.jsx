import React from "react";
import DefaultLayout from "../layout/defaultLayout";
import HomeContainer from "../containers/homeContainer";
import LoginContainer from "../containers/loginContainer";
import ProfessionalContainer from "../containers/professionalContainer";

const Nav = ({ store }) => {
  const { global } = store.getState();

  return (
    <div>
      <DefaultLayout
        exact
        path="/"
        component={HomeContainer}
        isAuthenticated={global.isAuthenticated}
        isPrivate={false}
      />
      <DefaultLayout
        path="/professional"
        component={ProfessionalContainer}
        isAuthenticated={global.isAuthenticated}
        isPrivate={true}
      />
      <DefaultLayout
        path="/login"
        component={LoginContainer}
        isAuthenticated={global.isAuthenticated}
        isPrivate={false}
      />
    </div>
  );
};

export default Nav;
