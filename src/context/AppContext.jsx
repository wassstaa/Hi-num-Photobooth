// src/context/AppContext.jsx
// Context utama: ngatur step/flow aplikasi (Home -> SelectGrid -> SelectTheme -> Camera -> Preview -> Result)

import { createContext, useContext, useState, useCallback } from "react";
import { APP_STEPS, APP_STEP_ORDER } from "../data/uiConfig";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [step, setStep] = useState(APP_STEPS.HOME);

  const goToStep = useCallback((nextStep) => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goNext = useCallback(() => {
    const currentIndex = APP_STEP_ORDER.indexOf(step);
    const nextStep = APP_STEP_ORDER[currentIndex + 1];
    if (nextStep) goToStep(nextStep);
  }, [step, goToStep]);

  const goBack = useCallback(() => {
    const currentIndex = APP_STEP_ORDER.indexOf(step);
    const prevStep = APP_STEP_ORDER[currentIndex - 1];
    if (prevStep) goToStep(prevStep);
  }, [step, goToStep]);

  // Dipanggil saat user pilih "Retake" — kembali dari awal (pilih grid dulu, sesuai instruksi)
  const resetToGridSelection = useCallback(() => {
    goToStep(APP_STEPS.SELECT_GRID);
  }, [goToStep]);

  const value = {
    step,
    goToStep,
    goNext,
    goBack,
    resetToGridSelection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext harus dipakai di dalam <AppProvider>");
  return ctx;
    }
