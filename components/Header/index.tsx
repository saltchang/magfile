import { RefObject } from 'react';
import cx from 'classnames';
import { MetaData } from '../../lib/getMeta';
import { formatArticleDate } from '../../lib/date';

import styles from './Header.module.scss';

const DemoMainBannerImage = '/images/demo/d-smoky-morning-in-Cascades.jpeg';

interface HeaderProps {
  headerTitle: string;
  subTitle: string;
  meta?: MetaData;
  headerRef: RefObject<HTMLDivElement>;
  blog?: boolean;
}

const Header = ({
  headerTitle,
  subTitle,
  meta,
  headerRef,
  blog,
}: HeaderProps) => {
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
          {blog ? (
            <div className={styles.bannerBlogMeta}>
              <span className={styles.bannerBlogMeta__date}>
                {formatArticleDate(meta.date)}
              </span>
            </div>
          ) : (
            <div className={styles.bannerDescription}>
              <span className={styles.bannerDescription__text}>{subTitle}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  blog: false,
  meta: { date: 'no-date' },
};

export default Header;
