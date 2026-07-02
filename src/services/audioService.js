// src/services/audioService.js
// Sound shutter ala Fujifilm — volume gak keras, tetap aman kalau browser di-mute
// (browser mute/tab-mute otomatis membisukan elemen <audio>, jadi ini sudah "safe by default")

import { SOUNDS } from "../data/uiConfig";
import { SHUTTER_SOUND_VOLUME as VOLUME_FALLBACK } from "../data/constants";

let shutterAudio = null;
let countdownAudio = null;

function getShutterAudio() {
  if (!shutterAudio) {
    shutterAudio = new Audio(SOUNDS.shutter);
    shutterAudio.volume = VOLUME_FALLBACK ?? 0.35;
    shutterAudio.preload = "auto";
  }
  return shutterAudio;
}

function getCountdownAudio() {
  if (!countdownAudio) {
    countdownAudio = new Audio(SOUNDS.countdown);
    countdownAudio.volume = 0.3;
    countdownAudio.preload = "auto";
  }
  return countdownAudio;
}

export function playShutterSound() {
  try {
    const audio = getShutterAudio();
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Autoplay policy browser mungkin block sebelum ada user gesture — aman diabaikan
    });
  } catch {
    // no-op, suara gak wajib untuk fungsi utama app
  }
}

export function playCountdownTick() {
  try {
    const audio = getCountdownAudio();
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    // no-op
  }
}

export function preloadSounds() {
  getShutterAudio();
  getCountdownAudio();
}
