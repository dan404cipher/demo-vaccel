import { SaasContent } from "@/components/sub/saas-content";

export const SaasHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] min-[2560px]:top-[-320px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <SaasContent />
    
    </div>
  );
}; 