// Footer — layer overlay tipis di ujung bawah layar, teks kecil, brand + copyright pink.

import "./Footer.css";
import { APP_NAME } from "../../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-text">
        <span className="brand-wordmark footer-brand">{APP_NAME}</span>{" "}
        <span className="footer-copyright">&copy; {year}</span>
      </p>
    </footer>
  );
}
