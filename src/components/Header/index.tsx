import * as React from 'react';
import { string } from 'prop-types';

import './Header.scss';

import DemoMainBannerImage from '../../images/demo/d-smoky-morning-in-Cascades.jpeg';

const Header = ({ headerTitle }: PropTypes) => {
  return (
    <header
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

interface PropTypes {
  headerTitle: string;
}

Header.propTypes = {
  headerTitle: string,
};

Header.defaultProps = {
  headerTitle: '',
};

export default Header;
