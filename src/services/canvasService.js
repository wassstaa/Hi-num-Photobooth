// src/services/canvasService.js
// Orkestrasi tingkat tinggi untuk compositing strip akhir — dipanggil dari PreviewPage/StripPreview

import { createStrip } from "../utils/createStrip";
import { getThemeById } from "../data/themeOptions";

export async function renderFinalStrip({ gridId, themeId, photoDataUrls }) {
  const theme = getThemeById(themeId);
  if (!theme) throw new Error(`Tema tidak ditemukan: ${themeId}`);

  const dateTextColor = themeId === "pink-polkadot" ? "#FFFAFA" : "#1A1A1A";

  const canvas = await createStrip({
    gridId,
    themeBackgroundSvgPath: theme.templatePath[gridId],
    photoDataUrls,
    dateTextColor,
  });

  return canvas;
}

export function canvasToDataUrl(canvas) {
  return canvas.toDataURL("image/png", 1.0);
}
