// Halaman awal — Header + Hero (nama brand, slogan, tombol mulai) + Footer.

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { useAppContext } from "../context/AppContext";
import { APP_STEPS } from "../data/uiConfig";

export default function Home() {
  const { goToStep } = useAppContext();

  const handleStart = () => {
    goToStep(APP_STEPS.SELECT_GRID);
  };

  return (
    <div className="page">
      <Header />
      <Hero onStart={handleStart} />
      <Footer />
    </div>
  );
}
