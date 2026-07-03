// Hook countdown 3 detik sebelum capture.
// Sound countdown.mp3 sudah berisi 1 klip utuh (bib-bib-bib untuk 3-2-1),
// jadi diputar SEKALI saja saat countdown mulai — bukan diputar ulang tiap detik,
// karena itu yang bikin suaranya numpuk/kepotong sebelumnya.

import { useState, useCallback, useRef, useEffect } from "react";
import { createCountdownTicker } from "../utils/countdownHelper";
import { playCountdownTick } from "../services/audioService";
import { COUNTDOWN_DURATION } from "../data/constants";

export function useCountdown(onComplete) {
  const [count, setCount] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const cleanupRef = useRef(null);
  const lockRef = useRef(false);

  const start = useCallback(() => {
    if (lockRef.current) return;
    lockRef.current = true;
    setIsRunning(true);

    playCountdownTick(); // mainkan sekali, klip udah berisi seluruh bib 3-2-1

    cleanupRef.current = createCountdownTicker(
      COUNTDOWN_DURATION,
      (remaining) => {
        setCount(remaining); // cuma update angka, gak mainin suara lagi di sini
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
