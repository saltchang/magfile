import { RefObject } from 'react';
import cx from 'classnames';

import styles from './Header.module.scss';

const DemoMainBannerImage = '/images/demo/d-smoky-morning-in-Cascades.jpeg';

interface HeaderProps {
  headerTitle: string;
  subTitle: string;
  headerRef: RefObject<HTMLDivElement>;
  blog?: boolean;
}

const Header = ({ headerTitle, subTitle, headerRef, blog }: HeaderProps) => {
  return (
    <header
      ref={headerRef}
      className={blog ? cx(styles.header, styles.blog) : styles.header}
      style={{ backgroundImage: `url(${DemoMainBannerImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.banner}>
          <div className={styles.bannerTitle}>
            <h1 className={styles.bannerTitle__text}>{headerTitle}</h1>
          </div>
          <div className={styles.bannerDescription}>
            <span className={styles.bannerDescription__text}>{subTitle}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  blog: false,
};

export default Header;
