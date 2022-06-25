import React from "react";
import Weather from "../../API/OpenWeather/API";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
     <Weather data={data} />
    </div>
  );
}

export default WeatherCard;