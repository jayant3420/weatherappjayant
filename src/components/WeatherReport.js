import React, { useState, useEffect } from "react";

const WeatherReport = ({ WeatherInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    name,
    country,
    sunset,
    weathermood,
    speed
  } = WeatherInfo;
  const [WeatherCondition, setWeatherCondition] = useState("");
  useEffect(() => {
    switch (weathermood) {
      case "Clouds":
        setWeatherCondition("wi wi-day-cloudy");
        break;
      case "Clear":
        setWeatherCondition("wi wi-day-sunny");
        break;
      case "Haze":
        setWeatherCondition("wi wi-day-sleet-storm");
        break;
      case "Mist":
        setWeatherCondition("wi wi-day-fog");
        break;
      default:
        setWeatherCondition("wi wi-day-sunny");
        break;
    }
  }, [weathermood]);

  //Humidity Time
  let miliseconds = sunset * 1000;
  let dateObj = new Date(miliseconds);
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 ? hours % 12 : 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const sunsetTime = `${hours} : ${minutes} : ${seconds} ${ampm}`;

  return (
    <article className="widget">
      <div className="weatherIcons">
        <i className={WeatherCondition}></i>
      </div>

      <div className="WeatherInfo">
        <div className="Wi-Temp">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <p className="weathercondition">{weathermood}</p>
            <p className="place">{`${name}, ${country}`}</p>
          </div>
        </div>
        <div className="wi-date">
          <p>
            <i>Indian Standard Time</i>
          </p>
          <p>{new Date().toLocaleString("en-IN", { hour12: true })}</p>
        </div>
      </div>

      <div className="extra-weather-info">
        <div className="temp-info part">
          <p>
            <i className={"wi wi-sunset"}></i>
          </p>
          <p>
            {sunsetTime} <br /> Sunset Time
          </p>
        </div>

        <div className="humidity-info part">
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
          <p>
            {humidity} <br /> Humidity
          </p>
        </div>

        <div className="pressure-info part">
          <p>
            <i className={"wi wi-rain"}></i>
          </p>
          <p>
            Pressure <br /> {pressure} MM
          </p>
        </div>

        <div className="wind-info part">
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
          <p>
            Wind <br /> {speed}
          </p>
        </div>
      </div>
    </article>
  );
};

export default WeatherReport;
