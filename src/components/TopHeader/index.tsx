import * as React from 'react';
import { string } from 'prop-types';

import './TopHeader.scss';

import DemoMainBannerImage from '../../images/demo/d-smoky-morning-in-Cascades.jpeg';

const TopHeader = ({ headerTitle }: PropTypes) => {
  return (
    <header
      className="top-header"
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

TopHeader.propTypes = {
  headerTitle: string,
};

TopHeader.defaultProps = {
  headerTitle: '',
};

export default TopHeader;
