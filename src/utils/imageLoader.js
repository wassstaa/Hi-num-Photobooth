// src/utils/imageLoader.js
// Helper load image (SVG template / hasil foto) jadi elemen <img> siap dipakai canvas

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(new Error(`Gagal load gambar: ${src}`));
    img.src = src;
  });
}

export async function loadImages(sources) {
  return Promise.all(sources.map((src) => loadImage(src)));
}

// Convert SVG file (dengan teks tanggal/brand yang mau di-replace) jadi Image via Blob URL
export async function loadSvgAsImage(svgString) {
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImage(url);
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}
