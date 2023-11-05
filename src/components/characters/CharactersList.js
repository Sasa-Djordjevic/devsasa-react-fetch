import React from 'react';

import Character from './Character';
import mystyles from './CharactersList.module.css';

const CharactersList = (props) => {
    return (
        <div className={mystyles.section}>
          <ul className={mystyles['character-list']}>
            {props.characters.map((character) => (
              <Character
                key={character.id}
                character={character}
              />
            ))}
          </ul>
        </div>
      );
};

export default CharactersList;
