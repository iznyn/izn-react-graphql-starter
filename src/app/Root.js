/**
 * Root.js
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_APP_LOADER } from '../queries/app';
import AppLoader from '../components/AppLoader';
import Router from './Router';

const Root = () => {
  const { data } = useQuery(GET_APP_LOADER);
  return (
    <div>
      <Router />
      <AppLoader visible={data.app.appLoader} />
    </div>
  );
};

export default Root;
