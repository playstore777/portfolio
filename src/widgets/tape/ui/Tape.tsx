"use client";
import { SkillsArray } from "@/features";
import { SKILLS } from "@/entities";

const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-yellow-300 to-orange-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-scroll-left [animation-duration:30s]">
            <SkillsArray array={SKILLS} multiplier={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
