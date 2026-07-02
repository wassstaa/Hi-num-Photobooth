// src/context/ThemeContext.jsx
// Simpan pilihan tema warna strip (white, baby-pink, dst) — bergantung pada grid yang sudah dipilih

import { createContext, useContext, useState, useCallback } from "react";
import { getThemeById } from "../data/themeOptions";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(null);

  const selectTheme = useCallback((id) => {
    setThemeId(id);
  }, []);

  const resetTheme = useCallback(() => {
    setThemeId(null);
  }, []);

  const themeOption = themeId ? getThemeById(themeId) : null;

  const value = {
    themeId,
    themeOption,
    selectTheme,
    resetTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext harus dipakai di dalam <ThemeProvider>");
  return ctx;
}
