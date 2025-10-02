import { useState, useEffect } from "react";
import { fiveDayForecast } from "./api/weather";
import WeatherDetail from "./components/WeatherDetail";
import DaySelector from "./components/DaySelector";
import "./App.css";

interface WeatherData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  pop: number;
}

interface DayData {
  date: string;
  dayName: string;
  icon: string;
  temp_min: number;
  temp_max: number;
  noonData: WeatherData | null;
}

function App() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [days, setDays] = useState<DayData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await fiveDayForecast();

        if (!data || !data.list || data.list.length === 0) {
          throw new Error("No weather data available");
        }

        // Group data by day and find noon (12:00) data
        const dayMap = new Map<string, { noonData: WeatherData | null; allData: WeatherData[] }>();

        data.list.forEach((item: WeatherData) => {
          const date = item.dt_txt.split(" ")[0];
          const time = item.dt_txt.split(" ")[1];

          if (!dayMap.has(date)) {
            dayMap.set(date, { noonData: null, allData: [] });
          }

          const dayEntry = dayMap.get(date)!;
          dayEntry.allData.push(item);

          // Check if this is the noon (12:00) data
          if (time === "12:00:00") {
            dayEntry.noonData = item;
          }
        });

        // Convert to array and take first 5 days
        const daysArray = Array.from(dayMap.entries())
          .slice(0, 5)
          .map(([date, { noonData, allData }]) => {
            // Calculate min/max temps for the day
            const temps = allData.map(d => d.main.temp);
            const temp_min = Math.min(...temps);
            const temp_max = Math.max(...temps);

            // Use noon data if available, otherwise use first data point
            const dataToUse = noonData || allData[0];

            // Get day name
            const dateObj = new Date(date);
            const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });

            return {
              date,
              dayName,
              icon: dataToUse.weather[0].icon,
              temp_min,
              temp_max,
              noonData: dataToUse
            };
          });

        setDays(daysArray);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (days.length === 0 || !days[selectedDay]?.noonData) {
    return <div className="error">No weather data available</div>;
  }

  const currentDay = days[selectedDay];
  const weatherData = currentDay.noonData;

  return (
    <div className="app">
      <h1>Singapore Weather Forecast</h1>
      <WeatherDetail
        weatherData={weatherData.main}
        wind={weatherData.wind}
        weather={weatherData.weather}
        pop={weatherData.pop}
      />
      <DaySelector
        days={days}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
      />
    </div>
  );
}

export default App;
