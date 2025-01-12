"use client";
import { useState } from "react";

import { ActionButton, IntroText } from "@/features";
import { CuteCandles } from "@/widgets";

interface props {}

const HeroSection: React.FC<props> = () => {
  const [isSilencio, setilSliencio] = useState(false);

  const handleClick = () => {
    setilSliencio(true);
  };

  return (
    <div className="w-full h-[100dvh] bg-black motion-safe:animate-change-background relative z-10 text-white px-[12%]">
      <IntroText />
      <div
        className={`min-w-min py-20 sm:p-44 sm:pl-0 text-white w-20 flex gap-3 animate-opacity ${
          !isSilencio && "hover:cursor-shh"
        }`}
        onClick={handleClick}
      >
        <ActionButton
          isSilencio={isSilencio}
          handleClick={handleClick}
          url="https://www.linkedin.com/in/mohammed-adil-sharif-a0bb7484/"
          label="LinkedIn"
        />
        <ActionButton
          className="bg-gray-600"
          isSilencio={isSilencio}
          handleClick={handleClick}
          url="https://github.com/playstore777"
          animationDelay="600"
          label="GitHub"
        />
      </div>
      <CuteCandles />
    </div>
  );
};

export default HeroSection;
