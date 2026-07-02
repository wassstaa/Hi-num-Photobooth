// src/utils/drawBrand.js
// Gambar teks "Hi'num" di bawah tanggal — pink, lebih kecil, dengan outline hitam tipis
// (menyesuaikan style yang sudah diterapkan di semua SVG template)

import { STRIP_BRAND_TEXT, STRIP_BRAND_COLOR, FONT_FAMILY, FONT_WEIGHT_BOLD } from "../data/constants";

export function drawBrand(ctx, { x, y, fontSize = 24, color = STRIP_BRAND_COLOR, outlineColor = "#000000", outlineWidth = 1.1 }) {
  ctx.save();
  ctx.font = `${FONT_WEIGHT_BOLD} ${fontSize}px ${FONT_FAMILY}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  // Outline dulu (stroke), baru fill di atasnya — biar tegas kayak di template SVG
  ctx.lineWidth = outlineWidth;
  ctx.strokeStyle = outlineColor;
  ctx.strokeText(STRIP_BRAND_TEXT, x, y);

  ctx.fillStyle = color;
  ctx.fillText(STRIP_BRAND_TEXT, x, y);

  ctx.restore();
}
