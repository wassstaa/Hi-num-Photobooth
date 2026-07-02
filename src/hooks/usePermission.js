// src/hooks/usePermission.js
// Hook untuk cek & handle permission kamera sesuai device/browser (Android, iOS, Safari, Chrome, dll)

import { useState, useEffect, useCallback } from "react";
import { getPermissionContext, checkCameraPermissionState } from "../utils/permissionHelper";

export function usePermission() {
  const [context, setContext] = useState(null);
  const [status, setStatus] = useState("checking"); // checking | granted | denied | prompt | unsupported

  useEffect(() => {
    const ctx = getPermissionContext();
    setContext(ctx);

    checkCameraPermissionState().then((state) => {
      setStatus(state);
    });
  }, []);

  const refreshStatus = useCallback(async () => {
    const state = await checkCameraPermissionState();
    setStatus(state);
    return state;
  }, []);

  return {
    context, // { platform, browser, isMobile, message, requiresUserGesture }
    status,
    refreshStatus,
  };
}
