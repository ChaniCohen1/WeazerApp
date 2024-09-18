import React from 'react';
import './WeazerCard.css';

function WeatherCard({data }) {
  console.log(data);
  
  const cityDict = {'Eilat' : 'אילת' , 'London' : 'לונדון' , 'Alaska' : 'אלסקה' , 'New York' : 'ניו יורק' ,};

  const weatherDescriptions = {
    'clear sky': 'שמים בהירים',
    'few clouds': 'מעט עננים',
    'scattered clouds': 'עננים מפוזרים',
    'broken clouds': 'שברי ענן',
    'overcast clouds': 'שמים מעוננים',
    'moderate rain' : 'גשם קל',
    'mist': 'ערפל',
    'smoke': 'עשן',
    'haze': 'אובך',
    'dust': 'אבק',
    'fog': 'ערפל',
    'sand': 'חול',
    'ash': 'אפר',
    'squall': 'סופה קצרה',
    'tornado': 'טורנדו',
    'tropical storm': 'סופה טרופית',
    'hurricane': 'הוריקן',
    'cold': 'קר',
    'hot': 'חם',
    'warm': 'חמים',
    'cool': 'קריר',
    'rainy': 'גשום',
    'drizzle': 'גשם זיקוק',
    'thunderstorm': 'סופת רעמים',
    'snow': 'שלג',
    'hail': 'ברד',
  };
  
  const icon = data.main.temp <= 20 ? '❄️' : (data.main.temp <= 30 ? '⛅️' : '☀️');

  return (
    <div className="weather-card">
      <h2>{cityDict[data.name]}      {icon}</h2>
      <h4>{weatherDescriptions[data.weather[0].description] || data.weather[0].description}</h4>
      <p>טמפרטורה נמדדת: {data.main.temp}°</p>
      <p>טמפרטורה מורגשת: {data.main.feels_like}°</p>
      <p>לחות: {data.main.humidity}%</p>
    </div>
  );
}
export default WeatherCard;