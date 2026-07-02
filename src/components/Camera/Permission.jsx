// Prompt permission kamera — pesan disesuaikan device/browser user (Android, iOS, Chrome, Safari, dst).

import "./Camera.css";
import { usePermission } from "../../hooks/usePermission";
import { UI_ELEMENTS } from "../../data/uiConfig";
import PrimaryButton from "../Buttons/PrimaryButton";
import Modal from "../Modal/Modal";

export default function Permission({ isOpen, onAllow, isDenied }) {
  const { context } = usePermission();

  return (
    <Modal isOpen={isOpen} dismissible={false} title="Izinkan Akses Kamera">
      <img src={UI_ELEMENTS.permissionCamera} alt="" className="permission-illustration" aria-hidden="true" />
      <p className="permission-message">{context?.message}</p>
      {isDenied && (
        <p className="permission-denied-note">
          Akses kamera ditolak. Aktifkan izin kamera lewat pengaturan browser lalu coba lagi.
        </p>
      )}
      <PrimaryButton onClick={onAllow} fullWidth>
        Izinkan Kamera
      </PrimaryButton>
    </Modal>
  );
}
