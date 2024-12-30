"use client";
import useScrollDirection from "@/shared/hooks/useScrollDirection";
import AHeart from "@/shared/assets/icons/A🖤_final_not_yet.svg";
import { NavLink } from "@/features";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const scrollDirection = useScrollDirection();
  return (
    <header
      className={`sticky top-0 left-0 z-50 bg-black text-white font-serif w-full mx-auto px-[12%] animate-change-background transition-transform ${
        scrollDirection === "up" || !scrollDirection
          ? "sticky top-0"
          : "translate-y-[-100%]"
      }`}
    >
      <div className="py-4 md:px-4 flex justify-between items-center max-w-[95rem] mx-auto">
        <div>
          <a href="/">
            <AHeart
              className="size-12 md:size-16 fill-[url(#logo-gradient)] animate-dash"
              style={{
                stroke: "url(#logo-gradient)",
                fill: "url(#logo-gradient)",
                strokeWidth: 7,
                strokeDasharray: 3000,
              }}
            />
          </a>
          {/* To give the gradient to the svgs, we have almost hidden.*/}
          <svg className="size-0 absolute" aria-hidden="true">
            <linearGradient id="logo-gradient">
              <stop offset="0%" stopColor="rgb(253 224 71 / 1)" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </svg>
        </div>
        <div className="flex gap-4 text-xl md:text-2xl">
          <NavLink url="/#projects">Projects</NavLink>
          <NavLink url="/#about">About</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
