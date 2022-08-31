import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './Missions.css';

class Missions extends Component {
  render() {
    return (
      <div
        className='container-main-Missions'
      >
        <Title headline='Missões' />
        <div
          className='container-Missions'
        >
          { missions.map((mission, index) => 
            <MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ) }
        </div>
      </div>
    );
  }
}

export default Missions;
