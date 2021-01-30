import * as React from 'react';
import { Link } from 'react-router-dom';

import './TopNavBar.scss';

const TopNavBar = () => {
  const navLinks = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Home',
      path: '/',
    },
  ];
  return (
    <div className="top-nav-bar">
      <header className="nav-brand">MAGFILE</header>
      <nav className="nav-link-container">
        {navLinks.map((link) => (
          <Link key={link.name} className="nav-link-item" to={link.path}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TopNavBar;
