// Step kamera — minta permission dulu (sesuai device/browser), lalu tampilkan CameraView
// untuk capture 4 foto berurutan.

import Header from "../components/Header/Header";
import CameraView from "../components/Camera/CameraView";
import Permission from "../components/Camera/Permission";
import { useAppContext } from "../context/AppContext";
import { useCameraContext } from "../context/CameraContext";

export default function CameraPage() {
  const { goNext } = useAppContext();
  const { permissionState, initCamera } = useCameraContext();

  const needsPermission = permissionState !== "granted";

  return (
    <div className="page">
      <Header />
      <Permission
        isOpen={needsPermission}
        isDenied={permissionState === "denied"}
        onAllow={initCamera}
      />
      {!needsPermission && <CameraView onAllPhotosCaptured={goNext} />}
    </div>
  );
}
