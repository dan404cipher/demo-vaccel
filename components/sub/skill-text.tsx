"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with AI
        </h1>
      </motion.div> */}
        {/* <motion.div
        variants={slideInFromLeft(0.5)}
         className="mt-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                   font-semibold text-white text-center
                   mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20
                   leading-tight
                   min-[2560px]:text-9xl min-[2560px]:mb-24 min-[2560px]:max-w-[1800px]"
      >
         <span>A Glimpse of Our</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
         {" "} Technology Prowess 
        </span>
        
      </motion.div> */}
       <motion.div
  variants={slideInFromLeft(0.5)}
  className="mt-9 text-2xl xs:text-2xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl 
             font-semibold text-white text-center
             mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14
             leading-snug
             min-[2560px]:text-6x1 min-[2560px]:mb-16 min-[2560px]:max-w-[1700px]"
>
  <span>A Glimpse of Our</span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    {" "}Technology Prowess
  </span>
</motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
       Crafting Future-Ready Applications with Top-Notch Technologies 
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Next-gen tech for next-level results
      </motion.div>
    </div>
  );
};
