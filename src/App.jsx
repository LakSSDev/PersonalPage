import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/Styles.css";
import { Home } from "./pages/Home";
import { HomeMee } from "./pages/HomeMee";

function App() {

  return (
    <div class="relative">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <Home />
      </div>
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <HomeMee />
      </div>
    </div>
  );
}

export default App;
