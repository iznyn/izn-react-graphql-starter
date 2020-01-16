/**
 * pages/Alert.js
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(theme =>
  createStyles({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(),
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
    root: {
      marginBottom: 25,
      boxShadow: 'none',
    },
    cssOutlinedInput: {
      fontSize: '12px',
      lineHeight: 1.5,
      '&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
        borderColor: '#ffbfbf', // hovered
      },
      '&$cssFocused $notchedOutline': {
        borderColor: '#ff5a5a', // focused
        borderWidth: '1px',
      },
    },
    notchedOutline: {},
    cssFocused: {},
    disabled: {},
  }),
);

const Alert = ({ type, message }) => {
  const classes = useStyles();
  if (type !== '' && message !== '') {
    const Icon = variantIcon[type];
    const messageComp = (
      <span className={classes.message}>
        <Icon className={classNames(classes.icon, classes.iconVariant)} />
        {message}
      </span>
    );

    return (
      <SnackbarContent
        className={classNames(classes[type], classes.root, 'login-alert')}
        aria-describedby="client-snackbar"
        message={messageComp}
      />
    );
  }
  return null;
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
