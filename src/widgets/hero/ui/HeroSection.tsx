"use client";
import { useState } from "react";

import { ActionButton, IntroText } from "@/features";
import GitHubIcon from "@/shared/assets/icons/github.svg";
import { CuteCandles } from "@/widgets";

interface props {}

const HeroSection: React.FC<props> = () => {
  const [isSilencio, setilSliencio] = useState(false);

  const handleClick = () => {
    setilSliencio(true);
  };

  return (
    <div className="w-full h-[100dvh] bg-black animate-change-background relative z-10 text-white px-[12%]">
      <IntroText />
      <div
        className={`min-w-min p-36 pl-0 md:p-44 md:pl-0 text-white w-20 flex gap-3 animate-opacity ${
          !isSilencio && "hover:cursor-shh"
        }`}
        onClick={handleClick}
      >
        <ActionButton
          isSilencio={isSilencio}
          handleClick={handleClick}
          url="https://www.linkedin.com/in/mohammed-adil-sharif-a0bb7484/"
        >
          LinkedIn
        </ActionButton>
        <ActionButton
          className="bg-gray-600"
          isSilencio={isSilencio}
          handleClick={handleClick}
          url="https://github.com/playstore777"
          animationDelay="600"
        >
          {/* <GitHubIcon className="inline size-7" /> */}
          GitHub
        </ActionButton>
      </div>
      <CuteCandles />
    </div>
  );
};

export default HeroSection;
