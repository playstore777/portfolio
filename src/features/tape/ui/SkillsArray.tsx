import { Fragment } from "react";

import StarIcon from "@/shared/assets/icons/star.svg";

interface props {
  array: string[];
  multiplier?: number;
}

const SkillsArray: React.FC<props> = ({ array, multiplier = 1 }) => {
  return (
    <>
      {[...new Array(multiplier).fill(null)].map((_, index) => (
        <Fragment key={index}>
          {array.map((item) => (
            <div key={item} className="inline-flex gap-4 items-center">
              <span className="text-gray-900 uppercase font-extrabold text-sm">
                {item}
              </span>
              <StarIcon className="size-6 text-gray-900 -rotate-12" />
            </div>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default SkillsArray;
