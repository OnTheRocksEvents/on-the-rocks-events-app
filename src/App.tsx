import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import EmployeePanel from "./pages/EmployeePanel";
import ClientPanel from "./pages/ClientPanel";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Chatbot from "./components/chatbot/Chatbot";
import TutorialPlayer from "./components/video/TutorialPlayer";
import LanguageSwitcher from "./components/common/LanguageSwitcher";

type Role = "employee" | "client" | "admin" | null;

const MOCK_DATA = {
  employee: {
    name: "Enrique",
    position: "Supervisor",
    eventsAssigned: [
      { id: 1, name: "Evento Música 2025", date: "2025-08-01" },
      { id: 2, name: "Conferencia Tech", date: "2025-08-10" },
    ],
  },
  client: {
    name: "Empresa XYZ",
    upcomingEvents: [{ id: 1, title: "Lanzamiento Producto", date: "2025-09-01" }],
    reports: [
      { id: 1, event: "Evento Música 2024", summary: "Excelente participación" },
    ],
  },
  admin: {
    totalUsers: 120,
    activeEvents: 8,
    systemHealth: "Óptimo",
  },
} as const;

const App: React.FC = () => {
  const { t } = useTranslation();
  const [role, setRole] = useState<Role>(null);
  const [userData, setUserData] = useState<typeof MOCK_DATA[keyof typeof MOCK_DATA] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!role) {
      setUserData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setUserData(null);

    const timer = setTimeout(() => {
      setUserData(MOCK_DATA[role]);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [role]);

  const renderPanel = () => {
    if (!role || !userData) return null;

    switch (role) {
      case "employee":
        return <EmployeePanel data={userData} />;
      case "client":
        return <ClientPanel data={userData} />;
      case "admin":
        return <AdminPanel data={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-bg" role="main" aria-label="On The Rocks Events Application">
      <h1 className="app-title">{t("onTheRocksEvents")}</h1>

      <section className="glass-container" aria-live="polite" aria-busy={loading}>
        <LanguageSwitc

