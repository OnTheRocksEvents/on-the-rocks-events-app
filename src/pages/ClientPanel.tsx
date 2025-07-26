import React from "react";
import { useTranslation } from "react-i18next";
import EventCalendar from "../components/calendar/EventCalendar";

const ClientPanel: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("clientPanel")}</h2>
      <EventCalendar />
      {/* Aquí puedes añadir componentes de solicitudes y reportes */}
    </div>
  );
};
export default ClientPanel;
