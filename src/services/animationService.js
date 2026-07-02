// src/services/animationService.js
// Kontrol animasi tingkat tinggi: flash capture & print-out strip
// Detail timing/easing sudah didefinisikan di styles/animation.css, ini cuma trigger-nya

import { triggerAnimation, waitForAnimationEnd } from "../utils/animationHelper";
import { PRINT_OUT_DURATION_MS, FLASH_DURATION_MS } from "../data/constants";

export async function playFlashEffect(flashElementRef) {
  const el = flashElementRef?.current;
  if (!el) return;
  await triggerAnimation(el, "flash-active", FLASH_DURATION_MS);
}

export async function playPrintOutAnimation(stripElementRef, shadowElementRef) {
  const stripEl = stripElementRef?.current;
  const shadowEl = shadowElementRef?.current;

  if (shadowEl) shadowEl.classList.add("strip-shadow-animate");
  if (stripEl) {
    stripEl.classList.add("print-out-animate");
    await waitForAnimationEnd(stripEl);
  } else {
    await new Promise((resolve) => setTimeout(resolve, PRINT_OUT_DURATION_MS));
  }
}
