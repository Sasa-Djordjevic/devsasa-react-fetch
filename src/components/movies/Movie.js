import React, {Fragment, useState} from 'react';

import mystyles from './Movie.module.css';
import Modal from '../UI/modal/Modal';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Movie = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const d = new Date(props.releaseDate);

  const released = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();

  const onClickOpenHandler = () => {
    setIsOpen(true);
  }
  const onClickCloseHandler = () => {
    setIsOpen(false);
  }

  return (
    <Fragment>
      <li className={mystyles.movie}>
        <div className={mystyles.holder}>
          <button className={mystyles.iks} onClick={() => {props.closeHandler(props.id)}}>
            <div className={mystyles.line1}></div>
            <div className={mystyles.line2}></div>
          </button>
        </div>
        <h2>{props.title}</h2>
        <h3>{released}</h3>
        <p>{(props.openingText.slice(0, 200)).trim()}... <button className={mystyles['read-more']} onClick={onClickOpenHandler}>Read more</button></p>
      </li>
      {isOpen && (
          <Modal 
            title={props.title}
            releaseDate={released}
            openingText={props.openingText}
            onClickCloseHandler={onClickCloseHandler}
          />
        )}
    </Fragment>
  );
};

export default Movie;
