import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';


function App() {
  const [weatherData, setWeatherData] = useState({}); //הגדרת משתנה יוזסטיט

  const fetchWeatherData = async () => { //פונקציה עבור עדכון הנתונים
    const apiKey = '8ee633956bad6ae1965b557a94ecfcba';
    const cities = ['Eilat', 'London', 'New York', 'Alaska'];
  

    for (const city of cities){
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, { method: 'POST'});
        if (!response.ok) {
          throw new Error("תגובת הרשת לא הייתה תקינה");
        }
        const data = await response.json();
        setWeatherData(prevState => ({ ...prevState, [city]: data }));
        
      } catch (error) {
        console.log('ERROR:' , error);
      }

    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [])


  return (
    <div className="app">
      {weatherData ? (
        <div className="weather-cards">
          {Object.values(weatherData).map((cityData, index) => (
            <WeatherCard key={index} data={cityData} />
          ))}
        </div>
      ) : (
        <div>טוען נתונים...</div>
      )}
    </div>
  );
}

export default App;