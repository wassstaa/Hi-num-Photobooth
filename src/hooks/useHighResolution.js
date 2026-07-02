// src/hooks/useHighResolution.js
// Hook untuk minta stream kamera resolusi tinggi (coba 4K/2K, fallback otomatis kalau device gak support)

import { useState, useCallback } from "react";
import { getBestSupportedConstraints } from "../utils/imageQuality";

export function useHighResolution() {
  const [resolutionUsed, setResolutionUsed] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const resolveConstraints = useCallback(async (facingMode = "user") => {
    setIsChecking(true);
    try {
      const { constraints, resolutionUsed: used } = await getBestSupportedConstraints(facingMode);
      setResolutionUsed(used);
      return constraints;
    } finally {
      setIsChecking(false);
    }
  }, []);

  const resolutionLabel =
    resolutionUsed === "UHD_4K"
      ? "4K"
      : resolutionUsed === "QHD_2K"
      ? "2K"
      : resolutionUsed === "FULL_HD"
      ? "Full HD"
      : resolutionUsed === "AUTO_FALLBACK"
      ? "Standar (otomatis)"
      : null;

  return { resolutionUsed, resolutionLabel, isChecking, resolveConstraints };
}
