import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <Title headline='Planetas' />
        <div
          className='container-PlanetCard'
        >
          { Planets.map((planet, index) =>
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
