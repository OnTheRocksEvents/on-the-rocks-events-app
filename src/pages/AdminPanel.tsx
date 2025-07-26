import React from "react";
import { useTranslation } from "react-i18next";

const AdminPanel: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("adminPanel")}</h2>
      {/* Aquí puedes añadir componentes de estadísticas y gestión */}
    </div>
  );
};

export default AdminPanel;
