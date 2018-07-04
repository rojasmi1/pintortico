import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './header.css';

const Header = props => {
  let navigationLabels = {};

  // Navigation labels should be load from the Back End
  if (props.settings) {
    const { login, logout } = props.settings.navigation;
    navigationLabels = props.settings.navigation.pages.reduce(
      (acc, page) => {
        acc[page.url] = page.title;
        return acc;
      },
      { login, logout }
    );
  }

  return (
    <header className="header">
      {props.isAuthenticated ? <span>User: {props.user.firstname}</span> : null}
      <ul className="header__navbar">
        <li>
          <Link className="header__link" to="/">
            {navigationLabels['homepage']}
          </Link>
        </li>
        {props.isAuthenticated ? (
          <li>
            <Link className="header__link" to="/professional">
              {navigationLabels['professional']}
            </Link>
          </li>
        ) : null}
        <li>
          <Link className="header__link" to="/login">
            {props.isAuthenticated
              ? navigationLabels['logout']
              : navigationLabels['login']}
          </Link>
        </li>
      </ul>
      <img src={logo} className="header__logo" alt="logo" />
    </header>
  );
};

export default Header;
