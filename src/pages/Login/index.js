/**
 * pages/Login.js
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router';
import { GET_AUTH_DATA } from '../../queries/auth';
import PageLayout from '../../components/PageLayout';
import Seo from '../../components/Seo';
import Form from './Form';
import Alert from './Alert';
import useStyles from './styles';

const Login = ({ location }) => {
  const [messageType, setMessageType] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [ref, setRef] = useState('/');

  useEffect(() => {
    const { state } = location;
    if (state && typeof state.messageType !== 'undefined') {
      setMessageType(state.messageType);
    }
    if (state && typeof state.messageContent !== 'undefined') {
      setMessageContent(state.messageContent);
    }
    if (state && typeof state.ref !== 'undefined') {
      setRef(state.ref);
    }
  });

  // Check login status
  const { data } = useQuery(GET_AUTH_DATA);
  if (data.auth.status) {
    return <Redirect to={ref} />;
  }

  const classes = useStyles();
  return (
    <PageLayout>
      <Seo title="Login" />
      <h1>Login</h1>
      <div className={classes.main}>
        <Alert type={messageType} message={messageContent} />
        <Form redirectTo={ref} />
      </div>
    </PageLayout>
  );
};

Login.propTypes = {
  location: PropTypes.object,
};

export default Login;
