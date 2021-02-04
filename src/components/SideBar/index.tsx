import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navRoutes } from '../../router/routes';

import TypingMotion from '../TypingMotion';

import HomeIcon from '../../images/icons/links/i-home.svg';
import angleArrowDoubleRight from '../../images/icons/arrows/i-angle-arrow-double-right.svg';
import angleArrowDoubleRightLight from '../../images/icons/arrows/i-angle-arrow-double-right-light.svg';
import DemoAvatar from '../../images/demo/d-avatar-640.png';
import GitHubIcon from '../../images/icons/socials/i-github-alt.svg';
import TwitterIcon from '../../images/icons/socials/i-twitter.svg';
import LinkedInIcon from '../../images/icons/socials/i-linkedin.svg';
import MailIcon from '../../images/icons/socials/i-mail.svg';

import './SideBar.scss';

const SideBar = () => {
  const [sideBarClasses, setSideBarClasses] = useState('side-bar');
  const [isExpand, setIsExpand] = useState(false);
  const toggleSideBar = () => {
    setIsExpand(!isExpand);
  };
  const closeSideBar = () => {
    setIsExpand(false);
  };

  useEffect(() => {
    setSideBarClasses(`side-bar ${isExpand ? 'expand' : ''}`);
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
    <aside className={sideBarClasses}>
      <button type="button" className="toggle" onClick={toggleSideBar}>
        <img
          className="icon-toggle"
          src={isExpand ? angleArrowDoubleRight : angleArrowDoubleRightLight}
          alt="more"
        />
      </button>

      <div className="side-bar-box">
        <Link
          className="go-home-icon-link"
          to="/"
          onClick={() => closeSideBar()}
        >
          <img
            className="go-home-icon-link__icon"
            src={HomeIcon}
            alt="Go home"
          />
        </Link>

        <header className="info-header">
          <div className="avatar">
            <img className="avatar__image" src={DemoAvatar} alt="avatar" />
          </div>
          <div className="name">Hikaru Chang</div>
          <div className="title">Software Developer</div>
          <TypingMotion
            typingStrings={[
              'a Wandering Engineer.',
              'a Developer for Fun.',
              'a Ruthless Coding Robot.',
            ]}
          />
          <hr className="divider" />
        </header>

        <nav className="info-nav">
          {navRoutes.map((link) => (
            <Link
              key={link.name}
              className="info-nav__link"
              to={link.path}
              onClick={() => closeSideBar()}
            >
              {link.meta.navText}
            </Link>
          ))}
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
    </aside>
  );
};

export default SideBar;
