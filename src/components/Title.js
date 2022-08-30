import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    )
  }
}

Title.PropTypes = {
  headline: PropTypes.string.isRequired,
}

export default Title;
