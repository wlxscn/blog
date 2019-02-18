import React from 'react';

import PropTypes from 'prop-types';

class AppProvider extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  }

  getChildContext() {
    return this.props.context
  }

  render() {
    return this.props.children || null;
  }
}

export default AppProvider;
