import { useState } from "react";
import MainContent from "../assets/components/MainContent";
import Sidebar from "../assets/components/Sidebar";
import Payment from "../assets/components/Payment";

function Home() {
  const [isPaymentVisible, setPaymentVisible] = useState(false);

  const handlePaymentVisibility = () => {
    setPaymentVisible(!isPaymentVisible);
  };
  return (
    <>
      <MainContent />
      <Sidebar onPaymentClick={handlePaymentVisibility} />
      <Payment isVisible={isPaymentVisible} />
    </>
  );
}

export default Home;
