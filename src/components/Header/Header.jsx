// Header aplikasi — base putih #FFFAFA, garis hitam tipis pembatas,
// nama brand "Hi'num" kecil di pojok, pink, Manrope Bold (sesuai instruksi awal).

import "./Header.css";
import { ICONS } from "../../data/uiConfig";
import { APP_NAME } from "../../data/constants";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <img src={ICONS.logo} alt={APP_NAME} className="header-logo" />
      </div>
    </header>
  );
}
