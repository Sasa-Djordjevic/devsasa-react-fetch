import { Link } from 'react-router-dom';
import mystyles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={mystyles.section}>
            <div className={mystyles.card}>
                <h2>Star Wars World</h2>
                <p>Welcome to the Star Wars React Fetch website where you can find some interesting information about Star Wars movies, characters, starships, and planets. Explore the website and learn something new or refresh your knowledge about the Star Wars world. May the Force be with you.</p>
            </div>
            <div className={mystyles["card-buttons"]}>
                <button className={mystyles.button}>
                    <Link to="movies">Movies</Link>
                </button>
                <button className={mystyles.button}>
                    <Link to="characters">Characters</Link>
                </button>
            </div>
            <div className={mystyles["card-buttons"]}>
                <button className={mystyles.button}>
                    <Link to="starships">Starships</Link>
                </button>
                <button className={mystyles.button}>
                    <Link to="planets">Planets</Link>
                </button>
            </div>
            <div className={mystyles.card}>
                <h2>SWAPI</h2>
                <p className={mystyles.info}>All the Star Wars data is collected from the Star Wars API (<a href="https://swapi.dev/" target='_blank' rel='noreferrer'>swapi.dev</a>). Due to the possibility of slow operation of the web API, please be patient while loading the data.</p>
                <p>The data from the web API is acquired in four different ways:</p>
                <ul>
                    <li>fetch() with then</li>
                    <li>fetch() with async and await</li>
                    <li>Ajax</li>
                    <li>Axios HTTP library</li>
                </ul>
                <p>The website was created using React and React Router 6. All website code can be found on the GitHub repository:</p>
            </div>
            <div className={mystyles["card-buttons"]}>
                    <button className={mystyles.button}>
                        <a href="https://github.com/Sasa-Djordjevic/devsasa-react-fetch.git" target='_blank' rel='noreferrer'>GitHub</a>
                    </button>
            </div>
        </div>
    );
};

export default Hero;