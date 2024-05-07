import React from "react";

export default function MeteoTest(){
    return (
        <div className="meteo-container">
                <div className="meteo-block">
                    <text className="meteo-h1">Weather Information</text>
                    <div>
                        <text className="meteo-h2">Djibouti </text>
                        <text className="meteo-h2">43º</text>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/11d@2x.png`}/>
                    <text className="meteo-text">RAIN</text>
                </div>
        </div>
    );
}
