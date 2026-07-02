// src/services/captureService.js
// Ambil 1 frame foto dari <video> stream kamera aktif jadi data URL resolusi tinggi

export function capturePhotoFromVideo(videoElement) {
  const canvas = document.createElement("canvas");
  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const ctx = canvas.getContext("2d");

  // Mirror horizontal biar hasil foto sesuai apa yang user lihat di preview (selfie mode)
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/png", 1.0);
}

export function capturePhotoSequenceSlot(videoElement, slotIndex, existingPhotos = []) {
  const dataUrl = capturePhotoFromVideo(videoElement);
  const updated = [...existingPhotos];
  updated[slotIndex] = dataUrl;
  return updated;
}
