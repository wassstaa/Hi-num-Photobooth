// src/utils/createStrip.js
// Compositing utama: gabungkan template SVG (background + slot kosong) + 4 foto + tanggal + brand
// jadi satu canvas resolusi tinggi, siap didownload

import { loadImage, loadImages } from "./imageLoader";
import { drawFrame } from "./drawFrame";
import { drawDate } from "./drawDate";
import { drawBrand } from "./drawBrand";
import { formatDate } from "./formatDate";
import { getGridOptionById } from "../data/gridOptions";

// Posisi slot foto & teks HARUS sinkron dengan koordinat di file SVG template
// (data-photo-slot="1..4", data-role="date", data-role="brand")
const SLOT_LAYOUTS = {
  "1x4": {
    slots: [
      { x: 60, y: 70, width: 1080, height: 800 },
      { x: 60, y: 900, width: 1080, height: 800 },
      { x: 60, y: 1730, width: 1080, height: 800 },
      { x: 60, y: 2560, width: 1080, height: 800 },
    ],
    dateY: 3480,
    brandY: 3534,
    dateFontSize: 36,
    brandFontSize: 26,
  },
  "2x2": {
    slots: [
      { x: 55, y: 70, width: 1080, height: 800 },
      { x: 1265, y: 70, width: 1080, height: 800 },
      { x: 55, y: 940, width: 1080, height: 800 },
      { x: 1265, y: 940, width: 1080, height: 800 },
    ],
    dateY: 1870,
    brandY: 1918,
    dateFontSize: 34,
    brandFontSize: 24,
  },
};

export async function createStrip({ gridId, themeBackgroundSvgPath, photoDataUrls, dateTextColor }) {
  const gridOption = getGridOptionById(gridId);
  if (!gridOption) throw new Error(`Grid tidak ditemukan: ${gridId}`);

  const layout = SLOT_LAYOUTS[gridId];
  const { width, height } = gridOption.stripDimensions;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // 1. Gambar background template (base color + polkadot kalau ada) dari SVG
  const bgImage = await loadImage(themeBackgroundSvgPath);
  ctx.drawImage(bgImage, 0, 0, width, height);

  // 2. Gambar 4 foto ke tiap slot
  const photoImages = await loadImages(photoDataUrls);
  layout.slots.forEach((slot, i) => {
    if (photoImages[i]) drawFrame(ctx, photoImages[i], slot);
  });

  // 3. Gambar tanggal (otomatis sesuai waktu capture)
  drawDate(ctx, {
    x: width / 2,
    y: layout.dateY,
    text: formatDate(new Date()),
    fontSize: layout.dateFontSize,
    color: dateTextColor,
  });

  // 4. Gambar brand "Hi'num"
  drawBrand(ctx, {
    x: width / 2,
    y: layout.brandY,
    fontSize: layout.brandFontSize,
  });

  return canvas;
    }
