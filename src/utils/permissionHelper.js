// src/utils/permissionHelper.js
// Menentukan pesan & strategi permission kamera berdasarkan device + browser

import { detectDevice } from "./deviceDetect";
import { detectBrowser } from "./browserDetect";
import { PERMISSION_MESSAGES } from "../data/uiConfig";

export function getPermissionContext() {
  const { platform, isMobile } = detectDevice();
  const browser = detectBrowser();

  let message = PERMISSION_MESSAGES.default;
  if (platform === "android") message = PERMISSION_MESSAGES.android;
  else if (platform === "ios") message = PERMISSION_MESSAGES.ios;
  else message = PERMISSION_MESSAGES.desktop;

  // iOS Safari & Chrome-iOS butuh trigger dari user gesture langsung (gak bisa auto-request)
  const requiresUserGesture = platform === "ios";

  return { platform, browser, isMobile, message, requiresUserGesture };
}

export async function checkCameraPermissionState() {
  if (!navigator.permissions || !navigator.permissions.query) {
    return "unsupported"; // Safari lama gak support Permissions API untuk camera
  }
  try {
    const status = await navigator.permissions.query({ name: "camera" });
    return status.state; // "granted" | "denied" | "prompt"
  } catch {
    return "unsupported";
  }
}
