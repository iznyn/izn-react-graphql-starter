/**
 * PrivateRoute.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import AuthRedirect from './AuthRedirect';
import { GET_AUTH_DATA } from '../../queries/auth';

const Private = props => {
  const { path, exact } = props;
  const { data } = useQuery(GET_AUTH_DATA);

  return (
    <Route
      path={path}
      exact={exact}
      render={renderProps => {
        const Component = props.component;
        return data.auth.status ? (
          <Component {...renderProps} />
        ) : (
          <AuthRedirect location={renderProps.location} />
        );
      }}
    />
  );
};

Private.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
};

export default withRouter(Private);
