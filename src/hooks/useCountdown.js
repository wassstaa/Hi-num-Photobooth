// Hook countdown 3 detik sebelum capture, dengan callback saat selesai.
// Guard pakai ref (bukan state) supaya double-tap/ghost-click di mobile
// gak bisa memicu dua ticker berjalan bersamaan (penyebab suara countdown numpuk).

import { useState, useCallback, useRef, useEffect } from "react";
import { createCountdownTicker } from "../utils/countdownHelper";
import { playCountdownTick } from "../services/audioService";
import { COUNTDOWN_DURATION } from "../data/constants";

export function useCountdown(onComplete) {
  const [count, setCount] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const cleanupRef = useRef(null);
  const lockRef = useRef(false); // guard sinkron, gak nunggu re-render

  const start = useCallback(() => {
    if (lockRef.current) return; // sudah ada countdown jalan, abaikan trigger kedua
    lockRef.current = true;
    setIsRunning(true);

    cleanupRef.current = createCountdownTicker(
      COUNTDOWN_DURATION,
      (remaining) => {
        setCount(remaining);
        if (remaining > 0) playCountdownTick();
      },
      () => {
        lockRef.current = false;
        setIsRunning(false);
        setCount(null);
        onComplete?.();
      }
    );
  }, [onComplete]);

  const cancel = useCallback(() => {
    cleanupRef.current?.();
    lockRef.current = false;
    setIsRunning(false);
    setCount(null);
  }, []);

  useEffect(() => {
    return () => cleanupRef.current?.();
  }, []);

  return { count, isRunning, start, cancel };
}
