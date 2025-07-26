import { useState, useMemo, useEffect } from "react";

type Cocktail = {
  name: string;
  ingredients: string[];
};

export function useFilteredCocktails(
  cocktails: Cocktail[],
  search: string,
  itemsPerPage: number = 5
) {
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce para evitar búsqueda en cada tecla rápida
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); // Reset página cuando cambia búsqueda
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  const filteredCocktails = useMemo(() => {
    const searchLower = debouncedSearch.toLowerCase();
    return cocktails.filter((c) =>
      c.name.toLowerCase().includes(searchLower)
    );
  }, [cocktails, debouncedSearch]);

  // Paginación
  const totalPages = Math.ceil(filteredCocktails.length / itemsPerPage);

  const paginatedCocktails = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCocktails.slice(start, start + itemsPerPage);
  }, [filteredCocktails, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedCocktails,
    debouncedSearch,
  };
}
