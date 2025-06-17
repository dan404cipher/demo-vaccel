// import { HeroContent } from "@/components/sub/hero-content";

// export const Hero = () => {
//   return (
//     <div className="relative flex flex-col h-full w-full">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
//       >
//         <source src="/videos/blackhole.webm" type="video/webm" />
//       </video>

//       <HeroContent />
//     </div>
//   );
// };


import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="rotate-180 absolute top-[-340px] min-[2560px]:top-[-400px]  
                   left-0 w-full h-full object-cover -z-20"
        style={{ 
          willChange: 'transform',
          transform: 'rotate(180deg) translateZ(0)'
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};