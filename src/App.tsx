import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EmployeePanel from "./pages/EmployeePanel";
import ClientPanel from "./pages/ClientPanel";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Chatbot from "./components/chatbot/Chatbot";
import TutorialPlayer from "./components/video/TutorialPlayer";
import LanguageSwitcher from "./components/common/LanguageSwitcher";

const App: React.FC = () => {
  const [role, setRole] = useState<"employee" | "client" | "admin" | null>(null);
  const { t } = useTranslation();

  return (
    <div className="app-bg">
      <h1 className="app-title">{t("onTheRocksEvents")}</h1>
      <div className="glass-container">
        <LanguageSwitcher />
        {!role && <Login setRole={setRole} />}
        {role === "employee" && <EmployeePanel />}
        {role === "client" && <ClientPanel />}
        {role === "admin" && <AdminPanel />}
        <TutorialPlayer />
        <Chatbot />
      </div>
      <footer className="footer">
        ©️2025 {"{ On The Rocks Events }"}
      </footer>
    </div>
  );
};

export default App;
