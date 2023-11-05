import React from 'react';

import Starship from './Starship';
import mystyles from './StarshipsList.module.css';

const StarshipList1 = (props) => {
    return (
        <div className={mystyles.section}>
          <ul className={mystyles['starship-list']}>
            {props.starships.map((starship) => (
              <Starship
                key={starship.id}
                starship={starship}
              />
            ))}
          </ul>
        </div>
      );
};

export default StarshipList1;