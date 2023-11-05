import React, {useState, useEffect, useCallback} from 'react';

//import MovieButton from '../components/movies/MovieButton';
import MoviesList from '../components/movies/MoviesList';
import Title from '../components/UI/info/Title';
import Refresh from '../components/movies/Refresh';

const title = "Star Wars Movies";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // sending GET requests from SWAPI
    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try{
            const response = await fetch("https://swapi.dev/api/films/");

            if (!response.ok){
                throw new Error('Something went wrong!')
            }
        
            const data = await response.json();
        
            const transformMovies = data.results.map( (movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date
                };
            });

            setMovies(transformMovies);

        } catch (error) {
            setError(error.message);
        } 
        setIsLoading(false);

    }, []);

    useEffect(() => {

        fetchMoviesHandler();

    }, [fetchMoviesHandler]);

    const closeHandler = (id) => {
        const filterdMovies = movies.filter( (item) => item.id !== id);

        setMovies(filterdMovies);
    };

    const refreshHandler = () => {
        fetchMoviesHandler();
    };

    //let content = <p className='message-text'>Found no movies.</p>;
    let content = <Refresh refreshHandler={refreshHandler} />

    if (movies.length > 0){
        content = <MoviesList movies={movies} closeHandler={closeHandler}/>;
    }

    if (error){
        content = <p className='message-text'>{error}</p>;
    }

    if (isLoading){
        content = (
            <div>
                <p className='loading-text'>Loading...</p>
                <div className='loading'></div>
            </div>
            );
    }

    return (
        <main>
            <section className="container">
                <Title title={title} />
            </section>
            <section className="container">
                {content}
            </section>
        </main>
    );
};

export default MoviesPage;