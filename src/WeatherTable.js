import React from "react";

export default function WeatherTable({ weatherInfo, isLoading }) {
  return (
    <>
      <div className="container my-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-rotate">
                Date
              </th>

              <th scope="col">City</th>
              <th scope="col">Temp</th>
              <th scope="col">Humidity</th>
              <th scope="col">Wind speed</th>
              <th scope="col">Sky Appearance</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <p>Loading data...</p>}
            {!isLoading && weatherInfo && (
              <tr>
                <td scope="row">{new Date().toLocaleString()}</td>
                <td>{weatherInfo.name}</td>
                <td>{Math.round(weatherInfo.main.temp - 273.15)}&nbsp;°C</td>
                <td>{weatherInfo.main.humidity}&nbsp;%</td>
                <td>{weatherInfo.wind.speed}&nbsp;Km/H</td>
                <td>{weatherInfo.weather[0].description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
