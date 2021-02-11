import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import cx from 'classnames';
import { navRoutes } from '../../lib/routes';

import TypingMotion from '../TypingMotion';

import styles from './SideBar.module.scss';

const angleArrowDoubleRight =
  '/images/icons/arrows/i-angle-arrow-double-right.svg';
const DemoAvatar = '/images/demo/d-avatar-640.png';
const GitHubIcon = '/images/icons/socials/i-github-alt.svg';
const TwitterIcon = '/images/icons/socials/i-twitter.svg';
const LinkedInIcon = '/images/icons/socials/i-linkedin.svg';
const MailIcon = '/images/icons/socials/i-mail.svg';
const HomeIcon = '/images/icons/links/i-home.svg';

interface SideBarProps {
  show: boolean;
  toggleAction: () => void;
  typingStrings: string[];
}

const SideBar = ({ show, toggleAction, typingStrings }: SideBarProps) => {
  const [sideBarClasses, setSideBarClasses] = useState(styles.sideBar);

  useEffect(() => {
    setSideBarClasses(
      show ? cx(styles.sideBar, styles.expand) : styles.sideBar,
    );
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
      <button
        type="button"
        className={styles.toggle}
        onClick={() => toggleAction()}
      >
        <img
          className={styles.iconToggle}
          src={angleArrowDoubleRight}
          alt="more"
        />
      </button>

      <Link href="/">
        <a className={styles.goHomeIconLink}>
          <img
            className={styles.goHomeIconLink__icon}
            src={HomeIcon}
            alt="Go home"
          />
        </a>
      </Link>

      <header className={styles.infoHeader}>
        <div className={styles.avatar}>
          <img className={styles.avatar__image} src={DemoAvatar} alt="avatar" />
        </div>
        <div className={styles.name}>Hikaru Chang</div>
        <div className={styles.title}>Software Developer</div>
        <div className={styles.typingMotionContainer}>
          <TypingMotion typingStrings={typingStrings} />
        </div>

        <div className={styles.personalLinks}>
          {soclialLinks.map((link) => {
            return (
              <a
                key={link.name}
                className={styles.personalLinksLink}
                href={link.url}
                target={link.newTab ? '_blank' : ''}
                rel="noopener noreferrer"
              >
                <img
                  className={styles.personalLinksLink__icon}
                  src={link.icon}
                  alt={link.name}
                />
              </a>
            );
          })}
        </div>
        <hr className={styles.divider} />
      </header>

      <nav className={styles.infoNav}>
        {navRoutes.map((link) => (
          <Link key={link.path} href={link.path}>
            <a role="button" tabIndex={0} className={styles.infoNav__link}>
              {link.meta.navText}
            </a>
          </Link>
        ))}
      </nav>
      <div className={styles.infoFooter} />
    </aside>
  );
};

export default SideBar;
