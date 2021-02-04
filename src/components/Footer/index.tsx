import React, { RefObject } from 'react';

import './Footer.scss';

interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Footer = ({ footerRef }: FooterProps) => {
  const defaultCopyRight = '© 2021 Salt Chang';
  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <div className="content">{defaultCopyRight}</div>
      </div>
    </footer>
  );
};

export default Footer;
