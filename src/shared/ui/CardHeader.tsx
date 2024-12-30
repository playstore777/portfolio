import { twMerge } from "tailwind-merge";

import CatSitting from "@/shared/assets/icons/cat-sitting.svg";
import CatStreching from "@/shared/assets/icons/cat-streching.svg";
import CatScared from "@/shared/assets/icons/cat-scared.svg";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
  iconType?: "sitting" | "streching" | "scared";
}

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  className,
  iconType = "sitting",
}) => {
  return (
    <div
      className={twMerge("flex flex-col gap-2 p-6 md:py-8 md:px-10", className)}
    >
      <div className="inline-flex items-center gap-2">
        {iconType === "sitting" && (
          <CatSitting className="size-9 text-orange-300 stroke-black" />
        )}
        {iconType === "streching" && (
          <CatStreching className="size-9 text-orange-300 stroke-black" />
        )}
        {iconType === "scared" && (
          <CatScared className="size-9 text-orange-300 stroke-black" />
        )}
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-sm text-white/60">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
