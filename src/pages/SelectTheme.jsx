// Step pilih tema warna strip — daftar tema mengikuti grid yang sudah dipilih di step sebelumnya.

import Header from "../components/Header/Header";
import ThemeSelector from "../components/ThemeSelector/ThemeSelector";
import { useAppContext } from "../context/AppContext";
import { useGridContext } from "../context/GridContext";
import { useThemeContext } from "../context/ThemeContext";

export default function SelectTheme() {
  const { goNext } = useAppContext();
  const { gridId } = useGridContext();
  const { themeId, selectTheme } = useThemeContext();

  return (
    <div className="page">
      <Header />
      <ThemeSelector
        gridId={gridId}
        selectedThemeId={themeId}
        onSelectTheme={selectTheme}
        onConfirm={goNext}
      />
    </div>
  );
}
