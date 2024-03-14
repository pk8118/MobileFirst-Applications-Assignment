import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Oval as Loader } from 'react-loader-spinner';
import { HiRefresh } from "react-icons/hi";

import './index.css';

const apiUrl = "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jokeData, setJokeData] = useState([]);

    useEffect(() => {
        getJokeData();
    }, []);

    const getJokeData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(apiUrl);
            const fetchedData = await response.json();
            const formattedData = fetchedData.jokes;
            setJokeData(formattedData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching joke data:", error);
            setIsLoading(false);
        }
    }

    const renderJokes = () => {
        return (
            <div className="container">
                <ul className="joke-list row d-flex">
                    {jokeData.map((eachJoke, index) => (
                        <li key={index} className="joke-card col-12 col-md-5 m-2 p-3">
                            <div className="joke-info">
                                <p>Category: {eachJoke.category}</p>
                                <p>Type: {eachJoke.type}</p>
                            </div>
                            <p>{eachJoke.joke}</p>
                        </li>
                    ))}
                </ul>
                <div className="refresh-btn-card">
                    <span className="refresh-btn" onClick={getJokeData}>
                        <span>Refresh<HiRefresh/></span>
                    </span>
                </div>
            </div>
        );
    }

    const renderLoader = () => (
        <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
        </div>
    );

    return (
        <>
            <Navbar/>
            <div className="main-page">
                {isLoading ? renderLoader() : renderJokes()}
            </div>
        </>
    );
}

export default Home;
