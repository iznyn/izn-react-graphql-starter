/**
 * components/AppLoader/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Wrapper from './Wrapper';

const AppLoader = ({ visible }) => {
  if (visible) {
    return (
      <Wrapper>
        <div className="_spinner">
          <CircularProgress />
        </div>
      </Wrapper>
    );
  }
  return null;
};

AppLoader.propTypes = {
  visible: PropTypes.bool,
};

export default AppLoader;
