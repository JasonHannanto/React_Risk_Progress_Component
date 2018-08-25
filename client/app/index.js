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
        <Route path="/" component={Dashboard} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
