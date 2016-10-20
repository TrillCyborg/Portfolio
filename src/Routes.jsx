import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home/';
import WebRTC from './components/WebRTC/';

const NoMatch = () => (
  <h1>404 Not Found</h1>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="WebRTC" component={WebRTC} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default Routes;
