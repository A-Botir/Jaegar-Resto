import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="wrapp">
      <div className="main_container">
        <div className="home_content flex justify-center w-full items-start">
          <Navbar step={step} setStep={setStep} />
          {step === 1 && <Home />}
          {step === 2 && <Clients />}
          {step === 3 && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;
