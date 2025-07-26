// src/components/academy/AcademySection.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import cocktails from "../../data/cocktails.json";
import useFilteredCocktails from "../../hooks/useFilteredCocktails";

const AcademySection: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const { currentPage, totalPages, paginated, nextPage, prevPage } =
    useFilteredCocktails(cocktails, search, 5); // 5 por página

  return (
    <div className="glass-card">
      <h3>{t("academy")}</h3>

      <input
        type="search"
        placeholder={t("searchCocktail")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label={t("searchCocktail")}
      />

      <ul>
        {paginated.length ? (
          paginated.map((c) => (
            <li key={c.name}>
              <b>{c.name}</b>: {c.ingredients.join(", ")}
            </li>
          ))
        ) : (
          <li>{t("noResults")}</li>
        )}
      </ul>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1}>
            {t("prev")}
          </button>
          <span>
            {t("page")} {currentPage} / {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            {t("next")}
          </button>
        </div>
      )}
    </div>
  );
};

export default AcademySection;
