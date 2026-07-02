// Step pilih grid strip (1x4 / 2x2).

import Header from "../components/Header/Header";
import GridSelector from "../components/GridSelector/GridSelector";
import { useAppContext } from "../context/AppContext";
import { useGridContext } from "../context/GridContext";

export default function SelectGrid() {
  const { goNext } = useAppContext();
  const { gridId, selectGrid } = useGridContext();

  return (
    <div className="page">
      <Header />
      <GridSelector selectedGridId={gridId} onSelectGrid={selectGrid} onConfirm={goNext} />
    </div>
  );
}
