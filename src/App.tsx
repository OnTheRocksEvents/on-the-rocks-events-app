import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import EmployeePanel from "./pages/EmployeePanel";
import ClientPanel from "./pages/ClientPanel";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Chatbot from "./components/chatbot/Chatbot";
import TutorialPlayer from "./components/video/TutorialPlayer";
import LanguageSwitcher from "./components/common/LanguageSwitcher";

// Tipos para roles
type Role = "employee" | "client" | "admin" | null;

// Datos simulados para cada rol
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
};

const App: React.FC = () => {
  const [role, setRole] = useState<Role>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!role) return;

    setLoading(true);
    setUserData(null); // limpiar datos anteriores

    const timer = setTimeout(() => {
      setUserData(MOCK_DATA[role]);
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer); // limpieza
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
    <div className="app-bg">
      <h1 className="app-title">{t("onTheRocksEvents")}</h1>

      <div className="glass-container">
        <LanguageSwitcher />

        {!role && <Login setRole={setRole} />}

        {loading && <p className="loading-text">{t("loading")}</p>}

        {!loading && renderPanel()}

        <TutorialPlayer />
        <Chatbot />
      </div>

      <footer className="footer">{t("footer")}</footer>
    </div>
  );
};

export default App;
