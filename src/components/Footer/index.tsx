import React, { RefObject } from 'react';

import './Footer.scss';

interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Footer = ({ footerRef }: FooterProps) => {
  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <div className="content">Footer</div>
      </div>
    </footer>
  );
};

export default Footer;
