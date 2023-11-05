import React, { useState, useEffect, useCallback } from "react";

import Title from "../components/UI/info/Title";
import ButtonsPages from "../components/UI/info/ButtonsPages";
import Counter from "../components/UI/info/Counter";
import StarshipsList from "../components/starships/StarshipsList";
import { nanoid } from "nanoid";

const title = "Star Wars Starships";

const StarshipsPage = () => {
    const [urlLink, setUrlLink] = useState("https://swapi.dev/api/starships/");
    const [starships, setStarships] = useState([]);
    const [isLoadingStarships, setIsLoadingStarships] = useState(false);
    const [errorStarships, setErrorStarships] = useState(null);
    const [changePagePrevious, setChangePagePrevious] = useState(null);
    const [changePageNext, setChangePageNext] = useState(null);
    const [counter, setCounter] = useState({show: false, total: 0, number: 0, curent: 0});
    const [sign, setSign] = useState(true);

    // sending GET requests from SWAPI
    const starshipsFetchHandler = useCallback(() => {
        setIsLoadingStarships(true);
        setErrorStarships(null);
        setChangePagePrevious(null);
        setChangePageNext(null);
        setCounter((prevState) => {
            return {...prevState, show: false }
        });

        const xhr = new XMLHttpRequest();

        xhr.open('GET', urlLink, true);

        xhr.onload = () => {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.response);

                const transformStarships = data.results.map( (starshipsData) => {  
                    return {
                        id: nanoid(),
                        name: starshipsData.name,
                        length: starshipsData.length,
                        speed: starshipsData.max_atmosphering_speed,
                        crew: starshipsData.crew,
                        hyperdrive: starshipsData.hyperdrive_rating,
                        shclass: starshipsData.starship_class
                    }
                });
    
                setStarships(transformStarships);
    
                setChangePagePrevious(data.previous);
                setChangePageNext(data.next);
    
                setCounter((prevState) => {
                    return {
                        show: true,
                        total: data.count,
                        number: data.results.length,
                        curent: sign ? prevState.curent + data.results.length : prevState.curent
                    }
                });
                
                setIsLoadingStarships(false);
                setSign(false);
            }
        }

        xhr.onerror = () => {
            const ourerror = "Something went wrong!"
            setErrorStarships(ourerror);
            setIsLoadingStarships(false);
        }

        xhr.send();

    }, [urlLink, sign]);

    useEffect(() => {
        starshipsFetchHandler();
    }, [starshipsFetchHandler]);

    const urlLinkPrevious = () => {
        if (changePagePrevious) {
            setUrlLink(changePagePrevious);
            
            setCounter((prevState) => {
                return {...prevState, curent: prevState.curent - prevState.number };
            });
        }
    };

    const urlLinkNext = () => {
        if (changePageNext) {
            setUrlLink(changePageNext);

            setSign(true);
        }
    }

    let content = <p className='message-text'>Found no starships.</p>;

    if (starships.length > 0){
        content = <StarshipsList starships={starships} />;
    }

    if (errorStarships){
        content = <p className='message-text'>{errorStarships}</p>;
    }

    if (isLoadingStarships){
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
                <Title title={title}/>
            </section>
            <section className="container">
                <ButtonsPages 
                    urlLinkPrevious={urlLinkPrevious} 
                    urlLinkNext={urlLinkNext} 
                    previous={changePagePrevious}
                    next={changePageNext}
                />
                {counter.show && <Counter total={counter.total} curentNumber={counter.curent}/>}
            </section>
            <section className="container">
                {content}
            </section>
        </main>
    );
};

export default StarshipsPage;