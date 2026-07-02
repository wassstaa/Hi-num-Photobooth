// src/services/exportService.js
// Finalisasi export: dari canvas -> file download, dengan penamaan otomatis

import { downloadCanvasAsImage, generateFilename } from "../utils/downloadImage";

export function exportStripAsImage(canvas) {
  const filename = generateFilename("hinum-photobooth");
  downloadCanvasAsImage(canvas, filename);
  return filename;
}
