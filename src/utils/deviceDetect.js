// src/utils/deviceDetect.js
// Deteksi platform: Android, iOS, atau Desktop — dipakai bareng browserDetect untuk permission flow

export function detectDevice() {
  const ua = navigator.userAgent;

  const isAndroid = /Android/.test(ua);
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const isMac = /Macintosh/.test(ua) && !isIOS;
  const isWindows = /Windows/.test(ua);

  let platform = "desktop";
  if (isAndroid) platform = "android";
  else if (isIOS) platform = "ios";
  else if (isMac) platform = "mac";
  else if (isWindows) platform = "windows";

  const isMobile = isAndroid || isIOS;
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return { platform, isMobile, isTouchDevice };
}
