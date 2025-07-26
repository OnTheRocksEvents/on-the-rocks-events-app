import React from "react";
import { useTranslation } from "react-i18next";

const TutorialPlayer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <h3>{t("tutorial")}</h3>
      <video controls width="100%">
        <source src="/videos/tutorial.mp4" type="video/mp4" />
        {t("videoNotSupported")}
      </video>
    </div>
  );
};
export default TutorialPlayer;
