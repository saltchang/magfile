import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  MutableRefObject,
} from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import Router from '../router';
import routes from '../router/routes';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

import './App.scss';

const App = () => {
  const app = 'app';
  const darkMode = 'dark-mode';
  const lightMode = 'light-mode';
  const defaultSubTitle = '流浪的工程師 ‧ 興趣使然的開發者 ‧ 無情的寫扣機器人';

  const [appIsInDarkMode, setAppIsInDarkMode] = useState(true);
  const [appClassName, setAppClassName] = useState(`${app} ${lightMode}`);
  const [headerTitle, setHeaderTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isSideBarShow, setIsSideBarShow] = useState(false);
  const [navBarEffect, setNavBarEffect] = useState(false);

  const navbar = useRef() as MutableRefObject<HTMLDivElement>;
  const header = useRef() as MutableRefObject<HTMLDivElement>;
  const footer = useRef() as MutableRefObject<HTMLDivElement>;

  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location.pathname);

  const setAppScroll = (value: string) => {
    document.body.style.overflow = value;
  };

  const toggleAction = () => {
    if (isSideBarShow) setAppScroll('auto');
    else setAppScroll('hidden');

    setIsSideBarShow(!isSideBarShow);
  };

  const closeSideBar = () => {
    setAppScroll('auto');
    setIsSideBarShow(false);
  };

  const updateSize = () => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    if (vw >= 900) {
      closeSideBar();
      setNavBarEffect(true);
    } else {
      setNavBarEffect(false);
    }
    if (footer.current) {
      setFooterHeight(footer.current.clientHeight);
    }
    if (header.current) {
      setHeaderHeight(header.current.clientHeight);
    }
  };

  useEffect(() => {
    if (appIsInDarkMode) setAppIsInDarkMode(true);
    setAppClassName(`${app} ${appIsInDarkMode ? darkMode : lightMode}`);
  }, [appIsInDarkMode]);

  useEffect(() => {
    setHeaderTitle(matchedRoutes[0].route.meta.headerTitle);
    setSubTitle(matchedRoutes[0].route.meta.subTitle || defaultSubTitle);
  }, [location]);

  useEffect(() => {
    updateSize();
  });

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={appClassName}>
      <NavBar
        navBarRef={navbar}
        toggleAction={toggleAction}
        hiddenEffect={navBarEffect}
      />
      <SideBar show={isSideBarShow} toggleAction={toggleAction} />
      <Header
        headerRef={header}
        headerTitle={headerTitle}
        subTitle={subTitle}
      />
      <main
        className="main-container"
        style={{
          minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
        }}
      >
        <Router />
      </main>
      <Footer footerRef={footer} />
    </div>
  );
};

export default withRouter(App);
