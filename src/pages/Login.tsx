import React from "react";
import { useTranslation } from "react-i18next";

const Login: React.FC<{ setRole: (role: "employee" | "client" | "admin") => void }> = ({ setRole }) => {
  const { t } = useTranslation();
  return (
    <div className="login-panel">
      <h2>{t("selectRole")}</h2>
      <button onClick={() => setRole("employee")}>{t("employee")}</button>
      <button onClick={() => setRole("client")}>{t("client")}</button>
      <button onClick={() => setRole("admin")}>{t("admin")}</button>
    </div>
  );
};
export default Login;
