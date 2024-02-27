import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import MainContent from "./assets/components/MainContent";
import Sidebar from "./assets/components/Sidebar";
import Payment from "./assets/components/Payment";
import Dashboard from "./assets/components/Dashboard";

function App() {
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handlePaymentVisibility = () => {
    setPaymentVisible(!isPaymentVisible);
  };

  return (
    <div className="wrapp">
      <div className="main_container">
        <div className="home_content flex justify-center w-full items-start">
          <Navbar />
          <MainContent />
          <Sidebar onPaymentClick={handlePaymentVisibility} />
          <Payment isVisible={isPaymentVisible} />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
