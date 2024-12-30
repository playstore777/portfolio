"use client";
import { useState } from "react";
import Image from "next/image";

import { FeedbackButton } from "@/features";
import AdilImage from "@/shared/assets/images/adil.jpg";

const Footer = () => {
  const [isHired, setIsHired] = useState<boolean | null>(null);

  const handleHire = (isHired: boolean) => {
    setIsHired(isHired);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div
        className={
          "relative w-[500px] h-[500px] bg-black/60 flex justify-center items-center"
        }
      >
        <FeedbackButton
          label="YES"
          handleClick={() => handleHire(true)}
          className="absolute top-[20%] right-[60%]"
        />
        <FeedbackButton
          label="NO"
          className="absolute top-[20%] left-[60%]"
          handleClick={() => {
            handleHire(false);
          }}
        />
        {/* Table */}
        <div
          className={
            "w-4/5 h-4/5 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full rotate-x-69 z-20 opacity-20"
          }
        >
          <div
            className={
              "absolute top-full left-1/3 z-0 w-2/5 h-full bg-gray-600 rounded-md"
            }
          ></div>
        </div>

        {/* card */}
        <div
          className={
            "w-[65px] h-[70px] bg-white flex justify-center items-center font-serif p-2 absolute top-[35%] left-1/4 z-20 opacity-40 flex-col text-sm"
          }
        >
          <div>
            {AdilImage && (
              <Image
                src={AdilImage}
                alt="Mohammed Adil Sharif"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        </div>

        {/* candle */}
        <div
          className={`absolute top-[35%] left-1/2 z-20 -translate-x-1/2 w-[20px] h-[60px] bg-slate-400 rounded-md transition-transform duration-500 ease-in-out origin-bottom ${
            !isHired && isHired !== null && "-rotate-90"
          }`}
        >
          <div
            className={`absolute -top-[15px] left-1/2 -translate-x-1/2 w-[10px] h-[20px] rounded-[50%] bg-radial-gradient-circle from-[#ff9900] to-[#ff3300] animate-flicker ${
              isHired !== null &&
              (isHired
                ? "clip-path-heart -top-[20px] w-[24px] h-[24px]"
                : "animate-flicker-rotated left-full")
            }`}
          ></div>
          <div
            className={`absolute -top-[300%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none`}
            style={{
              background:
                "radial-gradient(circle, rgba(255, 255, 204, 0.6), transparent 70%)",
            }}
          ></div>
        </div>

        {/* card */}
        <div
          className={
            "w-[65px] h-[70px] bg-white flex justify-center items-center text-center font-serif absolute top-[35%] right-1/4 z-20 opacity-40 text-2xl text-black/65 break-words whitespace-normal transition-all"
          }
        >
          {isHired === null && "Hire Me?"}
          {isHired !== null &&
            (isHired ? (
              <span className="text-base">Thanks!</span>
            ) : (
              <span className="text-base">
                <p>It&apos;s Painful</p> <p>{":("}</p>
              </span>
            ))}
        </div>
      </div>

      {isHired && (
        <div className="absolute top-[70%] md:top-[30%] md:right-[12%] bg-white/25 text-white/45 p-3 rounded-md animate-opacity font-sans">
          <ul>
            <li>
              <span className="font-bold">Linked In: </span>
              <a href="https://www.linkedin.com/in/mohammed-adil-sharif-a0bb7484/">
                Mohammed Adil Sharif
              </a>
            </li>
            <li>
              <span className="font-bold">Email: </span>
              <a href="mailto:mdadilsharif2@gmail.com">
                mdadilsharif2@gmail.com
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Footer;
