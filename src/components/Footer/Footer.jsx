// Footer minimalis — credit kecil, gak ramai, sesuai tone elegant keseluruhan web.

import "./Footer.css";
import { APP_NAME } from "../../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-text">
        {APP_NAME} &copy; {year}
      </p>
    </footer>
  );
}
