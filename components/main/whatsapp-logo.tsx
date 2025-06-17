"use client";

import { useState } from "react";

export function WhatsAppLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-12 right-12 z-50">
      {/* Animated ripple rings */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
      <div className="absolute inset-1 rounded-full bg-green-400/30 animate-pulse delay-75" />
      
      {/* Main WhatsApp button */}
      <button
        className={`
          relative w-16 h-16 
          bg-gradient-to-br from-green-400 via-green-500 to-green-600
          hover:from-green-500 hover:via-green-600 hover:to-green-700
          rounded-full 
          shadow-lg hover:shadow-xl hover:shadow-green-500/25
          transform transition-all duration-300 ease-out
          hover:scale-110 active:scale-95
          ${isHovered ? 'rotate-6' : 'rotate-0'}
          flex items-center justify-center
          group cursor-pointer
          animate-bounce-in
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          // Replace with your WhatsApp number
            window.open('https://wa.me/7603846245', '_blank');
        }}
        aria-label="Contact us on WhatsApp"
       style={{
    animation: 'bounceIn 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s infinite',
    animationPlayState: isHovered ? 'paused' : 'running'
  }}
      >
        {/* WhatsApp Icon SVG */}
        <svg
          className={`
            w-8 h-8 text-white 
            transition-all duration-300 ease-out
            ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
            drop-shadow-sm
          `}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
        </svg>

        {/* Notification dot */}
        {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div> */}
      </button>

      {/* Hover tooltip */}
      <div
        className={`
          absolute bottom-full right-0 mb-3 px-3 py-2
          bg-gray-900/90 backdrop-blur-sm text-white text-sm rounded-lg
          whitespace-nowrap transition-all duration-300 ease-out
          before:content-[''] before:absolute before:top-full before:right-3 
          before:w-0 before:h-0 before:border-l-4 before:border-r-4 
          before:border-t-4 before:border-transparent before:border-t-gray-900/90
          ${isHovered 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 translate-y-2 invisible'
          }
        `}
      >
        💬 Chat with us on WhatsApp
      </div>

      <style jsx>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}