import React from 'react';

import Planet from './Planet';
import mystyles from './PlanetsList.module.css';

const PlanetsList = (props) => {
    return (
        <div className={mystyles.section}>
          <ul className={mystyles['planet-list']}>
            {props.planets.map((planet) => (
              <Planet
                key={planet.id}
                planet={planet}
              />
            ))}
          </ul>
        </div>
      );
};

export default PlanetsList;