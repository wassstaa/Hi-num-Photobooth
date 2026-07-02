// src/hooks/useCamera.js
// Hook utama untuk kelola kamera: init, attach ke <video>, cleanup otomatis saat unmount

import { useEffect, useCallback } from "react";
import { useCameraContext } from "../context/CameraContext";

export function useCamera() {
  const {
    stream,
    permissionState,
    resolutionUsed,
    error,
    videoRef,
    initCamera,
    stopCamera,
    restartCamera,
  } = useCameraContext();

  // Attach stream ke elemen <video> begitu stream tersedia
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, videoRef]);

  // Cleanup: matikan kamera begitu komponen yang pakai hook ini unmount
  // (mencegah bug lama: stream nyala terus / konflik antar mode)
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const isReady = permissionState === "granted" && !!stream;
  const isPending = permissionState === "pending";
  const isDenied = permissionState === "denied";

  const requestCamera = useCallback(() => initCamera(), [initCamera]);

  return {
    videoRef,
    stream,
    isReady,
    isPending,
    isDenied,
    error,
    resolutionUsed,
    requestCamera,
    restartCamera,
    stopCamera,
  };
}
