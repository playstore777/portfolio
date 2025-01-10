import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface props {
  isSilencio: boolean;
  url: string;
  label: string;
  handleClick: () => void;
  className?: string;
  animationDelay?: "300" | "600";
}

const ActionButton: React.FC<props> = ({
  isSilencio,
  url,
  label,
  className,
  animationDelay = "300",
}) => {
  return (
    <Link href={url} aria-label={label ? label : "Action button"}>
      <div
        className={twMerge(
          `px-6 py-3 bg-blue-600 rounded-md ${
            isSilencio
              ? "animate-none"
              : `motion-safe:md:animate-hop ${
                  animationDelay === "300"
                    ? "motion-safe:md:animate-delay-300"
                    : "motion-safe:md:animate-delay-600"
                }`
          } before:content-["click_me"] before:absolute before:-top-1/2 before:left-[20%] before:md:animate-show-text ${
            animationDelay === "300"
              ? "before:md:animate-delay-300"
              : "before:md:animate-delay-600"
          } before:text-white`,
          className
        )}
      >
        <div className="flex justify-around">
          <span
            className={`eye inline-block w-3 h-3 rounded-full bg-black ${
              isSilencio
                ? `animate-blink-normal ${
                    animationDelay === "300"
                      ? "animate-delay-300"
                      : "animate-delay-600"
                  }`
                : "animate-none"
            }`}
          ></span>
          <span
            className={`eye inline-block w-3 h-3 rounded-full bg-black ${
              isSilencio
                ? `animate-blink-normal ${
                    animationDelay === "300"
                      ? "animate-delay-300"
                      : "animate-delay-600"
                  }`
                : "animate-none"
            }`}
          ></span>
        </div>
        <span className="text-2xl md:text-base">{label}</span>
      </div>
    </Link>
  );
};

export default ActionButton;
