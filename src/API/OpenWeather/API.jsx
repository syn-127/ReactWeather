import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather(){
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.50&lon=0.12&exclude=minutely&units=metric&appid=${process.env.REACT_APP_WEATHERAPI}`
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setWeather(response.data)
        })
    }, [url])

    if(weather){
        return (
            <div id="data">
                <div className="weather-card__header">
                </div>
                <div className="city">
                    <h2>London Weather</h2>
                </div>
                <div id="desc" style={{textTransform: 'capitalize'}}>
                    <h3>{weather.current.weather[0].description}<span>Wind:{weather.current.wind_speed}km/h</span><span className="dot">•</span><span>{weather.current.humidity}%</span></h3>
                </div>
                <div id="icon">
                    <img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="weather icon" />
                </div>
                <div id="temp">
                    <h1>{Math.trunc(weather.current.temp)}°C</h1>
                </div>
                <div className="Weekdays">
                <table>
            <tr>
                <td>TUE</td>
                <td>WED</td>
                <td>THU</td>
                <td>FRI</td>
                <td>SAT</td>
            </tr>
            <tr>
                <td>30°</td>
                <td>34°</td>
                <td>36°</td>
                <td>34°</td>
                <td>37°</td>
            </tr>
            <tr>
                <td>17°</td>
                <td>22°</td>
                <td>19°</td>
                <td>23°</td>
                <td>19°</td>
            </tr>
        </table>
                </div>
            </div>
            
        )
    }

    return (
        <div>
        </div>
    )
}

export default Weather