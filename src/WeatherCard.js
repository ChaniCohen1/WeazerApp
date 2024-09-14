import React from 'react';
import './WeazerCard.css';

function WeatherCard({data }) {
  console.log(data);
  
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>טמפרטורה: {data.main.temp}°</p>
      <p>תיאור: {data.weather[0].description}</p>
      <p>לחות: {data.main.humidity}%</p>
      <p>מרגיש כמו: {data.main.feels_like}°</p>
    </div>
  );
}
export default WeatherCard;