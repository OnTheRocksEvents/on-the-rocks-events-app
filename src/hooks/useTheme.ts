import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<"light"|"dark">(
    localStorage.getItem("theme") as any || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, toggleTheme };
}
