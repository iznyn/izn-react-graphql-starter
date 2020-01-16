/**
 * AuthRedirect.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const AuthRedirect = ({ location }) => (
  <Redirect
    to={{
      pathname: '/login',
      state: {
        ref: location,
        messageType: 'error',
        messageContent: 'Anda harus login terlebih dahulu untuk mengakses halaman.',
      },
    }}
  />
);

AuthRedirect.propTypes = {
  location: PropTypes.object,
};

export default AuthRedirect;
