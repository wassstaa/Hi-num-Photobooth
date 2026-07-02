// Root komponen — nesting semua Provider, lalu render halaman sesuai step aktif dari AppContext.

import { AppProvider, useAppContext } from "./context/AppContext";
import { GridProvider } from "./context/GridContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CameraProvider } from "./context/CameraContext";
import { PhotoProvider } from "./context/PhotoContext";
import { APP_STEPS } from "./data/uiConfig";

import Home from "./pages/Home";
import SelectGrid from "./pages/SelectGrid";
import SelectTheme from "./pages/SelectTheme";
import CameraPage from "./pages/CameraPage";
import PreviewPage from "./pages/PreviewPage";
import ResultPage from "./pages/ResultPage";

function StepRouter() {
  const { step } = useAppContext();

  switch (step) {
    case APP_STEPS.HOME:
      return <Home />;
    case APP_STEPS.SELECT_GRID:
      return <SelectGrid />;
    case APP_STEPS.SELECT_THEME:
      return <SelectTheme />;
    case APP_STEPS.CAMERA:
      return <CameraPage />;
    case APP_STEPS.PREVIEW:
      return <PreviewPage />;
    case APP_STEPS.RESULT:
      return <ResultPage />;
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <AppProvider>
      <GridProvider>
        <ThemeProvider>
          <CameraProvider>
            <PhotoProvider>
              <div className="app-shell">
                <StepRouter />
              </div>
            </PhotoProvider>
          </CameraProvider>
        </ThemeProvider>
      </GridProvider>
    </AppProvider>
  );
}
