// src/utils/downloadImage.js
// Export canvas ke file gambar resolusi tinggi (bukan screenshot) untuk didownload user

export function downloadCanvasAsImage(canvas, filename = "hinum-photobooth.png") {
  canvas.toBlob(
    (blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    "image/png",
    1.0 // kualitas maksimal
  );
}

export function generateFilename(prefix = "hinum") {
  const now = new Date();
  const stamp = now.toISOString().replace(/[:.]/g, "-");
  return `${prefix}-${stamp}.png`;
}
