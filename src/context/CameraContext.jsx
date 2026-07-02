// src/context/CameraContext.jsx
// Simpan state kamera: stream aktif, status permission, resolusi yang dipakai

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { startCamera, stopCamera as stopCameraService } from "../services/cameraService";
import { requestCameraPermission } from "../services/permissionService";

const CameraContext = createContext(null);

export function CameraProvider({ children }) {
  const [stream, setStream] = useState(null);
  const [permissionState, setPermissionState] = useState("idle"); // idle | pending | granted | denied
  const [resolutionUsed, setResolutionUsed] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  const initCamera = useCallback(async () => {
    setPermissionState("pending");
    setError(null);

    const result = await requestCameraPermission();

    if (result.granted) {
      setStream(result.stream);
      setResolutionUsed(result.resolutionUsed);
      setPermissionState("granted");
    } else {
      setPermissionState("denied");
      setError(result.reason);
    }

    return result;
  }, []);

  const stopCamera = useCallback(() => {
  console.log("STOP CAMERA CALLED");
  console.trace();

  stopCameraService();
  setStream(null);
  setPermissionState("idle");
}, []);

  const restartCamera = useCallback(async () => {
    stopCamera();
    return initCamera();
  }, [initCamera, stopCamera]);

  const value = {
    stream,
    permissionState,
    resolutionUsed,
    error,
    videoRef,
    initCamera,
    stopCamera,
    restartCamera,
  };

  return <CameraContext.Provider value={value}>{children}</CameraContext.Provider>;
}

export function useCameraContext() {
  const ctx = useContext(CameraContext);
  if (!ctx) throw new Error("useCameraContext harus dipakai di dalam <CameraProvider>");
  return ctx;
}
