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
  const [appIsInDarkMode, setAppIsInDarkMode] = useState(true);
  const [appClassName, setAppClassName] = useState(`${app} ${lightMode}`);
  const [headerTitle, setHeaderTitle] = useState('');
  const [footerHeight, setFooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const header = useRef() as MutableRefObject<HTMLDivElement>;
  const footer = useRef() as MutableRefObject<HTMLDivElement>;

  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location.pathname);

  const updateSize = () => {
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
      <NavBar />
      <SideBar />
      <Header headerRef={header} headerTitle={headerTitle} />
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
