// Hook utama untuk kelola kamera: init, attach ke <video>.
// CATATAN: kamera TIDAK di-stop otomatis saat komponen unmount, karena React StrictMode
// (development) sengaja mount-unmount-mount komponen sekali, yang bikin kamera mati sendiri
// kalau di-stop di sini. Stop kamera dipanggil eksplisit dari halaman yang butuh (CameraPage).

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
