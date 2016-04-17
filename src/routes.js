import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LocationPage from './containers/LocationPage';
import ForecastPage from './containers/ForecastPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LocationPage} />
    <Route path="/forecast/*" component={ForecastPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
