import React, { RefObject } from 'react';

import './Header.scss';

import DemoMainBannerImage from '../../images/demo/d-smoky-morning-in-Cascades.jpeg';

interface HeaderProps {
  headerTitle: string;
  subTitle: string;
  headerRef: RefObject<HTMLDivElement>;
}

const Header = ({ headerTitle, subTitle, headerRef }: HeaderProps) => {
  return (
    <header
      ref={headerRef}
      className="header"
      style={{ backgroundImage: `url(${DemoMainBannerImage})` }}
    >
      <div className="overlay">
        <div className="banner">
          <h1 className="banner__title">{headerTitle}</h1>
          <span className="banner__description">{subTitle}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
