import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./header.css";

const Header = props => (
  <header className="header">
    <span>Current Language: {props.currentLanguage}</span>
    <ul className="header__navbar">
      <li>
        <Link className="header__link" to="/">
          Home
        </Link>
      </li>
      {props.isAuthenticated ? (
        <li>
          <Link className="header__link" to="/professional">
            Professional
          </Link>
        </li>
      ) : null}
      <li>
        <Link className="header__link" to="/login">
          Login
        </Link>
      </li>
    </ul>
    <img src={logo} className="header__logo" alt="logo" />
  </header>
);

export default Header;
