// src/utils/countdownHelper.js
// Helper murni untuk logic countdown 3 detik — dipanggil dari hooks/useCountdown.js

export function createCountdownTicker(duration, onTick, onComplete) {
  let remaining = duration;
  onTick(remaining);

  const interval = setInterval(() => {
    remaining -= 1;
    if (remaining > 0) {
      onTick(remaining);
    } else {
      clearInterval(interval);
      onTick(0);
      onComplete();
    }
  }, 1000);

  return () => clearInterval(interval); // cleanup function
}
