import * as React from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from '../../router/routes';

import './TopNavBar.scss';

const TopNavBar = () => {
  return (
    <div className="top-nav-bar">
      <Link className="nav-brand" key="nav-brand" to="/">
        Hikaru Chang
      </Link>
      <nav className="nav-link-container">
        {navRoutes.map((link) => (
          <Link
            key={link.meta.navText}
            className="nav-link-item"
            to={link.path}
          >
            {link.meta.navText}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TopNavBar;
