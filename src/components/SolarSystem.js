import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <Title headline='Planetas' />
        { Planets.map((planet, index) =>
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ) }
      </div>
    );
  }
}

export default SolarSystem;
