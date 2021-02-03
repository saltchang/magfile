import React from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from '../../router/routes';

import './NavBar.scss';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link className="nav-brand" key="nav-brand" to="/">
        Hikaru Chang
      </Link>
      <div className="nav-link-container">
        {navRoutes.map((link) => (
          <Link
            key={link.meta.navText}
            className="nav-link-item"
            to={link.path}
          >
            {link.meta.navText}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
