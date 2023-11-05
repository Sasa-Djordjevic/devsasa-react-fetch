// import React, {useState} from 'react';
import { NavLink  } from 'react-router-dom';

import mystyles from './FotterNavigation.module.css';

const year = new Date();

const FotterNavigation = () => {
    return (
        <footer className={mystyles.footer}>
            <div className={mystyles.section}>
                <NavLink to='/' className={mystyles.logo}>
                    <h2 className={mystyles.h2}>React Fetch</h2>
                </NavLink>
                <ul className={mystyles.links}>
                    <li>
                        <NavLink
                            to='/'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='movies'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                        >Movies</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='characters'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                        >Characters</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='starships'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                        >Starships</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='planets'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                        >Planets</NavLink>
                    </li>
                </ul>
            </div>
            <p className={mystyles.rights}>All rights reserved by <a href="https://devsasa.com/" target='_blank' rel='noreferrer'>devsasa.com</a> - &copy; {year.getFullYear()}</p>
        </footer>
    );
};

export default FotterNavigation;