import React, { useState, useEffect } from 'react';
import '../components/formGenerator/css/meteo.css'
export default function MeteoApi() {
    const [weatherData, setWeatherData] = useState(null);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=37.39&lon=-5.99&appid=18e7eccffbdb29be3c072192fc8ba1ff`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <div className="meteo-container">
            {weatherData ? (
                <div className="meteo-block">
                    <text className="meteo-h1">Weather Information</text>
                    <div>
                    <text className="meteo-h2">{weatherData.name} </text>
                    <text className="meteo-h2">{(weatherData.main.temp-273).toFixed(0)}º</text>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                    <text className="meteo-text">{(weatherData.weather[0].description).toLocaleUpperCase()}</text>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
