import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import HomePage from './views/home';
import DevPage from './views/dev';
import TypingMotionTextDemoPage from './views/dev/typingMotionText';

import './assets/style/App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dev/demo/typingMotionText">
          <TypingMotionTextDemoPage />
        </Route>
        <Route path="/dev">
          <DevPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
