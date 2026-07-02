// Panel aksi final — download hasil strip resolusi tinggi atau retake dari awal.

import "./DownloadPanel.css";
import { ICONS } from "../../data/uiConfig";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function DownloadPanel({ onDownload, onRetake, disabled }) {
  return (
    <div className="download-panel">
      <PrimaryButton icon={ICONS.download} onClick={onDownload} disabled={disabled} fullWidth>
        Download
      </PrimaryButton>
      <SecondaryButton icon={ICONS.retake} onClick={onRetake} fullWidth>
        Retake
      </SecondaryButton>
    </div>
  );
}
