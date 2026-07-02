// src/hooks/useCountdown.js
// Hook countdown 3 detik sebelum capture, dengan callback saat selesai

import { useState, useCallback, useRef, useEffect } from "react";
import { createCountdownTicker } from "../utils/countdownHelper";
import { playCountdownTick } from "../services/audioService";
import { COUNTDOWN_DURATION } from "../data/constants";

export function useCountdown(onComplete) {
  const [count, setCount] = useState(null); // null = tidak sedang countdown
  const [isRunning, setIsRunning] = useState(false);
  const cleanupRef = useRef(null);

  const start = useCallback(() => {
    setIsRunning(true);

    cleanupRef.current = createCountdownTicker(
      COUNTDOWN_DURATION,
      (remaining) => {
        setCount(remaining);
        if (remaining > 0) playCountdownTick();
      },
      () => {
        setIsRunning(false);
        setCount(null);
        onComplete?.();
      }
    );
  }, [onComplete]);

  const cancel = useCallback(() => {
    cleanupRef.current?.();
    setIsRunning(false);
    setCount(null);
  }, []);

  useEffect(() => {
    return () => cleanupRef.current?.();
  }, []);

  return { count, isRunning, start, cancel };
}
