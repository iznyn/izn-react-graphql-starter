/**
 * Router.js
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound/Loadable';
import config from './config';
import Private from './Private';
import ScrollToTop from './ScrollToTop';

const routeItems = [];
const routeComponents = {};
for (let i = 0; i < config.length; i += 1) {
  const route = config[i];
  const { name, component } = route;
  routeItems.push(route);
  routeComponents[name] = component;
  // if (typeof route.children !== 'undefined' && route.children.length > 0) {
  //   for (let j = 0; j < route.children.length; j += 1) {
  //     routeItems.push(route.children[j]);
  //   }
  // }
}

const Router = () => (
  <div>
    <ScrollToTop />
    <Switch>
      {routeItems.map(route => {
        const { name } = route;
        const LoadableComponent = routeComponents[name];
        if (route.requiresAuth) {
          return (
            <Private
              key={`route-${route.name}`}
              path={route.path}
              exact={route.exact}
              component={LoadableComponent}
            />
          );
        }
        return (
          <Route
            key={`route-${route.name}`}
            path={route.path}
            exact={route.exact}
            component={LoadableComponent}
          />
        );
      })}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default withRouter(Router);
