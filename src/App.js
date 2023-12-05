import React, { useState, useEffect } from "react";
import Weather from "./Weather.js";
import WeatherTable from "./WeatherTable.js";

function App() {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState();
  const [weatherInfo, setWeatherInfo] = useState();
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = "160a456a69a020265b8c2667d3e7aa3b";
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  useEffect(() => {
    setCity(userInput);
  }, [userInput]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(weather_url);
      if (!response.ok) throw Error("Did not receive expected data");
      const weather = await response.json();
      setWeatherInfo(weather);
      console.log(weather);
    } catch (error) {
      setFetchErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setUserInput("");
    fetchWeather();
  };

  return (
    <>
      <Weather
        userInput={userInput}
        setUserInput={setUserInput}
        handleSearch={handleSearch}
      />
      <WeatherTable weatherInfo={weatherInfo} isLoading={isLoading} />
    </>
  );
}

export default App;
