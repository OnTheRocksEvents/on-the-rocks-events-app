import React, { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import cocktailsData from "../../data/cocktails.json";
import { useFilteredCocktails } from "../hooks/useFilteredCocktails";

type Cocktail = {
  name: string;
  ingredients: string[];
};

const AcademySection: React.FC = () => {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedCocktails,
  } = useFilteredCocktails(cocktailsData as Cocktail[], search, 5);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="glass-card" aria-label={t("academy")}>
      <h3>{t("academy")}</h3>
      <label htmlFor="cocktail-search" className="sr-only">
        {t("searchCocktail")}
      </label>
      <input
        id="cocktail-search"
        type="search"
        placeholder={t("searchCocktail")}
        value={search}
        onChange={handleChange}
        aria-describedby="cocktail-list-desc"
        autoComplete="off"
      />
      <ul id="cocktail-list-desc" aria-live="polite" aria-relevant="all">
        {paginatedCocktails.map((c) => (
          <li key={c.name}>
            <b>{c.name}</b>: {c.ingredients.join(", ")}
          </li>
        ))}
      </ul>

      {/* Controles de paginación */}
      {totalPages > 1 && (
        <nav aria-label={t("pagination")}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            {t("previous")}
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
          >
            {t("next")}
          </button>
        </nav>
      )}
    </section>
  );
};

export default AcademySection;
