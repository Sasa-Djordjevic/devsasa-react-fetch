import React, {useState} from 'react';
import { NavLink  } from 'react-router-dom';

import mystyles from './MainNavigation.module.css';

const MainNavigation = () => {
    const [openNav, setOpenNav] = useState(false);

    const openNavHandler = () => {
        setOpenNav(!openNav);
    };

    const closeNavHandler = () => {
        if (openNav) {
            setOpenNav(false);
        }
    };

    const navClasses = `${mystyles.links} ${openNav ? mystyles.linksopen : ''}`;
    const burgerClasses = `${mystyles.burger} ${openNav ? mystyles.toggle : ''}`;

    return (
        <header className={mystyles.header}>
            <nav className={mystyles.nav}>
                <NavLink to='/' className={mystyles.logo}>
                    <h2 className={mystyles.h2}>React Fetch</h2>
                </NavLink>
                <ul className={navClasses}>
                    <li>
                        <NavLink
                            to='/'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                            onClick={closeNavHandler}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='movies'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                            onClick={closeNavHandler}
                        >Movies</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='characters'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                            onClick={closeNavHandler}
                        >Characters</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='starships'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                            onClick={closeNavHandler}
                        >Starships</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='planets'
                            className={ ({isActive}) => isActive ? `${mystyles.link} ${mystyles.active}` : mystyles.link}
                            onClick={closeNavHandler}
                        >Planets</NavLink>
                    </li>
                </ul>
                <div className={burgerClasses} onClick={openNavHandler}>
                    <div className={mystyles.line1}></div>
                    <div className={mystyles.line2}></div>
                    <div className={mystyles.line3}></div>
                </div>
            </nav>
        </header>
    );
};

export default MainNavigation;