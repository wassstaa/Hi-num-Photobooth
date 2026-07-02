// Hero section di halaman Home — slogan + tombol mulai, dengan aksen dekorasi minimalis
// baby pink & light blue di sekitarnya.

import "./Hero.css";
import { APP_NAME, APP_SLOGAN } from "../../data/constants";
import { DECORATIONS } from "../../data/uiConfig";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function Hero({ onStart }) {
  return (
    <section className="hero">
      <img src={DECORATIONS.blobPink} alt="" className="hero-decor hero-decor-top-left" aria-hidden="true" />
      <img src={DECORATIONS.blobBlue} alt="" className="hero-decor hero-decor-bottom-right" aria-hidden="true" />

      <img src={DECORATIONS.sparklePink} alt="" className="hero-sparkle hero-sparkle-1" aria-hidden="true" />
      <img src={DECORATIONS.sparkleBlue} alt="" className="hero-sparkle hero-sparkle-2" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title">{APP_NAME}</h1>
        <p className="hero-slogan">{APP_SLOGAN}</p>

        <PrimaryButton onClick={onStart} fullWidth>
          Mulai Photobooth
        </PrimaryButton>
      </div>
    </section>
  );
}
