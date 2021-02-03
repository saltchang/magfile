import React, { RefObject } from 'react';

import './Header.scss';

import DemoMainBannerImage from '../../images/demo/d-smoky-morning-in-Cascades.jpeg';

interface HeaderProps {
  headerTitle: string;
  headerRef: RefObject<HTMLDivElement>;
}

const Header = ({ headerTitle, headerRef }: HeaderProps) => {
  return (
    <header
      ref={headerRef}
      className="header"
      style={{ backgroundImage: `url(${DemoMainBannerImage})` }}
    >
      <div className="overlay">
        <div className="banner">
          <h1 className="banner__title">{headerTitle}</h1>
          <span className="banner__description">
            流浪的工程師 ‧ 興趣使然的開發者 ‧ 無情的寫扣機器人
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
