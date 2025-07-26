// src/services/weather.ts
export type WeatherData = {
  temperature: number;
  description: string;
  city: string;
};

const MOCK_WEATHER: WeatherData = {
  temperature: 22,
  description: "Parcialmente nublado",
  city: "Palma",
};

export async function fetchWeather(): Promise<WeatherData> {
  // Siempre devuelve datos simulados
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_WEATHER), 500);
  });
}
