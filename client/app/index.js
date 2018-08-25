import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Dashboard from './containers/Dashboard/Dashboard';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
