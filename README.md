# Candidate Brief: Weather App

## Task Overview:

In this task, you will build a simple Weather App using React and JavaScript. You will integrate with a public API to fetch weather data, render the data and ensure a user-friendly experience.

## Requirements

1. Use the OpenWeatherMap API (or a similar public API) to fetch weather data for Singapore (Lat, Long provided)
2. Display detail view for the current weather conditions (temperature low and high, humidity, wind speed, precipitation, icon)
3. Display a 5-day weather forecast (temperature high and low, precipitation, icon)
4. Display the weather forecast for 12pm (noon) for each day
5. Allow user to select each of the 5 days to populate the detail view
6. Handle errors and edge cases (e.g., API errors, no data found)
7. Style the app using CSS

```
Layout:
------------------------------------------------------
Icon      Temp High
          Temp Low
          Precipitation                                      Detail View
          Humidity
          Wind Speed
------------------------------------------------------
Mon        Tues        Weds        Thur       Fri
[Icon]     [Icon]      [Icon]     [Icon]      [Icon]         Day selector
Low High   Low High    Low High   Low High    Low High
------------------------------------------------------
```

Example UI
![Weather App UI](https://github.com/kevrowe/weather-app/assets/1856418/351fb728-a373-46c3-8338-a5d920ea9ad1)

## Task Constraints

- You will have 60 minutes to complete the task
- You will be pair programming with the interviewer
- You can use any React and TypeScript resources ( documentation, online tutorials, etc.) but no external libraries or frameworks
- You will be evaluated on your problem-solving skills, coding skills, and communication skills

## Tips and Recommendations:

- Take a moment to understand the requirements and ask clarifying questions if needed
- Start by fetching and parsing the API data
- Use React components to render the data in a user-friendly format
- Handle errors and edge cases gracefully
- Write clean, readable, and modular code
- Communicate your thought process and code decisions with the interviewer

## API Information

Icons can be rendered by using the `list[].weather[].icon` value in this URL
https://openweathermap.org/img/wn/[weather-icon]@2x.png

### 5 day forecast

The `forecast5` endpoint will return metadata about the location, e.g. city name, and a `list` of weather data objects in 3 hour intervals.

Key values from response:

```json
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1647345600, // Timestamp
      "main": {
        "temp": 287.39,
        "feels_like": 286.38,
        "temp_min": 286.69,
        "temp_max": 287.39,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 58,
        "temp_kf": 0.7
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "wind": {
        "speed": 3.08,
        "deg": 128,
        "gust": 4.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-03-15 12:00:00" // DateTime
    }
  ]
}
```

Good Luck!
