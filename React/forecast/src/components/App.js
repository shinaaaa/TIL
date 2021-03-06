import React, { useState, useEffect } from "react";
import Axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";
import Spinner from "./Spinner";

import "./App.css";

const App = () => {
    const APIID = "2a01fef5b61b363ab2cf2050e4fb48c7";
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState('c');

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const getTemp = async coords => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIID}&units=metric&lang=kr`;
        const res = await Axios.get(url);
        const { data } = res;
        setCurrent(data);
    };
    const getHourlyTemp = async coords => {
        const { latitude: lat, longitude: lon } = coords;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APIID}&units=metric&lang=kr`;
        const res = await Axios.get(url);
        const { data } = res;
        setForecast(data);
    };

    const getAll = async () => {
        try {
            const { coords } = await getLocation();
            await getTemp(coords);
            await getHourlyTemp(coords);
        } catch (error) {
            alert("위치 제발 동의해주세요ㅠㅠ");
        }
    };
    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <header className="header-padding">
                <h1>일기예보</h1>
            </header>
            <main className="container">
                {
                    !current || !forecast ?
                        <Spinner /> :
                        <>
                            <Current current={current} unit={unit} setUnit={setUnit} />
                            <Forecast forecast={forecast} unit={unit} />
                        </>
                }
            </main>
        </>
    );
};

export default App;