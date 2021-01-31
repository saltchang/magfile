import React, { useEffect, useState } from 'react';
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

  const location = useLocation();
  const matchedRoutes = matchRoutes(routes, location.pathname);

  useEffect(() => {
    if (appIsInDarkMode) setAppIsInDarkMode(true);
    setAppClassName(`${app} ${appIsInDarkMode ? darkMode : lightMode}`);
  }, [appIsInDarkMode]);

  useEffect(() => {
    setHeaderTitle(matchedRoutes[0].route.meta.headerTitle);
  }, [location]);
  return (
    <div className={appClassName}>
      <NavBar />
      <SideBar />
      <Header headerTitle={headerTitle} />
      <main className="main-container">
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default withRouter(App);
