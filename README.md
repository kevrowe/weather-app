# Candidate Brief: Weather App

## Task Overview:

In this task, you will build a simple Weather App using React and JavaScript. You will integrate with a public API to fetch weather data, render the data and ensure a user-friendly experience.

## Requirements

1. Use the OpenWeatherMap API (or a similar public API) to fetch weather data for Singapore (Lat, Long provided)
2. Display the current weather conditions (temperature, humidity, wind speed, etc.)
3. Display a 5-day weather forecas
4. Handle errors and edge cases (e.g., API errors, no data found)
5. Style the app using CSS
6. Demonstration interface layout for inspiration:

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

OpenWeatherMap API documentation: 5 day weather forecast 
https://openweathermap.org/forecast5

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
