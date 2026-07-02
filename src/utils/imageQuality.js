// src/utils/imageQuality.js
// Cari resolusi kamera terbaik yang didukung device (coba 4K -> 2K -> Full HD)

import { RESOLUTION_TARGETS } from "../data/constants";

const RESOLUTION_PRIORITY = ["UHD_4K", "QHD_2K", "FULL_HD"];

export async function getBestSupportedConstraints(facingMode = "user") {
  for (const key of RESOLUTION_PRIORITY) {
    const target = RESOLUTION_TARGETS[key];
    const constraints = {
      video: {
        facingMode,
        width: { ideal: target.width },
        height: { ideal: target.height },
      },
      audio: false,
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      // Berhasil dapat stream di resolusi ini — stop dulu, biar caller yang pakai ulang constraints-nya
      stream.getTracks().forEach((track) => track.stop());
      return { constraints, resolutionUsed: key };
    } catch {
      continue; // device gak support, coba resolusi di bawahnya
    }
  }

  // Fallback paling aman — biarkan browser pilih sendiri
  return {
    constraints: { video: { facingMode }, audio: false },
    resolutionUsed: "AUTO_FALLBACK",
  };
}
