// src/data/constants.js

// ============================
// BRAND
// ============================
export const APP_NAME = "Hi'num";
export const APP_SLOGAN = "Capture Beautiful Moments";

// ============================
// TYPOGRAPHY
// ============================
export const FONT_FAMILY = "'Manrope', sans-serif";
export const FONT_WEIGHT_BOLD = 700;

// ============================
// COLORS
// ============================
export const COLOR_BASE = "#FFFAFA";
export const COLOR_ACCENT_PINK = "#F5CDD8";
export const COLOR_ACCENT_BLUE = "#C9DCEB";
export const COLOR_HEADER_BORDER = "rgba(0, 0, 0, 0.1)"; // hitam tipis, opacity 10%
export const COLOR_TEXT_PRIMARY = "#1A1A1A";
export const COLOR_TEXT_SECONDARY = "#6B6B6B";

// ============================
// CAPTURE SETTINGS
// ============================
export const COUNTDOWN_DURATION = 3; // detik
export const TOTAL_SHOTS = 4;
export const FLASH_DURATION_MS = 250;
export const SHUTTER_SOUND_VOLUME = 0.35; // 0 - 1, gak terlalu keras

// ============================
// RESOLUTION SETTINGS
// ============================
export const RESOLUTION_TARGETS = {
  UHD_4K: { width: 3840, height: 2160 },
  QHD_2K: { width: 2560, height: 1440 },
  FULL_HD: { width: 1920, height: 1080 }, // fallback aman
};

// ============================
// DATE FORMAT
// ============================
export const DATE_FORMAT_PATTERN = "dd.mm.yyyy";

// ============================
// STRIP BRAND TEXT (di bawah tanggal)
// ============================
export const STRIP_BRAND_TEXT = "Hi'num";
export const STRIP_BRAND_COLOR = COLOR_ACCENT_PINK;
export const STRIP_DATE_COLOR = "#1A1A1A";

// ============================
// ANIMATION TIMING (referensi umum, detail di animationService.js)
// ============================
export const TRANSITION_DURATION_MS = 350; // transisi halus antar step
export const PRINT_OUT_DURATION_MS = 1400; // durasi animasi strip keluar dari print-slot

// ============================
// BREAKPOINTS
// ============================
export const BREAKPOINT_MOBILE = 480;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_DESKTOP = 1024;
