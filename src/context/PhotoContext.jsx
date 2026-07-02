// src/context/PhotoContext.jsx
// Simpan hasil capture 4 foto + progress (1/4, 2/4, dst) + hasil strip final

import { createContext, useContext, useState, useCallback } from "react";
import { TOTAL_SHOTS } from "../data/constants";

const PhotoContext = createContext(null);

export function PhotoProvider({ children }) {
  const [photos, setPhotos] = useState([]); // array of dataURL, max 4
  const [finalStripCanvas, setFinalStripCanvas] = useState(null);

  const addPhoto = useCallback((dataUrl) => {
    setPhotos((prev) => [...prev, dataUrl]);
  }, []);

  const resetPhotos = useCallback(() => {
    setPhotos([]);
    setFinalStripCanvas(null);
  }, []);

  const setFinalStrip = useCallback((canvas) => {
    setFinalStripCanvas(canvas);
  }, []);

  const progressLabel = `${photos.length}/${TOTAL_SHOTS}`;
  const isComplete = photos.length >= TOTAL_SHOTS;

  const value = {
    photos,
    progressLabel,
    isComplete,
    finalStripCanvas,
    addPhoto,
    resetPhotos,
    setFinalStrip,
  };

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function usePhotoContext() {
  const ctx = useContext(PhotoContext);
  if (!ctx) throw new Error("usePhotoContext harus dipakai di dalam <PhotoProvider>");
  return ctx;
}
