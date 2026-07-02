// src/data/uiConfig.js

// ============================
// ICON PATHS
// ============================
export const ICONS = {
  download: "/icons/download.svg",
  camera: "/icons/camera.svg",
  retake: "/icons/retake.svg",
  next: "/icons/next.svg",
  back: "/icons/back.svg",
  logo: "/icons/logo.svg",
};

// ============================
// DECORATION PATHS
// ============================
export const DECORATIONS = {
  dotPink: "/images/decorations/dot-pink.svg",
  dotBlue: "/images/decorations/dot-blue.svg",
  sparklePink: "/images/decorations/sparkle-pink.svg",
  sparkleBlue: "/images/decorations/sparkle-blue.svg",
  circlePink: "/images/decorations/circle-pink.svg",
  circleBlue: "/images/decorations/circle-blue.svg",
  linePink: "/images/decorations/line-pink.svg",
  lineBlue: "/images/decorations/line-blue.svg",
  blobPink: "/images/decorations/blob-pink.svg",
  blobBlue: "/images/decorations/blob-blue.svg",
  cornerTopLeft: "/images/decorations/corner-top-left.svg",
  cornerTopRight: "/images/decorations/corner-top-right.svg",
  cornerBottomLeft: "/images/decorations/corner-bottom-left.svg",
  cornerBottomRight: "/images/decorations/corner-bottom-right.svg",
};

// ============================
// UI ELEMENT PATHS
// ============================
export const UI_ELEMENTS = {
  cameraPlaceholder: "/images/ui/camera-placeholder.svg",
  permissionCamera: "/images/ui/permission-camera.svg",
  printSlot: "/images/ui/print-slot.svg",
  stripShadow: "/images/ui/strip-shadow.svg",
  flashOverlay: "/images/ui/flash-overlay.svg",
  countdownCircle: "/images/ui/countdown-circle.svg",
  progressBar: "/images/ui/progress-bar.svg",
  swipeIndicator: "/images/ui/swipe-indicator.svg",
  loadingRing: "/images/ui/loading-ring.svg",
  successCheck: "/images/ui/success-check.svg",
  photoPlaceholder: "/images/ui/photo-placeholder.svg",
  grid1x4Preview: "/images/ui/grid-1x4-preview.svg",
  grid2x2Preview: "/images/ui/grid-2x2-preview.svg",
  templatePlaceholder: "/images/ui/template-placeholder.svg",
  emptyState: "/images/ui/empty-state.svg",
};

// ============================
// SOUND PATHS (referensi saja, injeksi file oleh user)
// ============================
export const SOUNDS = {
  shutter: "/sounds/shutter.mp3",
  countdown: "/sounds/countdown3.mp3",
};

// ============================
// APP STEPS / FLOW
// ============================
export const APP_STEPS = {
  HOME: "home",
  SELECT_GRID: "select-grid",
  SELECT_THEME: "select-theme",
  CAMERA: "camera",
  PREVIEW: "preview",
  RESULT: "result",
};

export const APP_STEP_ORDER = [
  APP_STEPS.HOME,
  APP_STEPS.SELECT_GRID,
  APP_STEPS.SELECT_THEME,
  APP_STEPS.CAMERA,
  APP_STEPS.PREVIEW,
  APP_STEPS.RESULT,
];

// ============================
// PERMISSION MESSAGES (per platform)
// ============================
export const PERMISSION_MESSAGES = {
  default: "Hi'num butuh akses kamera untuk mengambil foto kamu.",
  android: "Izinkan akses kamera di Chrome Android untuk mulai photobooth.",
  ios: "Izinkan akses kamera di Safari untuk mulai photobooth.",
  desktop: "Izinkan akses kamera di browser untuk mulai photobooth.",
};
