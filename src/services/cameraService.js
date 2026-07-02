// src/services/cameraService.js
// Kelola stream kamera: request, stop, switch resolusi — dipakai oleh hooks/useCamera.js

import { getBestSupportedConstraints } from "../utils/imageQuality";

let activeStream = null;

export async function startCamera(facingMode = "user") {
  stopCamera();

  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode,
    },
    audio: false,
  });

  activeStream = stream;

  return {
    stream,
    resolutionUsed: "AUTO",
  };
}

export function stopCamera() {
  if (activeStream) {
    activeStream.getTracks().forEach((track) => track.stop());
    activeStream = null;
  }
}

export function getActiveStream() {
  return activeStream;
}

export function isCameraSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

export async function switchCameraFacing(currentFacing) {
  const nextFacing = currentFacing === "user" ? "environment" : "user";
  return startCamera(nextFacing);
}
