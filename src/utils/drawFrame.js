// src/utils/drawFrame.js
// Gambar 1 foto ke dalam slot tertentu di canvas, dengan "cover" crop (mirip object-fit: cover)

export function drawFrame(ctx, image, slot) {
  const { x, y, width, height, radius = 12 } = slot;

  ctx.save();

  // Clip rounded-rect area sesuai slot
  drawRoundedRectPath(ctx, x, y, width, height, radius);
  ctx.clip();

  // Hitung crop "cover" biar foto ngisi penuh slot tanpa distorsi
  const imgRatio = image.width / image.height;
  const slotRatio = width / height;

  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgRatio > slotRatio) {
    drawHeight = height;
    drawWidth = height * imgRatio;
    offsetX = x - (drawWidth - width) / 2;
    offsetY = y;
  } else {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = x;
    offsetY = y - (drawHeight - height) / 2;
  }

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  ctx.restore();
}

function drawRoundedRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
