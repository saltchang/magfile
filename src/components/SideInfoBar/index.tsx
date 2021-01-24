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
  const [isExpand, setIsExpand] = useState(false);
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

      <div className="info-content-container">
        <div className="info-content-container__content">
          <p>正在趨近於 27 歲，興趣使然的自由軟體開發者，4 年軟體工程經驗。</p>
          <p>
            認為寫程式是一種必要手段，目的為開發出「容易使用、美觀、安全」的應用程式，並將其分享給眾人使用，以改善人類社群的工作效率以及生活品質。
          </p>
          <p>
            軟體雖不能解決人生的痛苦及社會的黑暗，但可以讓你我的生活更簡單容易些。
          </p>
        </div>
      </div>

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
