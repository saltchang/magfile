import { RefObject } from 'react';

import styles from './Footer.module.scss';

interface FooterProps {
  footerRef: RefObject<HTMLDivElement>;
}

const Footer = ({ footerRef }: FooterProps) => {
  const defaultCopyRight = '© 2021 Salt Chang';
  return (
    <footer ref={footerRef} className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.footerContainer}>
        <div className={styles.content}>{defaultCopyRight}</div>
      </div>
    </footer>
  );
};

export default Footer;
