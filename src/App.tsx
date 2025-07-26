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

// Datos simulados para cada panel
const MOCK_EMPLOYEE_DATA = {
  name: "Enrique",
  position: "Supervisor",
  eventsAssigned: [
    { id: 1, name: "Evento Música 2025", date: "2025-08-01" },
    { id: 2, name: "Conferencia Tech", date: "2025-08-10" },
  ],
};

const MOCK_CLIENT_DATA = {
  name: "Empresa XYZ",
  upcomingEvents: [
    { id: 1, title: "Lanzamiento Producto", date: "2025-09-01" },
  ],
  reports: [
    { id: 1, event: "Evento Música 2024", summary: "Excelente participación" },
  ],
};

const MOCK_ADMIN_DATA = {
  totalUsers: 120,
  activeEvents: 8,
  systemHealth: "Óptimo",
};

const App: React.FC = () => {
  const [role, setRole] = useState<Role>(null);
  // Estados para datos simulados, opcionales: simular carga asíncrona
  const [employeeData, setEmployeeData] = useState<typeof MOCK_EMPLOYEE_DATA | null>(null);
  const [clientData, setClientData] = useState<typeof MOCK_CLIENT_DATA | null>(null);
  const [adminData, setAdminData] = useState<typeof MOCK_ADMIN_DATA | null>(null);

  const { t } = useTranslation();

  // Simular fetch de datos con delay para cada rol
  useEffect(() => {
    if (role === "employee") {
      setTimeout(() => setEmployeeData(MOCK_EMPLOYEE_DATA), 700);
    } else if (role === "client") {
      setTimeout(() => setClientData(MOCK_CLIENT_DATA), 700);
    } else if (role === "admin") {
      setTimeout(() => setAdminData(MOCK_ADMIN_DATA), 700);
    }
  }, [role]);

  return (
    <div className="app-bg" style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      padding: "2rem",
      color: "#fff",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      {/* Título principal */}
      <h1 className="app-title" style={{ marginBottom: "1rem", fontSize: "2.5rem", fontWeight: "bold" }}>
        {t("onTheRocksEvents")}
      </h1>

      {/* Contenedor glassmorphism */}
      <div className="glass-container" style={{
        background: "rgba(255 255 255 / 0.15)",
        padding: "2rem",
        borderRadius: "20px",
        backdropFilter: "blur(15px)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "900px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}>
        {/* Selector de idioma */}
        <LanguageSwitcher />

        {/* Login si no hay rol */}
        {!role && <Login setRole={setRole} />}

        {/* Paneles con datos simulados */}
        {role === "employee" && employeeData && <EmployeePanel data={employeeData} />}
        {role === "client" && clientData && <ClientPanel data={clientData} />}
        {role === "admin" && adminData && <AdminPanel data={adminData} />}

        {/* Loading States */}
        {(role === "employee" && !employeeData) && <p>Cargando datos de empleado...</p>}
        {(role === "client" && !clientData) && <p>Cargando datos de cliente...</p>}
        {(role === "admin" && !adminData) && <p>Cargando datos de administrador...</p>}

        {/* Elementos comunes */}
        <TutorialPlayer />
        <Chatbot />
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "2rem", fontSize: "1rem", opacity: 0.7 }}>
        ©️2025 {"{ On The Rocks Events }"}
      </footer>
    </div>
  );
};

export default App;
