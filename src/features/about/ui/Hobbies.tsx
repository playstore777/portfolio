"use client"
import { useRef } from "react";
import { motion } from "framer-motion";

import { Hobby } from "@/entities/about";

interface props {
  hobbies: Hobby[];
}

const Hobbies: React.FC<props> = ({ hobbies }) => {
  const constraintRef = useRef(null);

  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full py-1.5 absolute"
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          drag
          dragConstraints={constraintRef}
        >
          <span className="font-medium text-gray-950">{hobby.title}</span>
          <span>{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Hobbies;
