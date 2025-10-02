interface WeatherDetailProps {
  weatherData: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
  }[];
  pop: number;
}

function WeatherDetail({ weatherData, wind, weather, pop }: WeatherDetailProps) {
  const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);

  return (
    <div className="weather-detail">
      <div className="icon">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
      </div>
      <div className="details">
        <div className="detail-item">
          <span className="label">Temp High:</span>
          <span className="value">{kelvinToCelsius(weatherData.temp_max)}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Temp Low:</span>
          <span className="value">{kelvinToCelsius(weatherData.temp_min)}°C</span>
        </div>
        <div className="detail-item">
          <span className="label">Precipitation:</span>
          <span className="value">{Math.round(pop * 100)}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Humidity:</span>
          <span className="value">{weatherData.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed:</span>
          <span className="value">{wind.speed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetail;
