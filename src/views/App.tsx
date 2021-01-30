import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import Router from '../router';
import routes from '../router/routes';

import TopNavBar from '../components/TopNavBar/index';
import TopHeader from '../components/TopHeader';
import SideInfoBar from '../components/SideInfoBar';

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
    console.log(matchedRoutes);
    setHeaderTitle(matchedRoutes[0].route.meta.headerTitle);
  }, [location]);
  return (
    <div className={appClassName}>
      <TopNavBar />
      <TopHeader headerTitle={headerTitle} />

      <main className="main-container">
        <SideInfoBar />

        <div className="switch-container">
          <Router />
        </div>
      </main>
    </div>
  );
};

export default withRouter(App);
