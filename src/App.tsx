import { Routes, Route, useLocation } from "react-router-dom";
// import BackgroundAnimation from "./Components/BackgroundAnimation";

import ToolPage from "./Components/ToolPage";
import LandingPage from "./Components/LandingPage";
import HeaderPage from "./Components/HeaderPage";
import ThemeProvider from "./Theme/ThemeProvider";


const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <ThemeProvider>

      {/* Conditional layout for landing page */}
      {isLandingPage ? (
        <div className="absolute inset-0 flex flex-col items-center justify-start z-10">
          <HeaderPage />
          <div className="flex-1 flex items-center justify-center w-full ">
            <LandingPage />
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          <Routes>
            <Route path="/tool" element={<ToolPage />} />
          </Routes>
        </div>
      )}
      </ThemeProvider>
    </div>
  );
};

export default App;
