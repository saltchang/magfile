import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import TypingMotion from '../TypingMotion';

import HomeIcon from '../../images/icons/links/i-home.svg';
import angleArrowDoubleRight from '../../images/icons/arrows/i-angle-arrow-double-right.svg';
import angleArrowDoubleRightLight from '../../images/icons/arrows/i-angle-arrow-double-right-light.svg';
import DemoAvatar from '../../images/demo/d-avatar-640.png';
import GitHubIcon from '../../images/icons/socials/i-github-alt.svg';
import TwitterIcon from '../../images/icons/socials/i-twitter.svg';
import LinkedInIcon from '../../images/icons/socials/i-linkedin.svg';
import MailIcon from '../../images/icons/socials/i-mail.svg';

import './SideInfoBar.scss';

const SideInfoBar = () => {
  const [sideInfoBarClasses, setSideInfoBarClasses] = useState('side-info-bar');
  const [isExpand, setIsExpand] = useState(false);
  const toggleSideInfoBar = () => {
    setIsExpand(!isExpand);
  };
  const closeSideInfoBar = () => {
    setIsExpand(false);
  };

  useEffect(() => {
    setSideInfoBarClasses(`side-info-bar ${isExpand ? 'expand' : ''}`);
  }, [isExpand]);

  const soclialLinks = [
    {
      name: 'github',
      url: 'https://github.com/saltchang',
      icon: GitHubIcon,
      newTab: true,
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/saltchang',
      icon: TwitterIcon,
      newTab: true,
    },
    {
      name: 'linked-in',
      url: 'https://www.linkedin.com/in/saltchang',
      icon: LinkedInIcon,
      newTab: true,
    },
    {
      name: 'mail',
      url: 'mailto:saltchang.tw@gmail.com',
      icon: MailIcon,
      newTab: true,
    },
  ];

  return (
    <div className={sideInfoBarClasses}>
      <Link
        className="go-home-icon-link"
        to="/"
        onClick={() => closeSideInfoBar()}
      >
        <img className="go-home-icon-link__icon" src={HomeIcon} alt="Go home" />
      </Link>

      <button type="button" className="toggle" onClick={toggleSideInfoBar}>
        <img
          className="icon-toggle"
          src={isExpand ? angleArrowDoubleRight : angleArrowDoubleRightLight}
          alt="more"
        />
      </button>

      <header className="info-header">
        <div className="avatar">
          <img className="avatar__image" src={DemoAvatar} alt="avatar" />
        </div>
        <div className="name">David Chang</div>
        <div className="title">Software Engineer</div>
        <TypingMotion
          typingStrings={[
            'a full-stack engineer.',
            'a software developer.',
            'a creator.',
          ]}
        />
        <hr className="divider" />
      </header>

      <nav className="info-menu-container">
        <Link
          className="page-link"
          to="/about"
          onClick={() => closeSideInfoBar()}
        >
          About
        </Link>
      </nav>

      <footer className="info-footer">
        {soclialLinks.map((link) => {
          return (
            <a
              key={link.name}
              className="info-footer-link"
              href={link.url}
              target={link.newTab ? '_blank' : ''}
              rel="noopener noreferrer"
            >
              <img
                className="info-footer-link__icon"
                src={link.icon}
                alt={link.name}
              />
            </a>
          );
        })}
      </footer>
    </div>
  );
};

export default SideInfoBar;
