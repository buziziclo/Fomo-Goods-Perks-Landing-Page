import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueBar from "./components/ValueBar";
import CategoryBrowser from "./components/CategoryBrowser";
import ValuePillars from "./components/ValuePillars";
import Conversion from "./components/Conversion";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsHelpOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenHelp = () => {
    setIsLoginOpen(false);
    setIsHelpOpen(true);
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsHelpOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-satoshi text-gray-900 selection:bg-[#F00480] selection:text-white">
      <Header onLoginClick={handleOpenLogin} onHelpClick={handleOpenHelp} />
      
      <main>
        <Hero onLoginClick={handleOpenLogin} onHelpClick={handleOpenHelp} />
        <ValueBar />
        <CategoryBrowser />
        <ValuePillars onLoginClick={handleOpenLogin} />
        <Conversion />
        <SocialProof />
        <FAQ />
      </main>

      <Footer />
      
      <Modals 
        isLoginOpen={isLoginOpen} 
        isHelpOpen={isHelpOpen} 
        onClose={handleCloseModals} 
        onOpenHelp={handleOpenHelp} 
      />
    </div>
  );
}

