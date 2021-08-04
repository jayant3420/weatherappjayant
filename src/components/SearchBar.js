import React, { useState, useEffect } from "react";
import WeatherReport from "./WeatherReport";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("greater noida");
  const [weatherInfo, setWeatherInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=d79f57d111a5be85d6cf0eb6e624afed`;

      const response = await fetch(url);
      const data = await response.json();
      const { temp, humidity, pressure } = data.main;
      const { name } = data;
      const { country, sunset } = data.sys;
      const { main: weathermood } = data.weather[0];
      const { speed } = data.wind;
      console.log(data);
      setWeatherInfo({
        temp,
        humidity,
        pressure,
        name,
        country,
        sunset,
        weathermood,
        speed
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search.."
            autoFocus
            className="searchTerm"
            name="CitySearch"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="button" className="searchBtn" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/*Weather Report Component*/}
      <WeatherReport WeatherInfo={weatherInfo} />
    </>
  );
};

export default SearchBar;
