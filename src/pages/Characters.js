import React, { useState, useEffect, useCallback } from "react";

import Title from "../components/UI/info/Title";
import ButtonsPages from "../components/UI/info/ButtonsPages";
import Counter from "../components/UI/info/Counter";
import CharactersList from "../components/characters/CharactersList";
import { nanoid } from "nanoid";

const title = "Star Wars Characters";

const CharactersPage = () => {
    const [urlLink, setUrlLink] = useState("https://swapi.dev/api/people/");
    const [characters, setCharacters] = useState([]);
    const [isLoadingChar, setIsLoadingChar] = useState(false);
    const [errorChar, setErrorChar] = useState(null);
    const [changePagePrevious, setChangePagePrevious] = useState(null);
    const [changePageNext, setChangePageNext] = useState(null);
    const [counter, setCounter] = useState({show: false, total: 0, number: 0, curent: 0});
    const [sign, setSign] = useState(true);

    // sending GET requests from SWAPI
    const charactersFetchHandler = useCallback(() => {
        setIsLoadingChar(true);
        setErrorChar(null);
        setChangePagePrevious(null);
        setChangePageNext(null);
        setCounter((prevState) => {
            return {...prevState, show: false }
        });

        fetch(urlLink)
        .then( (response) => {
            if (!response.ok) {
                return response.json().then(errResData => {
                    const error = new Error("Something went wrong!");
                    error.data = errResData;
                    throw error;
                });
            }
            return response.json();
        })
        .then( (data) => {
            const transformCharacters = data.results.map( (characterData) => {
                return {
                    id: nanoid(),
                    name: characterData.name,
                    gender: characterData.gender,
                    height: characterData.height,
                    mass: characterData.mass,
                    eyeColor: characterData.eye_color,
                    hairColor: characterData.hair_color,
                    skinColor: characterData.skin_color
                }
            });

            setCharacters(transformCharacters);

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
            
            setIsLoadingChar(false);
            setSign(false);
        })
        .catch(err => {
            setErrorChar(err.message);
            setIsLoadingChar(false);
        });

    }, [urlLink, sign]);

    useEffect(() => {
        charactersFetchHandler();
    }, [charactersFetchHandler]);

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

    let content = <p className='message-text'>Found no characters.</p>;

    if (characters.length > 0){
        content = <CharactersList characters={characters} />;
    }

    if (errorChar){
        content = <p className='message-text'>{errorChar}</p>;
    }

    if (isLoadingChar){
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

export default CharactersPage;