// src/hooks/useCanvas.js
// Hook untuk compositing strip final (foto + template + tanggal + brand) jadi canvas siap export

import { useState, useCallback } from "react";
import { renderFinalStrip, canvasToDataUrl } from "../services/canvasService";

export function useCanvas() {
  const [canvas, setCanvas] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isRendering, setIsRendering] = useState(false);
  const [renderError, setRenderError] = useState(null);

  const render = useCallback(async ({ gridId, themeId, photoDataUrls }) => {
    setIsRendering(true);
    setRenderError(null);

    try {
      const resultCanvas = await renderFinalStrip({ gridId, themeId, photoDataUrls });
      setCanvas(resultCanvas);
      setPreviewUrl(canvasToDataUrl(resultCanvas));
      return resultCanvas;
    } catch (err) {
      setRenderError(err.message || "Gagal membuat strip foto");
      throw err;
    } finally {
      setIsRendering(false);
    }
  }, []);

  const reset = useCallback(() => {
    setCanvas(null);
    setPreviewUrl(null);
    setRenderError(null);
  }, []);

  return { canvas, previewUrl, isRendering, renderError, render, reset };
}
