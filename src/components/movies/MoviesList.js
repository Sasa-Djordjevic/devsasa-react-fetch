import React from 'react';

import Movie from './Movie';
import mystyles from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <div className={mystyles.section}>
      <ul className={mystyles['movies-list']}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            closeHandler={props.closeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
