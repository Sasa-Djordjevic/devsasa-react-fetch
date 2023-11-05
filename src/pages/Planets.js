import React, { useState, useEffect, useCallback } from "react";

import Title from "../components/UI/info/Title";
import ButtonsPages from "../components/UI/info/ButtonsPages";
import Counter from "../components/UI/info/Counter";
import PlanetsList from "../components/planets/PlanetsList";
import { nanoid } from "nanoid";
import axios from "axios";

const title = "Star Wars Planets";

const PlanetsPage = () => {
    const [urlLink, setUrlLink] = useState("https://swapi.dev/api/planets/");
    const [planets, setPlanets] = useState([]);
    const [isLoadingPlanets, setIsLoadingPlanets] = useState(false);
    const [errorPlanets, setErrorPlanets] = useState(null);
    const [changePagePrevious, setChangePagePrevious] = useState(null);
    const [changePageNext, setChangePageNext] = useState(null);
    const [counter, setCounter] = useState({show: false, total: 0, number: 0, curent: 0});
    const [sign, setSign] = useState(true);

    // sending GET requests from SWAPI
    const planetsFetchHandler = useCallback( async() => {
        setIsLoadingPlanets(true);
        setErrorPlanets(null);
        setChangePagePrevious(null);
        setChangePageNext(null);
        setCounter((prevState) => {
            return {...prevState, show: false }
        });

        try {
            const response = await axios(urlLink);
            const data = response.data;

            const transformPlanets = data.results.map( (planetsData) => {
                return {
                    id: nanoid(),
                    name: planetsData.name,
                    diameter: planetsData.diameter,
                    terrain: planetsData.terrain,
                    climate: planetsData.climate,
                    gravity: planetsData.gravity,
                    rotation: planetsData.rotation_period,
                    orbital: planetsData.orbital_period
                }
            });

            setPlanets(transformPlanets);

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
            
            setIsLoadingPlanets(false);
            setSign(false);

        } catch (err) {
            setErrorPlanets(err.response.data);
            setIsLoadingPlanets(false);
        }

    }, [urlLink, sign]);

    useEffect(() => {
        planetsFetchHandler();
    }, [planetsFetchHandler]);

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

    let content = <p className='message-text'>Found no planets.</p>;

    if (planets.length > 0){
        content = <PlanetsList planets={planets} />;
    }

    if (errorPlanets){
        content = <p className='message-text'>{errorPlanets}</p>;
    }

    if (isLoadingPlanets){
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

export default PlanetsPage;