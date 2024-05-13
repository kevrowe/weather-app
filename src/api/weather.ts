const API_KEY = "";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

async function fiveDayForecast() {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=1.2814234141467042&lon=103.87258649723782&appid=${API_KEY}`,
  );
  return response.json();
}

export { fiveDayForecast };
