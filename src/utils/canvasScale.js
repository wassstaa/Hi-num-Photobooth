// src/utils/canvasScale.js
// Hitung skala render canvas berdasarkan devicePixelRatio & target resolusi tinggi

export function getOptimalPixelRatio(maxRatio = 3) {
  const dpr = window.devicePixelRatio || 1;
  return Math.min(dpr, maxRatio);
}

export function scaleCanvasForHighRes(canvas, ctx, cssWidth, cssHeight) {
  const ratio = getOptimalPixelRatio();
  canvas.width = cssWidth * ratio;
  canvas.height = cssHeight * ratio;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return ratio;
}

// Untuk canvas hasil akhir (strip export), kita render di resolusi native template
// (misal 1200x4300) tanpa CSS scaling — resolusi tinggi didapat dari ukuran asli SVG template.
export function getExportCanvasSize(stripDimensions) {
  return {
    width: stripDimensions.width,
    height: stripDimensions.height,
  };
}
