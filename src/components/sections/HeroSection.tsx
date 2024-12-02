import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-start text-white"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute" />
      <div className="relative z-10 left-20 w-2/3 p-10">
        <h1 className="text-3xl lg:text-5xl font-MaisonNeueExtendedBold text-left">
          3 negara. 20+ layanan. 1 platform on-demand terkemuka.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
