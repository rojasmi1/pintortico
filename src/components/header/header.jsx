import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="header">
      <ul className="header__navbar">
        <li>
          <Link
            className="header__link"
            to={{ pathname: '/', state: { from: props.pathname } }}
          >
            Home
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
