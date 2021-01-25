import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from './home';
import AboutPage from './about/index';
import DevPage from './dev';
import TypingMotionDemoPage from './dev/typingMotionDemo';
import SideInfoBar from '../components/SideInfoBar';

import './App.scss';

const App = () => {
  const app = 'app';
  const darkMode = 'dark-mode';
  const lightMode = 'light-mode';
  const [appIsInDarkMode, setAppIsInDarkMode] = useState(true);
  const [appClassName, setAppClassName] = useState('app light-mode');

  useEffect(() => {
    if (appIsInDarkMode) setAppIsInDarkMode(true);
    setAppClassName(`${app} ${appIsInDarkMode ? darkMode : lightMode}`);
  }, [appIsInDarkMode]);
  return (
    <div className={appClassName}>
      <SideInfoBar />
      <div className="app-container">
        <Switch>
          <Route path="/demo/typingMotion">
            <TypingMotionDemoPage />
          </Route>
          <Route path="/dev">
            <DevPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
