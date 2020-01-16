/**
 * ScrollToTop.js
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const ScrollToTop = ({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

ScrollToTop.propTypes = {
  location: PropTypes.object,
};

export default withRouter(ScrollToTop);
