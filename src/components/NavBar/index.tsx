import React, { useLayoutEffect, useState, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from '../../router/routes';

import './NavBar.scss';

import iconMenuLight from '../../images/icons/links/i-menu-l.svg';

interface NavBarProps {
  navBarRef: RefObject<HTMLDivElement>;
  toggleAction: () => void;
  hiddenEffect: boolean;
}

const NavBar = ({ navBarRef, toggleAction, hiddenEffect }: NavBarProps) => {
  const navBar = 'nav-bar ';
  const hide = 'hide ';
  const backgroundColorValue = '22, 27, 34';
  const topRange = 15;
  const bottomRange = 40;
  const maxOpacity = 0.8;
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navBarClassName, setNavBarClassName] = useState(navBar);
  const [backgroundColor, setBackgroundColor] = useState(
    `rgb(${backgroundColorValue}, 0)`,
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!navBarRef.current) return;
      const appHeight = document.querySelector('#root')?.clientHeight || 0;
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
        setNavBarClassName(`${navBar}`);
        setBackgroundColor(`rgb(${backgroundColorValue}, 0)`);
      } else if (scrollInBottom) {
        setNavBarClassName(`${navBar}${hide}`);
      } else if (isScrollInNav) {
        setNavBarClassName(`${navBar}`);
        setBackgroundColor(
          `rgb(${backgroundColorValue}, ${
            scrollInNavRatio > maxOpacity ? maxOpacity : scrollInNavRatio
          })`,
        );
      } else if (isScrollToDown) {
        if (isScrollOutOfNav) {
          setNavBarClassName(`${navBar}${hide}`);
        } else {
          setNavBarClassName(`${navBar}`);
          setBackgroundColor(`rgb(${backgroundColorValue}, ${maxOpacity})`);
        }
      } else {
        setNavBarClassName(`${navBar}`);
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
      <button type="button" className="toggle" onClick={toggleAction}>
        <img className="icon-toggle" src={iconMenuLight} alt="more" />
      </button>

      <Link className="nav-brand" key="nav-brand" to="/">
        Hikaru Chang
      </Link>
      <div className="nav-link-container">
        {navRoutes.map((link) => (
          <Link
            key={link.meta.navText}
            className="nav-link-item"
            to={link.path}
          >
            {link.meta.navText}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
