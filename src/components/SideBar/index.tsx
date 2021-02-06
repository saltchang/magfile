import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navRoutes } from '../../router/routes';

import TypingMotion from '../TypingMotion';

import HomeIcon from '../../images/icons/links/i-home.svg';
import angleArrowDoubleRight from '../../images/icons/arrows/i-angle-arrow-double-right.svg';
import DemoAvatar from '../../images/demo/d-avatar-640.png';
import GitHubIcon from '../../images/icons/socials/i-github-alt.svg';
import TwitterIcon from '../../images/icons/socials/i-twitter.svg';
import LinkedInIcon from '../../images/icons/socials/i-linkedin.svg';
import MailIcon from '../../images/icons/socials/i-mail.svg';

import './SideBar.scss';

interface SideBarProps {
  show: boolean;
  toggleAction: () => void;
}

const SideBar = ({ show, toggleAction }: SideBarProps) => {
  const [sideBarClasses, setSideBarClasses] = useState('side-bar');

  useEffect(() => {
    setSideBarClasses(`side-bar ${show ? 'expand' : ''}`);
  }, [show]);

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
      <button type="button" className="toggle" onClick={toggleAction}>
        <img className="icon-toggle" src={angleArrowDoubleRight} alt="more" />
      </button>

      <Link className="go-home-icon-link" to="/" onClick={() => toggleAction()}>
        <img className="go-home-icon-link__icon" src={HomeIcon} alt="Go home" />
      </Link>

      <header className="info-header">
        <div className="avatar">
          <img className="avatar__image" src={DemoAvatar} alt="avatar" />
        </div>
        <div className="name">Hikaru Chang</div>
        <div className="title">Software Developer</div>
        <div className="typing-motion-container">
          <TypingMotion
            typingStrings={[
              'a Wandering Engineer.',
              'a Developer for Fun.',
              'a Ruthless Coding Robot.',
            ]}
          />
        </div>

        <div className="personal-links">
          {soclialLinks.map((link) => {
            return (
              <a
                key={link.name}
                className="personal-links-link"
                href={link.url}
                target={link.newTab ? '_blank' : ''}
                rel="noopener noreferrer"
              >
                <img
                  className="personal-links-link__icon"
                  src={link.icon}
                  alt={link.name}
                />
              </a>
            );
          })}
        </div>
        <hr className="divider" />
      </header>

      <nav className="info-nav">
        {navRoutes.map((link) => (
          <Link
            key={link.name}
            className="info-nav__link"
            to={link.path}
            onClick={() => toggleAction()}
          >
            {link.meta.navText}
          </Link>
        ))}
      </nav>
      <div className="info-footer" />
    </aside>
  );
};

export default SideBar;
