import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ticketsError, reloadError } from '../../actions/actions.js';

import ErrorPage from '../ErrorPage/ErrorPage.js';

class ErrorBoundry extends Component {

  componentDidCatch() {
    const { ticketsError } = this.props;
    ticketsError(true);
  }

  render() {
    const { hasError, reloadError } = this.props;

    if (hasError) {
      return <ErrorPage
              reloadError={reloadError}
            />
    }
    return this.props.children;
  }
}

const mapStateToProps = ({ hasError }) => {
  return { hasError }
}

const mapDispatchToProps = {
  ticketsError,
  reloadError
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundry);



