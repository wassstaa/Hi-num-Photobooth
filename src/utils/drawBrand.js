// src/utils/drawBrand.js
// Gambar teks "Hi'num" di bawah tanggal — Lora Bold, pink, dengan outline hitam tipis

import { STRIP_BRAND_TEXT, STRIP_BRAND_COLOR, FONT_FAMILY_BRAND, FONT_WEIGHT_BRAND_BOLD } from "../data/constants";

export function drawBrand(ctx, { x, y, fontSize = 24, color = STRIP_BRAND_COLOR, outlineColor = "#000000", outlineWidth = 1.1 }) {
  ctx.save();
  ctx.font = `${FONT_WEIGHT_BRAND_BOLD} ${fontSize}px ${FONT_FAMILY_BRAND}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  ctx.lineWidth = outlineWidth;
  ctx.strokeStyle = outlineColor;
  ctx.strokeText(STRIP_BRAND_TEXT, x, y);

  ctx.fillStyle = color;
  ctx.fillText(STRIP_BRAND_TEXT, x, y);

  ctx.restore();
}
