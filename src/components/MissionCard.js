import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className='container-CardM'
      >
        <p
          className='name'
        >{ name }</p>
        <p>{ year }</p>
        <p>{ country }</p>
        <p
          className='destination'
        >{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
