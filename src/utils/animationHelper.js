// src/utils/animationHelper.js
// Helper kecil untuk trigger class animasi (flash, print-out, dll) secara terkontrol dari JS

export function triggerAnimation(element, className, durationMs) {
  return new Promise((resolve) => {
    if (!element) return resolve();
    element.classList.remove(className);
    // force reflow biar animasi bisa di-retrigger walau class-nya sama
    void element.offsetWidth;
    element.classList.add(className);

    const timeout = setTimeout(() => {
      resolve();
    }, durationMs);

    return () => clearTimeout(timeout);
  });
}

export function waitForAnimationEnd(element) {
  return new Promise((resolve) => {
    const handler = () => {
      element.removeEventListener("animationend", handler);
      resolve();
    };
    element.addEventListener("animationend", handler);
  });
}
