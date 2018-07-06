import React from 'react';
import { Link } from 'react-router-dom';
import { SERVER_HOST } from '../../constants';
import './header.css';

const Header = props => {
  let navigationLabels = {};
  let logo = '';

  if (props.settings) {
    // Navigation labels should be load from the Back End
    const { login, logout } = props.settings.navigation;
    navigationLabels = props.settings.navigation.pages.reduce(
      (acc, page) => {
        acc[page.url] = page.title;
        return acc;
      },
      { login, logout }
    );

    // Load logo image from server settings
    logo = `${SERVER_HOST}${props.settings.logo}`;
  }

  return (
    <header className="header">
      <select
        name="locales"
        onChange={event => {
          props.changeLocale(event.target.value, props.pathname);
        }}
      >
        {props.locales.map(locale => (
          <option key={locale.id} value={locale.id}>
            {locale.displayName}
          </option>
        ))}
      </select>
      <ul className="header__navbar">
        <li>
          <Link
            className="header__link"
            to={{ pathname: '/', state: { from: props.pathname } }}
          >
            {navigationLabels['homepage']}
          </Link>
        </li>
        <li>
          <Link
            className="header__link"
            to={{ pathname: '/professional', state: { from: props.pathname } }}
          >
            {navigationLabels['professional']}
          </Link>
        </li>
        <li>
          <Link
            className="header__link"
            to={{ pathname: '/login', state: { from: props.pathname } }}
          >
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
