// src/utils/browserDetect.js
// Deteksi browser: Chrome, Safari, dll — dipakai untuk pesan permission yang sesuai

export function detectBrowser() {
  const ua = navigator.userAgent;

  const isChrome = /Chrome/.test(ua) && !/Edg|OPR|Brave/.test(ua);
  const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS/.test(ua);
  const isFirefox = /Firefox/.test(ua);
  const isSamsungInternet = /SamsungBrowser/.test(ua);
  const isCriOS = /CriOS/.test(ua); // Chrome on iOS (masih pakai WebKit)

  if (isSamsungInternet) return "samsung";
  if (isCriOS) return "chrome-ios";
  if (isChrome) return "chrome";
  if (isSafari) return "safari";
  if (isFirefox) return "firefox";
  return "unknown";
}
