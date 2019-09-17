import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import InlineCartPage from './InlineCartPage/InlineCartPage';
import LightboxCartPage from './LightboxCartPage/LightboxCartPage';
import HomePage from './HomePage/HomePage';

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/inline" render={props => <InlineCartPage {...props} />} />
        <Route exact path="/lightbox" render={props => <LightboxCartPage {...props} />} />
        <Route exact path="/" render={props => <HomePage {...props} />} />
      </Router>
    </div>
  );
}
