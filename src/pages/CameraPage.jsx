// Step kamera — minta permission dulu (sesuai device/browser), lalu tampilkan CameraView
// untuk capture 4 foto berurutan. Kamera dimatikan eksplisit begitu 4 foto selesai,
// sebelum pindah ke step Preview.

import Header from "../components/Header/Header";
import CameraView from "../components/Camera/CameraView";
import Permission from "../components/Camera/Permission";
import { useAppContext } from "../context/AppContext";
import { useCameraContext } from "../context/CameraContext";

export default function CameraPage() {
  const { goNext } = useAppContext();
  const { permissionState, initCamera, stopCamera } = useCameraContext();

  const needsPermission = permissionState !== "granted";

  const handleAllPhotosCaptured = () => {
    stopCamera();
    goNext();
  };

  return (
    <div className="page">
      <Header />
      <Permission
        isOpen={needsPermission}
        isDenied={permissionState === "denied"}
        onAllow={initCamera}
      />
      {!needsPermission && <CameraView onAllPhotosCaptured={handleAllPhotosCaptured} />}
    </div>
  );
}
