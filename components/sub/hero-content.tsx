// "use client";

// import { SparklesIcon } from "@heroicons/react/24/solid";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { AnimatePresence, motion as m } from "framer-motion";
// import Link from "next/link";
// import ContactPopup from "@/components/main/contactpopup";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/lib/motion";

// const words = ["the best", "innovative", "seamless", "top-notch", "quality"];

// export const HeroContent = () => {
//   const [index, setIndex] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [typing, setTyping] = useState(true);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (typing) {
//       if (displayed.length < words[index].length) {
//         timeout = setTimeout(() => {
//           setDisplayed(words[index].slice(0, displayed.length + 1));
//         }, 90);
//       } else {
//         timeout = setTimeout(() => setTyping(false), 1200);
//       }
//     } else {
//       if (displayed.length > 0) {
//         timeout = setTimeout(() => {
//           setDisplayed(words[index].slice(0, displayed.length - 1));
//         }, 30);
//       } else {
//         setTyping(true);
//         setIndex((prev) => (prev + 1) % words.length);
//       }
//     }
//     return () => clearTimeout(timeout);
//   }, [displayed, typing, index]);


//    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
//     // Prevent body scroll when popup is open
//     useEffect(() => {
//       if (isPopupOpen) {
//         document.body.style.overflow = 'hidden';
//       } else {
//         document.body.style.overflow = 'unset';
//       }
  
//       return () => {
//         document.body.style.overflow = 'unset';
//       };
//     }, [isPopupOpen]);
  
//     const handleConnect = () => {
//       setIsPopupOpen(true);
//     };
  
//     const closePopup = () => {
//       setIsPopupOpen(false);
//     };
//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//         className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 md:mt-40 w-full z-[20] gap-8 md:gap-0 min-[2560px]:px-64 min-[2560px]:mt-64 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto min-[2560px]:gap-24"
//     >
//       {/* Image Section - Hidden on mobile, visible on lg+ screens */}
//       <motion.div
//         variants={slideInFromLeft(0.8)}
//         className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
//       >
//         <Image
//           src="/hero-bg.svg"
//           alt="work icons"
//           height={650}
//           width={650}
//           draggable={false}
//           className="select-none w-full max-w-[550px] xl:max-w-[650px] 
//                      h-auto object-contain"
//         />
//       </motion.div>

//       {/* Content Section - Full width on mobile, half width on lg+ */}
//       <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 
//                       justify-center text-center lg:text-start">
        
//         {/* Welcome Box */}
//         {/* <motion.div
//           variants={slideInFromTop}
//           className="Welcome-box py-2 px-3 sm:py-[8px] sm:px-[7px] 
//                      border border-[#7042f88b] opacity-[0.9] 
//                      inline-flex items-center justify-center lg:justify-start 
//                      w-fit mx-auto lg:mx-0"
//         >
//           <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
//           <h1 className="Welcome-text text-xs sm:text-[13px]">
//             V-Accel AI Dynamics
//           </h1>
//         </motion.div> */}

//         {/* Main Heading */}
//       <motion.div
//   variants={slideInFromRight(0.5)}
//   className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 
//     text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
//     font-bold text-white max-w-full lg:max-w-[600px] 
//     leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
// >
//   <span>Chennai&apos;s Leading</span>

//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//     AI Machine Learning
//   </span>

//   <span>Company</span>
// </motion.div>


//         {/* Description */}
//        <motion.p
//   variants={slideInFromRight(0.8)}
//   className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 
//              my-4 sm:my-5 lg:my-6 max-w-full lg:max-w-[600px] 
//              px-4 sm:px-0"
// >
//   Building the Future — One SaaS, One AI, One Innovation at a Time
// </motion.p>

//         {/* CTA Button */}
//           <motion.div 
//             variants={slideInFromLeft(1)}
//            className="flex justify-center lg:justify-start mt-4 sm:mt-6"
//           >
//             <button
//               onClick={handleConnect}
//               className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white 
//                          cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] 
//                          text-sm sm:text-base font-medium
//                          hover:scale-105 transition-transform duration-200
//                          inline-block"
//             >
//               Let&apos;s Connect
//             </button>
//           </motion.div>
//         </div>
     

//       {/* Contact Popup Component */}
//       <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
//     </motion.div>
//   );
// };


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactPopup from "@/components/main/contactpopup";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleConnect = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 md:mt-40 w-full z-[20] gap-8 md:gap-0 min-[2560px]:px-64 min-[2560px]:mt-64 min-[2560px]:max-w-[2400px] min-[2560px]:mx-auto min-[2560px]:gap-24"
    >
      {/* Image Section - Hidden on mobile, visible on lg+ screens */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="hidden lg:flex w-full lg:w-1/2 h-full justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-[550px] xl:max-w-[650px] 
                     h-auto object-contain"
        />
      </motion.div>

      {/* Content Section - Full width on mobile, half width on lg+ */}
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 lg:gap-6 
                      justify-center text-center lg:text-start">
        
        {/* Main Heading */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 
            text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 
            font-bold text-white max-w-full lg:max-w-[600px] 
            leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
        >
          <span>Chennai&apos;s Leading</span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            AI Machine Learning
          </span>

          <span>Company</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 
                     my-4 sm:my-5 lg:my-6 max-w-full lg:max-w-[600px] 
                     px-4 sm:px-0"
        >
          Building the Future — One SaaS, One AI, One Innovation at a Time
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          variants={slideInFromLeft(1)}
          className="flex justify-center lg:justify-start mt-4 sm:mt-6"
        >
          <button
            onClick={handleConnect}
            className="py-2 sm:py-3 px-6 sm:px-8 button-primary text-center text-white 
                       cursor-pointer rounded-lg w-full sm:w-auto max-w-[200px] 
                       text-sm sm:text-base font-medium
                       hover:scale-105 transition-transform duration-200
                       inline-block"
          >
            Let&apos;s Connect
          </button>
        </motion.div>
      </div>

      {/* Contact Popup Component */}
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
    </motion.div>
  );
};