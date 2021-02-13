import { useState, RefObject, useEffect } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { navRoutes } from '../../lib/routes';

import styles from './NavBar.module.scss';

const iconMenuLight = '/images/icons/links/i-menu-l.svg';

interface NavBarProps {
  navBarRef: RefObject<HTMLDivElement>;
  toggleAction: () => void;
  hiddenEffect: boolean;
}

const NavBar = ({ navBarRef, toggleAction, hiddenEffect }: NavBarProps) => {
  const backgroundColorValue = '22, 27, 34';
  const topRange = 15;
  const bottomRange = 40;
  const maxOpacity = 0.8;
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBarClassName, setNavBarClassName] = useState(styles.navBar);
  const [backgroundColor, setBackgroundColor] = useState(
    `rgb(${backgroundColorValue}, 0)`,
  );

  useEffect(() => {
    setLastScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!navBarRef.current) return;
      const appHeight = document.querySelector('#__next')?.clientHeight || 0;
      const scrollInNavRange = navBarRef.current.clientHeight * 1.5;
      const isScrollOutOfNav = window.scrollY > scrollInNavRange;
      const scrollInTop = window.scrollY <= topRange;
      const scrollInBottom =
        window.scrollY + window.innerHeight >= appHeight - bottomRange;
      const isScrollInNav = !scrollInTop && window.scrollY <= scrollInNavRange;
      const scrollInNavRatio =
        ((window.scrollY - topRange) *
          (navBarRef.current.clientHeight / topRange)) /
        scrollInNavRange;
      const isScrollToDown = window.scrollY > lastScrollY;

      setLastScrollY(window.scrollY);

      if (scrollInTop || !hiddenEffect) {
        setNavBarClassName(styles.navBar);
        setBackgroundColor(`rgb(${backgroundColorValue}, 0)`);
      } else if (scrollInBottom) {
        setNavBarClassName(cx(styles.navBar, styles.hide));
      } else if (isScrollInNav) {
        setNavBarClassName(styles.navBar);
        setBackgroundColor(
          `rgb(${backgroundColorValue}, ${
            scrollInNavRatio > maxOpacity ? maxOpacity : scrollInNavRatio
          })`,
        );
      } else if (isScrollToDown) {
        if (isScrollOutOfNav) {
          setNavBarClassName(cx(styles.navBar, styles.hide));
        } else {
          setNavBarClassName(styles.navBar);
          setBackgroundColor(`rgb(${backgroundColorValue}, ${maxOpacity})`);
        }
      } else {
        setNavBarClassName(styles.navBar);
        setBackgroundColor(`rgb(${backgroundColorValue}, ${maxOpacity})`);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, backgroundColor, hiddenEffect]);

  return (
    <nav
      ref={navBarRef}
      className={navBarClassName}
      style={{ backgroundColor }}
    >
      <button type="button" className={styles.toggle} onClick={toggleAction}>
        <img className={styles.iconToggle} src={iconMenuLight} alt="more" />
      </button>

      <Link href="/">
        <a className={styles.navBrand}>Salt Chang</a>
      </Link>
      <div className={styles.navLinkContainer}>
        {navRoutes.map((link) => (
          <Link key={link.meta.navText} href={link.path}>
            <a className={styles.navLinkItem}>{link.meta.navText}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
