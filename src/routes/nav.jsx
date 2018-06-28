import React from "react";
import DefaultLayout from "../layout/defaultLayout";
import Home from "../containers/home";
import About from "../containers/about";
import ProfessionalPage from "../containers/professional-page";

const Nav = () => (
  <div>
    <DefaultLayout exact path="/" component={Home} />
    <DefaultLayout path="/professional" component={ProfessionalPage} />
    <DefaultLayout path="/about" component={About} />
  </div>
);

export default Nav;
