// src/context/GridContext.jsx
// Simpan pilihan grid (1x4 / 2x2) — dipakai untuk filter theme & compositing canvas

import { createContext, useContext, useState, useCallback } from "react";
import { getGridOptionById } from "../data/gridOptions";

const GridContext = createContext(null);

export function GridProvider({ children }) {
  const [gridId, setGridId] = useState(null);

  const selectGrid = useCallback((id) => {
    setGridId(id);
  }, []);

  const resetGrid = useCallback(() => {
    setGridId(null);
  }, []);

  const gridOption = gridId ? getGridOptionById(gridId) : null;

  const value = {
    gridId,
    gridOption,
    selectGrid,
    resetGrid,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}

export function useGridContext() {
  const ctx = useContext(GridContext);
  if (!ctx) throw new Error("useGridContext harus dipakai di dalam <GridProvider>");
  return ctx;
}
