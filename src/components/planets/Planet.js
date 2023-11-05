import React from 'react';

import mystyles from './Planet.module.css';

const Planet = (props) => {
    return (
        <li className={mystyles.planet}>
          <h2>{props.planet.name}</h2>
          <table className={mystyles.table}>
            <tbody>
              <tr>
                <td className={mystyles.feature}>Diameter</td>
                <td>{props.planet.diameter} km</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Terrain</td>
                <td>{props.planet.terrain}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Climate</td>
                <td>{props.planet.climate}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Gravity</td>
                <td>{props.planet.gravity}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Rotation period</td>
                <td>{props.planet.rotation}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Orbital period</td>
                <td>{props.planet.orbital}</td>
              </tr>
            </tbody>
          </table>
        </li>
      );
};

export default Planet;