// src/utils/drawDate.js
// Gambar teks tanggal (dd.mm.yyyy) ke canvas — posisi & style ikut token dari constants.js

import { STRIP_DATE_COLOR, FONT_FAMILY, FONT_WEIGHT_BOLD } from "../data/constants";

export function drawDate(ctx, { x, y, text, fontSize = 34, color = STRIP_DATE_COLOR }) {
  ctx.save();
  ctx.font = `${FONT_WEIGHT_BOLD} ${fontSize}px ${FONT_FAMILY}`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x, y);
  ctx.restore();
}
