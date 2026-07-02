// Halaman konfirmasi akhir — strip berhasil dibuat & diunduh, user bisa foto lagi
// (reset total dari awal) atau kembali ke beranda.

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { UI_ELEMENTS } from "../data/uiConfig";
import { useAppContext } from "../context/AppContext";
import { useGridContext } from "../context/GridContext";
import { useThemeContext } from "../context/ThemeContext";
import { usePhotoContext } from "../context/PhotoContext";
import { APP_STEPS } from "../data/uiConfig";

export default function ResultPage() {
  const { goToStep } = useAppContext();
  const { resetGrid } = useGridContext();
  const { resetTheme } = useThemeContext();
  const { resetPhotos } = usePhotoContext();

  const resetAll = () => {
    resetGrid();
    resetTheme();
    resetPhotos();
  };

  const handleTakeAgain = () => {
    resetAll();
    goToStep(APP_STEPS.SELECT_GRID);
  };

  const handleBackHome = () => {
    resetAll();
    goToStep(APP_STEPS.HOME);
  };

  return (
    <div className="page page-center">
      <Header />
      <img src={UI_ELEMENTS.successCheck} alt="" className="pop-in" aria-hidden="true" />
      <h2>Strip Foto Berhasil Dibuat!</h2>
      <p className="text-secondary">Hasil sudah tersimpan di perangkat kamu.</p>

      <div className="stack" style={{ width: "100%", maxWidth: 320 }}>
        <PrimaryButton onClick={handleTakeAgain} fullWidth>
          Foto Lagi
        </PrimaryButton>
        <PrimaryButton variant="ghost" onClick={handleBackHome} fullWidth>
          Kembali ke Beranda
        </PrimaryButton>
      </div>

      <Footer />
    </div>
  );
    }
