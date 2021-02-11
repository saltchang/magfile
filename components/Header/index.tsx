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
          <h1 className={styles.banner__title}>{headerTitle}</h1>
          <span className={styles.banner__description}>{subTitle}</span>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  blog: false,
};

export default Header;
