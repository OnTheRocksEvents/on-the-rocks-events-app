import React from "react";
import MapTracker from "../components/geolocation/MapTracker";
import { useTranslation } from "react-i18next";
import AcademySection from "../components/academy/AcademySection";
import EventCalendar from "../components/calendar/EventCalendar";

const EmployeePanel: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("employeePanel")}</h2>
      <EventCalendar />
      <MapTracker />
      <AcademySection />
    </div>
  );
};
export default EmployeePanel;
