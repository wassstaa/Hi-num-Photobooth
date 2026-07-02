// Preview hasil strip foto akhir — orkestrator: render canvas lewat useCanvas,
// tampilkan hasilnya (dibungkus animasi print-out), lalu sediakan aksi download/retake.

import { useEffect } from "react";
import "./StripPreview.css";
import { useCanvas } from "../../hooks/useCanvas";
import { usePrintAnimation } from "../../hooks/usePrintAnimation";
import { usePhotoContext } from "../../context/PhotoContext";
import { exportStripAsImage } from "../../services/exportService";
import { UI_ELEMENTS } from "../../data/uiConfig";
import StripCanvas from "./StripCanvas";
import PrimaryButton from "../Buttons/PrimaryButton";
import Loader from "../Loading/Loader";

export default function StripPreview({ gridId, themeId, onRetake }) {
  const { photos, setFinalStrip } = usePhotoContext();
  const { canvas, previewUrl, isRendering, renderError, render } = useCanvas();
  const { stripRef, shadowRef, playPrintOut } = usePrintAnimation();

  useEffect(() => {
    render({ gridId, themeId, photoDataUrls: photos }).then((resultCanvas) => {
      setFinalStrip(resultCanvas);
      playPrintOut();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = () => {
    if (canvas) exportStripAsImage(canvas);
  };

  return (
    <section className="strip-preview">
      <div className="print-slot-wrap">
        <img src={UI_ELEMENTS.printSlot} alt="" className="print-slot-img" aria-hidden="true" />
      </div>

      <div className="strip-preview-stage">
        {isRendering && <Loader label="Mencetak strip foto..." />}

        {!isRendering && previewUrl && (
          <>
            <img
              src={UI_ELEMENTS.stripShadow}
              alt=""
              className="strip-shadow-img"
              ref={shadowRef}
              aria-hidden="true"
            />
            <div className="strip-canvas-wrap" ref={stripRef}>
              <StripCanvas previewUrl={previewUrl} />
            </div>
          </>
        )}

        {renderError && <p className="strip-preview-error">{renderError}</p>}
      </div>

      <div className="strip-preview-actions">
        <PrimaryButton onClick={handleDownload} disabled={isRendering || !previewUrl} fullWidth>
          Download
        </PrimaryButton>
        <PrimaryButton variant="ghost" onClick={onRetake} fullWidth>
          Retake
        </PrimaryButton>
      </div>
    </section>
  );
}
