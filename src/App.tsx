import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import LandingPage from "./pages/Index"; // adjust path if different

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <LandingPage />
  );
}

export default App;
