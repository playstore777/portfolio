import grainImage from "@/shared/assets/images/grain.jpg";
import {
  ComponentProps,
  ComponentPropsWithRef,
  PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps & ComponentPropsWithRef<"div">> = ({
  className,
  children,
  ...other
}) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outlin e-white/20 after:pointer-events-none",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
