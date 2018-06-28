import React from "react";
import DefaultLayout from "../layout/defaultLayout";
import HomeContainer from "../containers/homeContainer";
import LoginContainer from "../containers/loginContainer";
import ProfessionalContainer from "../containers/professionalContainer";

const Nav = () => (
  <div>
    <DefaultLayout exact path="/" component={HomeContainer} />
    <DefaultLayout path="/professional" component={ProfessionalContainer} />
    <DefaultLayout path="/login" component={LoginContainer} />
  </div>
);

export default Nav;
