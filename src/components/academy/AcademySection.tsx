import React, { useState } from "react";
import cocktails from "../../data/cocktails.json";
import { useTranslation } from "react-i18next";

const AcademySection: React.FC = () => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  return (
    <div className="glass-card">
      <h3>{t("academy")}</h3>
      <input
        placeholder={t("searchCocktail")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {cocktails
          .filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((c) => (
            <li key={c.name}>
              <b>{c.name}</b>: {c.ingredients.join(", ")}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default AcademySection;
