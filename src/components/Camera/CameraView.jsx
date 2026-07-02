// Live preview kamera — orkestrator utama step Camera: nampilin video, tombol shutter,
// countdown, flash, progress, dan capture 4 foto secara berurutan.

import { useState, useCallback } from "react";
import "./Camera.css";
import { useCamera } from "../../hooks/useCamera";
import { useCountdown } from "../../hooks/useCountdown";
import { usePhotoContext } from "../../context/PhotoContext";
import { capturePhotoFromVideo } from "../../services/captureService";
import { playShutterSound } from "../../services/audioService";
import { ICONS } from "../../data/uiConfig";
import { TOTAL_SHOTS } from "../../data/constants";
import Countdown from "./Countdown";
import Flash from "./Flash";
import Progress from "./Progress";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function CameraView({ onAllPhotosCaptured }) {
  const { videoRef, isReady } = useCamera();
  const { photos, addPhoto, progressLabel } = usePhotoContext();
  const [isFlashing, setIsFlashing] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const captureOneShot = useCallback(() => {
    const dataUrl = capturePhotoFromVideo(videoRef.current);
    playShutterSound();
    setIsFlashing(true);
    addPhoto(dataUrl);
    setTimeout(() => setIsFlashing(false), 250);
  }, [videoRef, addPhoto]);

  const { count, isRunning, start } = useCountdown(() => {
    captureOneShot();
    setIsCapturing(false);
  });

  const handleShutterPress = useCallback(() => {
    if (isRunning || isCapturing || photos.length >= TOTAL_SHOTS) return;
    setIsCapturing(true);
    start();
  }, [isRunning, isCapturing, photos.length, start]);

  const isComplete = photos.length >= TOTAL_SHOTS;

  return (
    <section className="camera-view">
      <Flash isActive={isFlashing} />

      <div className="camera-frame">
        <video ref={videoRef} autoPlay playsInline muted className="camera-video" />
        {isRunning && <Countdown count={count} />}
      </div>

      <Progress current={photos.length} total={TOTAL_SHOTS} label={progressLabel} />

      <div className="camera-controls">
        <PrimaryButton
          iconOnly
          shutter
          icon={ICONS.camera}
          label="Ambil foto"
          onClick={handleShutterPress}
          disabled={!isReady || isRunning || isComplete}
        />
      </div>

      {isComplete && (
        <PrimaryButton onClick={onAllPhotosCaptured} fullWidth>
          Lihat Hasil
        </PrimaryButton>
      )}
    </section>
  );
          }
