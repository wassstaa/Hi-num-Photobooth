// src/services/permissionService.js
// Wrapper permission kamera — gabungin permissionHelper.js dengan aksi nyata (request stream)

import { getPermissionContext, checkCameraPermissionState } from "../utils/permissionHelper";
import { startCamera } from "./cameraService";

export async function requestCameraPermission() {
  const context = getPermissionContext();

  try {
    const { stream, resolutionUsed } = await startCamera("user");
    return { granted: true, stream, resolutionUsed, context };
  } catch (error) {
  console.error("===== CAMERA ERROR =====");
  console.error("Name:", error.name);
  console.error("Message:", error.message);
  console.error(error);

  const reason =
    error?.name === "NotAllowedError"
      ? "denied"
      : error?.name === "NotFoundError"
      ? "no-device"
      : "error";

  return { granted: false, reason, context, error };
}
}

export async function getPermissionStatus() {
  const state = await checkCameraPermissionState();
  const context = getPermissionContext();
  return { state, context };
}
