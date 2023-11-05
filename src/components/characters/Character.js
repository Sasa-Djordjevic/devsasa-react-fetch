import React from 'react';

import mystyles from './Character.module.css';

const Character = (props) => {
    return (
        <li className={mystyles.character}>
          <h2>{props.character.name}</h2>
          <table className={mystyles.table}>
            <tbody>
              <tr>
                <td className={mystyles.feature}>Gender</td>
                <td>{props.character.gender}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Height</td>
                <td>{props.character.height} cm</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Mass</td>
                <td>{props.character.mass} kg</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Eye color</td>
                <td>{props.character.eyeColor}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Hair color</td>
                <td>{props.character.hairColor}</td>
              </tr>
              <tr>
                <td className={mystyles.feature}>Skin color</td>
                <td>{props.character.skinColor}</td>
              </tr>
            </tbody>
          </table>
        </li>
      );
};

export default Character;