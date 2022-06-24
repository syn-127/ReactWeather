import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather(){
    const url = "https://api.openweathermap.org/data/2.5/onecall?lat=51.50&lon=0.12&exclude=minutely&appid=ca43fc6721b25a6b9af580793d600713"
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
                <h1> Weather {weather}</h1>
            </div>
        )
    }

    return (
        <div>
        </div>
    )
}

export default Weather