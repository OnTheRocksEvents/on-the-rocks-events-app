import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const EVENT_LOCATION = { lat: 39.5696, lng: 2.6502 };

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180,
    φ2 = (lat2 * Math.PI) / 180,
    Δφ = ((lat2 - lat1) * Math.PI) / 180,
    Δλ = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const MapTracker: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const { t } = useTranslation();

  const handleCheckIn = () => {
    if (!navigator.geolocation) {
      setStatus(t("geolocationNotSupported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const d = getDistance(
          pos.coords.latitude,
          pos.coords.longitude,
          EVENT_LOCATION.lat,
          EVENT_LOCATION.lng
        );
        if (d <= 200) setStatus(t("checkInSuccess"));
        else setStatus(t("checkInTooFar") + ` (${Math.round(d)}m)`);
      },
      () => setStatus(t("geolocationError"))
    );
  };

  return (
    <div className="glass-card">
      <h3>{t("checkIn")}</h3>
      <button onClick={handleCheckIn}>{t("checkInNow")}</button>
      <div>{status}</div>
    </div>
  );
};
export default MapTracker;
