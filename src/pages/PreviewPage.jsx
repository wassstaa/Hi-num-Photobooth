// Step preview — compositing strip final (foto + tema + tanggal + brand), animasi print-out,
// aksi download/retake (lewat StripPreview), plus tombol "Selesai" untuk lanjut ke ResultPage.

import Header from "../components/Header/Header";
import StripPreview from "../components/StripPreview/StripPreview";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { useAppContext } from "../context/AppContext";
import { useGridContext } from "../context/GridContext";
import { useThemeContext } from "../context/ThemeContext";

export default function PreviewPage() {
  const { goNext, resetToGridSelection } = useAppContext();
  const { gridId, resetGrid } = useGridContext();
  const { themeId, resetTheme } = useThemeContext();

  const handleRetake = () => {
    resetGrid();
    resetTheme();
    resetToGridSelection();
  };

  return (
    <div className="page">
      <Header />
      <StripPreview gridId={gridId} themeId={themeId} onRetake={handleRetake} />
      <PrimaryButton onClick={goNext} fullWidth>
        Selesai
      </PrimaryButton>
    </div>
  );
}
