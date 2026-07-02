// src/hooks/usePrintAnimation.js
// Hook untuk trigger animasi strip "keluar dari mesin photobooth" (print-slot.svg)

import { useRef, useState, useCallback } from "react";
import { playPrintOutAnimation } from "../services/animationService";

export function usePrintAnimation() {
  const stripRef = useRef(null);
  const shadowRef = useRef(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const playPrintOut = useCallback(async () => {
    setIsPrinting(true);
    setIsDone(false);

    await playPrintOutAnimation(stripRef, shadowRef);

    setIsPrinting(false);
    setIsDone(true);
  }, []);

  const resetAnimation = useCallback(() => {
    stripRef.current?.classList.remove("print-out-animate");
    shadowRef.current?.classList.remove("strip-shadow-animate");
    setIsPrinting(false);
    setIsDone(false);
  }, []);

  return { stripRef, shadowRef, isPrinting, isDone, playPrintOut, resetAnimation };
}
