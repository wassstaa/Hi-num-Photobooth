// Header aplikasi — base putih, garis hitam tipis, nama brand "Hi'num" bisa dipencet
// untuk kembali ke halaman awal.

import "./Header.css";
import { ICONS } from "../../data/uiConfig";
import { APP_NAME } from "../../data/constants";
import { useAppContext } from "../../context/AppContext";
import { APP_STEPS } from "../../data/uiConfig";

export default function Header() {
  const { goToStep } = useAppContext();

  return (
    <header className="app-header">
      <div className="header-inner">
        <button
          type="button"
          className="header-logo-btn"
          onClick={() => goToStep(APP_STEPS.HOME)}
          aria-label={`Kembali ke halaman awal ${APP_NAME}`}
        >
          <img src={ICONS.logo} alt={APP_NAME} className="header-logo" />
        </button>
      </div>
    </header>
  );
}
