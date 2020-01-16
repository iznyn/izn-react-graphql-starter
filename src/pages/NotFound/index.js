/**
 * NotFoundPage
 */

import React from 'react';
import PropTypes from 'prop-types';

export class NotFound extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div>
        <p>Page Not Found</p>
        <p>
          <button
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </p>
      </div>
    );
  }
}

NotFound.propTypes = {
  history: PropTypes.object,
};

export default NotFound;
