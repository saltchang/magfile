import React, { useEffect, useState } from 'react';

import './SideInfoBar.scss';

import angleArrowDoubleRight from '../../images/icons/arrows/i-angle-arrow-double-right.svg';
import DemoAvatar from '../../images/demo/d-avatar-640.png';
import GitHubIcon from '../../images/icons/socials/i-github-alt.svg';
import TwitterIcon from '../../images/icons/socials/i-twitter.svg';
import LinkedInIcon from '../../images/icons/socials/i-linkedin.svg';
import MailIcon from '../../images/icons/socials/i-mail.svg';

const SideInfoBar = () => {
  const [sideInfoBarClasses, setSideInfoBarClasses] = useState('side-info-bar');
  const [isExpand, setIsExpand] = useState(true);
  const toggleSideInfoBar = () => {
    setIsExpand(!isExpand);
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

  // const SocialLinks = () => {
  //   soclialLinks.forEach((link) => {
  //     return (

  //     );
  //   });
  // };

  return (
    <div className={sideInfoBarClasses}>
      <button type="button" className="toggle" onClick={toggleSideInfoBar}>
        <img className="icon-toggle" src={angleArrowDoubleRight} alt="more" />
      </button>

      <div className="info-header">
        <div className="avatar">
          <img className="avatar__image" src={DemoAvatar} alt="avatar" />
        </div>
        <div className="name">David Chang</div>
        <div className="title">Software Engineer</div>
      </div>

      <div className="info-content">content</div>

      <div className="info-footer">
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
      </div>
    </div>
  );
};

export default SideInfoBar;
