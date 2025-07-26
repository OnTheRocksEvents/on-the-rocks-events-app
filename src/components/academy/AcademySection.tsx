import React, { useState } from "react";
import cocktails from "@/data/cocktails.json";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useFilteredCocktails from "@/hooks/useFilteredCocktails";
import { useTranslation } from "react-i18next";

const AcademySection: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const { paginated } = useFilteredCocktails({ cocktails, searchTerm: search, itemsPerPage: 0 }); // itemsPerPage ignored
  const visible = useInfiniteScroll(paginated, 5);

  return (
    <section className="glass-card">
      <h3>{t("academy")}</h3>
      <input
        type="search"
        placeholder={t("searchCocktail")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label={t("searchCocktail")}
      />
      <ul>
        {visible.length
          ? visible.map((c) => <li key={c.name}><b>{c.name}</b>: {c.ingredients.join(", ")}</li>)
          : <li>{t("noResults")}</li>}
      </ul>
      {visible.length !== paginated.length && <p className="loading-text">{t("loadingMore")}</p>}
    </section>
  );
};

export default AcademySection;

