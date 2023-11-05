import React from 'react';

import mystyles from './Starship.module.css';

const Starship = (props) => {
    return (
        <li className={mystyles.starship}>
          <h2>{props.starship.name}</h2>
          <table className={mystyles.table}>
            <tbody>
              <tr>
                <td className={mystyles.feature}>Length</td>
                <td>{props.starship.length} m</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Crew</td>
                <td>{props.starship.crew}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Atm Speed</td>
                <td>{props.starship.speed} km/h</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Hyperdrive</td>
                <td>{props.starship.hyperdrive}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Class</td>
                <td>{props.starship.shclass}</td>
              </tr>
            </tbody>
          </table>
        </li>
      );
};

export default Starship;