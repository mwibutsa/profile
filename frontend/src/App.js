import React from 'react';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage/AboutPage';

import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route to="/about" component={AboutPage} />
        <Route to="/" component={HomePage} exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
