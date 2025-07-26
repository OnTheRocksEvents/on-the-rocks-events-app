import { useState, useEffect, useMemo } from "react";

export interface Cocktail {
  name: string;
  ingredients: string[];
}

interface UseFilteredCocktailsOptions {
  cocktails: Cocktail[];
  searchTerm: string;
  itemsPerPage?: number;
  debounceDelay?: number;
}

const useFilteredCocktails = ({
  cocktails,
  searchTerm,
  itemsPerPage = 10,
  debounceDelay = 300,
}: UseFilteredCocktailsOptions) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  // Debounce del término de búsqueda
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Reiniciar paginación cuando cambia la búsqueda
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [searchTerm, debounceDelay]);

  // Filtrado optimizado por searchTerm (con memo)
  const filtered = useMemo(() => {
    if (!debouncedSearch) return cocktails;
    return cocktails.filter((c) =>
      c.name.toLowerC
