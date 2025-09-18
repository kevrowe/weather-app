async function fiveDayForecast() {
  return Promise.resolve(MOCK_DATA as any)
}

export { fiveDayForecast };

const MOCK_DATA = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1758175200,
      "main": {
        "temp": 305.8,
        "feels_like": 312.8,
        "temp_min": 305.8,
        "temp_max": 305.8,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1008,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.09,
        "deg": 191,
        "gust": 5.31
      },
      "visibility": 10000,
      "pop": 0.37,
      "rain": {
        "3h": 0.55
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-18 06:00:00"
    },
    {
      "dt": 1758186000,
      "main": {
        "temp": 305.49,
        "feels_like": 312.49,
        "temp_min": 304.87,
        "temp_max": 305.49,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1007,
        "humidity": 73,
        "temp_kf": 0.62
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.62,
        "deg": 142,
        "gust": 4.77
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.85
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-18 09:00:00"
    },
    {
      "dt": 1758196800,
      "main": {
        "temp": 304.03,
        "feels_like": 311.03,
        "temp_min": 303.14,
        "temp_max": 304.03,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 76,
        "temp_kf": 0.89
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.6,
        "deg": 136,
        "gust": 5.88
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.42
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-18 12:00:00"
    },
    {
      "dt": 1758207600,
      "main": {
        "temp": 301.99,
        "feels_like": 307.45,
        "temp_min": 301.99,
        "temp_max": 301.99,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1011,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 6.33,
        "deg": 127,
        "gust": 8.43
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.86
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-18 15:00:00"
    },
    {
      "dt": 1758218400,
      "main": {
        "temp": 303.25,
        "feels_like": 310.25,
        "temp_min": 303.25,
        "temp_max": 303.25,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.99,
        "deg": 124,
        "gust": 6.09
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.42
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-18 18:00:00"
    },
    {
      "dt": 1758229200,
      "main": {
        "temp": 300.95,
        "feels_like": 304.47,
        "temp_min": 300.95,
        "temp_max": 300.95,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.22,
        "deg": 117,
        "gust": 6.52
      },
      "visibility": 10000,
      "pop": 0.97,
      "rain": {
        "3h": 0.81
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-18 21:00:00"
    },
    {
      "dt": 1758240000,
      "main": {
        "temp": 300.53,
        "feels_like": 302.98,
        "temp_min": 300.53,
        "temp_max": 300.53,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1011,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.91,
        "deg": 161,
        "gust": 1.2
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 3.51
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-19 00:00:00"
    },
    {
      "dt": 1758250800,
      "main": {
        "temp": 300.82,
        "feels_like": 303.31,
        "temp_min": 300.82,
        "temp_max": 300.82,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 1012,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.7,
        "deg": 348,
        "gust": 1.1
      },
      "visibility": 10000,
      "pop": 0.57,
      "rain": {
        "3h": 0.37
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-19 03:00:00"
    },
    {
      "dt": 1758261600,
      "main": {
        "temp": 301.3,
        "feels_like": 303.83,
        "temp_min": 301.3,
        "temp_max": 301.3,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1010,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.11,
        "deg": 149,
        "gust": 2.53
      },
      "visibility": 10000,
      "pop": 0.29,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-19 06:00:00"
    },
    {
      "dt": 1758272400,
      "main": {
        "temp": 302.18,
        "feels_like": 304.71,
        "temp_min": 302.18,
        "temp_max": 302.18,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 1008,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.16,
        "deg": 143,
        "gust": 3.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-19 09:00:00"
    },
    {
      "dt": 1758283200,
      "main": {
        "temp": 301.59,
        "feels_like": 304.24,
        "temp_min": 301.59,
        "temp_max": 301.59,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1010,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 2.38,
        "deg": 149,
        "gust": 2.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-19 12:00:00"
    },
    {
      "dt": 1758294000,
      "main": {
        "temp": 301.16,
        "feels_like": 303.84,
        "temp_min": 301.16,
        "temp_max": 301.16,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1011,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.32,
        "deg": 156,
        "gust": 2.17
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-19 15:00:00"
    },
    {
      "dt": 1758304800,
      "main": {
        "temp": 300.67,
        "feels_like": 303.03,
        "temp_min": 300.67,
        "temp_max": 300.67,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 2.06,
        "deg": 163,
        "gust": 2.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-19 18:00:00"
    },
    {
      "dt": 1758315600,
      "main": {
        "temp": 300.57,
        "feels_like": 302.84,
        "temp_min": 300.57,
        "temp_max": 300.57,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.32,
        "deg": 188,
        "gust": 1.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-19 21:00:00"
    },
    {
      "dt": 1758326400,
      "main": {
        "temp": 300.85,
        "feels_like": 303.25,
        "temp_min": 300.85,
        "temp_max": 300.85,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.75,
        "deg": 222,
        "gust": 1.14
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-20 00:00:00"
    },
    {
      "dt": 1758337200,
      "main": {
        "temp": 301.49,
        "feels_like": 304.34,
        "temp_min": 301.49,
        "temp_max": 301.49,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1011,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.25,
        "deg": 161,
        "gust": 2.3
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-20 03:00:00"
    },
    {
      "dt": 1758348000,
      "main": {
        "temp": 301.53,
        "feels_like": 304.72,
        "temp_min": 301.53,
        "temp_max": 301.53,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.71,
        "deg": 218,
        "gust": 1.81
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-20 06:00:00"
    },
    {
      "dt": 1758358800,
      "main": {
        "temp": 301.07,
        "feels_like": 304.19,
        "temp_min": 301.07,
        "temp_max": 301.07,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 1007,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 77
      },
      "wind": {
        "speed": 2.22,
        "deg": 198,
        "gust": 2.09
      },
      "visibility": 10000,
      "pop": 0.72,
      "rain": {
        "3h": 0.41
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-20 09:00:00"
    },
    {
      "dt": 1758369600,
      "main": {
        "temp": 301.77,
        "feels_like": 305.4,
        "temp_min": 301.77,
        "temp_max": 301.77,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 83
      },
      "wind": {
        "speed": 1.95,
        "deg": 137,
        "gust": 2.39
      },
      "visibility": 10000,
      "pop": 0.17,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-20 12:00:00"
    },
    {
      "dt": 1758380400,
      "main": {
        "temp": 301.47,
        "feels_like": 305.06,
        "temp_min": 301.47,
        "temp_max": 301.47,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 2.43,
        "deg": 131,
        "gust": 2.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-20 15:00:00"
    },
    {
      "dt": 1758391200,
      "main": {
        "temp": 300.93,
        "feels_like": 304.16,
        "temp_min": 300.93,
        "temp_max": 300.93,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 58
      },
      "wind": {
        "speed": 2.42,
        "deg": 134,
        "gust": 2.43
      },
      "visibility": 10000,
      "pop": 0.34,
      "rain": {
        "3h": 0.35
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-20 18:00:00"
    },
    {
      "dt": 1758402000,
      "main": {
        "temp": 300.8,
        "feels_like": 303.87,
        "temp_min": 300.8,
        "temp_max": 300.8,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1008,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 58
      },
      "wind": {
        "speed": 2.65,
        "deg": 133,
        "gust": 2.94
      },
      "visibility": 10000,
      "pop": 0.16,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-20 21:00:00"
    },
    {
      "dt": 1758412800,
      "main": {
        "temp": 300.65,
        "feels_like": 303.67,
        "temp_min": 300.65,
        "temp_max": 300.65,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1010,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 79
      },
      "wind": {
        "speed": 2.29,
        "deg": 108,
        "gust": 2.58
      },
      "visibility": 10000,
      "pop": 0.52,
      "rain": {
        "3h": 0.35
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-21 00:00:00"
    },
    {
      "dt": 1758423600,
      "main": {
        "temp": 301.4,
        "feels_like": 304.91,
        "temp_min": 301.4,
        "temp_max": 301.4,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.93,
        "deg": 128,
        "gust": 2.27
      },
      "visibility": 10000,
      "pop": 0.57,
      "rain": {
        "3h": 0.56
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-21 03:00:00"
    },
    {
      "dt": 1758434400,
      "main": {
        "temp": 301.95,
        "feels_like": 305.8,
        "temp_min": 301.95,
        "temp_max": 301.95,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1008,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 2.4,
        "deg": 169,
        "gust": 2.69
      },
      "visibility": 10000,
      "pop": 0.7,
      "rain": {
        "3h": 0.54
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-21 06:00:00"
    },
    {
      "dt": 1758445200,
      "main": {
        "temp": 302.09,
        "feels_like": 305.93,
        "temp_min": 302.09,
        "temp_max": 302.09,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 1007,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 4.71,
        "deg": 116,
        "gust": 5.14
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.71
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-21 09:00:00"
    },
    {
      "dt": 1758456000,
      "main": {
        "temp": 301.74,
        "feels_like": 305.68,
        "temp_min": 301.74,
        "temp_max": 301.74,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 4.63,
        "deg": 127,
        "gust": 5.51
      },
      "visibility": 10000,
      "pop": 0.96,
      "rain": {
        "3h": 0.36
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-21 12:00:00"
    },
    {
      "dt": 1758466800,
      "main": {
        "temp": 301.33,
        "feels_like": 305.06,
        "temp_min": 301.33,
        "temp_max": 301.33,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 4.05,
        "deg": 130,
        "gust": 4.6
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-21 15:00:00"
    },
    {
      "dt": 1758477600,
      "main": {
        "temp": 301.01,
        "feels_like": 304.47,
        "temp_min": 301.01,
        "temp_max": 301.01,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 72
      },
      "wind": {
        "speed": 3.23,
        "deg": 140,
        "gust": 3.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-21 18:00:00"
    },
    {
      "dt": 1758488400,
      "main": {
        "temp": 300.98,
        "feels_like": 304.41,
        "temp_min": 300.98,
        "temp_max": 300.98,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.45,
        "deg": 151,
        "gust": 2.96
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-21 21:00:00"
    },
    {
      "dt": 1758499200,
      "main": {
        "temp": 301.05,
        "feels_like": 304.57,
        "temp_min": 301.05,
        "temp_max": 301.05,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.54,
        "deg": 153,
        "gust": 2.98
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-22 00:00:00"
    },
    {
      "dt": 1758510000,
      "main": {
        "temp": 301.49,
        "feels_like": 305.27,
        "temp_min": 301.49,
        "temp_max": 301.49,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1012,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 2.46,
        "deg": 169,
        "gust": 2.89
      },
      "visibility": 10000,
      "pop": 0.69,
      "rain": {
        "3h": 0.69
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-22 03:00:00"
    },
    {
      "dt": 1758520800,
      "main": {
        "temp": 301.67,
        "feels_like": 305.35,
        "temp_min": 301.67,
        "temp_max": 301.67,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 0.44,
        "deg": 35,
        "gust": 1
      },
      "visibility": 10000,
      "pop": 0.64,
      "rain": {
        "3h": 0.26
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-22 06:00:00"
    },
    {
      "dt": 1758531600,
      "main": {
        "temp": 301.91,
        "feels_like": 305.71,
        "temp_min": 301.91,
        "temp_max": 301.91,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 1007,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 1.15,
        "deg": 164,
        "gust": 1.86
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-22 09:00:00"
    },
    {
      "dt": 1758542400,
      "main": {
        "temp": 301.87,
        "feels_like": 305.8,
        "temp_min": 301.87,
        "temp_max": 301.87,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 86
      },
      "wind": {
        "speed": 2.62,
        "deg": 141,
        "gust": 2.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-22 12:00:00"
    },
    {
      "dt": 1758553200,
      "main": {
        "temp": 301.64,
        "feels_like": 305.62,
        "temp_min": 301.64,
        "temp_max": 301.64,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1011,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 3.01,
        "deg": 151,
        "gust": 3.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-22 15:00:00"
    },
    {
      "dt": 1758564000,
      "main": {
        "temp": 300.45,
        "feels_like": 303.68,
        "temp_min": 300.45,
        "temp_max": 300.45,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 1009,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 2.13,
        "deg": 157,
        "gust": 2.52
      },
      "visibility": 10000,
      "pop": 0.43,
      "rain": {
        "3h": 0.62
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-22 18:00:00"
    },
    {
      "dt": 1758574800,
      "main": {
        "temp": 300.59,
        "feels_like": 303.89,
        "temp_min": 300.59,
        "temp_max": 300.59,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 1009,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.51,
        "deg": 142,
        "gust": 4.13
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.98
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-22 21:00:00"
    },
    {
      "dt": 1758585600,
      "main": {
        "temp": 301.08,
        "feels_like": 304.78,
        "temp_min": 301.08,
        "temp_max": 301.08,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 1010,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 3.96,
        "deg": 160,
        "gust": 4.93
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.36
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-23 00:00:00"
    },
    {
      "dt": 1758596400,
      "main": {
        "temp": 301.93,
        "feels_like": 305.76,
        "temp_min": 301.93,
        "temp_max": 301.93,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 1011,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 3.05,
        "deg": 186,
        "gust": 3.99
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.59
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-23 03:00:00"
    }
  ],
  "city": {
    "id": 1880252,
    "name": "Singapore",
    "coord": {
      "lat": 1.2814,
      "lon": 103.8726
    },
    "country": "SG",
    "population": 3547809,
    "timezone": 28800,
    "sunrise": 1758149720,
    "sunset": 1758193339
  }
}
