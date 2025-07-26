// src/hooks/useFilteredCocktails.ts
import { useState, useEffect, useMemo } from "react";

interface Cocktail {
  name: string;
  ingredients: string[];
}

const useFilteredCocktails = (
  cocktails: Cocktail[],
  searchTerm: string,
  itemsPerPage = 10
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  // Debounce para searchTerm (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Reset pagina al cambiar búsqueda
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Filtrado memorizar para performance
  const filtered = useMemo(() => {
    if (!debouncedSearch) return cocktails;
    return cocktails.filter((c) =>
      c.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [cocktails, debouncedSearch]);

  // Paginar resultados
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage, itemsPerPage]);

  // Navegación sencilla
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return {
    currentPage,
    totalPages,
    paginated,
    nextPage,
    prevPage,
  };
};

export default useFilteredCocktails;

