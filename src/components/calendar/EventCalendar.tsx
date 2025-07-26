import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const API_KEY = "TU_API_KEY_OPENWEATHERMAP"; // Sustituye por tu API KEY real de openweathermap.org
const EVENT_LOCATION = { lat: 39.5696, lon: 2.6502 }; // Palma de Mallorca

const EventCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!date || Array.isArray(date)) return;
    const today = new Date();
    const diffDays = Math.floor(
      ((date as Date).getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays < 0 || diffDays > 7) {
      setWeather(null);
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${EVENT_LOCATION.lat}&lon=${EVENT_LOCATION.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecast = data.daily.find((d: any) => {
          const day = new Date(d.dt * 1000);
          return (
            day.getDate() === (date as Date).getDate() &&
            day.getMonth() === (date as Date).getMonth() &&
            day.getFullYear() === (date as Date).getFullYear()
          );
        });
        setWeather(forecast || null);
      });
  }, [date]);

  return (
    <div className="glass-card">
      <h3>Calendario de eventos</h3>
      <Calendar onChange={setDate} value={date} />
      {weather && (
        <div style={{ marginTop: "1rem" }}>
          <b>Clima previsto:</b> {weather.weather[0].description} <br />
          🌡️ {weather.temp.day}°C / 💧 {weather.humidity}% humedad
        </div>
      )}
      {!weather && (
        <div style={{ marginTop: "1rem", color: "#888" }}>
          Selecciona una fecha dentro de los próximos 7 días para ver el clima.
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
