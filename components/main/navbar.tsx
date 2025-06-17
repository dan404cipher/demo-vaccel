'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 min-[2560px]:h-[85px] min-[2560px]:px-32">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto min-[2560px]:max-w-[2400px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={55}
            height={55}
            draggable={false}
            className="cursor-pointer bg-white  mx-2 min-[2560px]:w-[75px] min-[2560px]:h-[75px] min-[2560px]:mx-4"
          />
          {/* Logo text - hidden on mobile, visible on tablet and desktop */}
          <div className="flex ml-2 text-gray-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg min-[2560px]:ml-4 min-[2560px]:text-2xl">
            V-ACCEL | AI DYNAMICS PRIVATE LIMITED
          </div>
        </Link>

        {/* Desktop Navbar (1024px and above) */}
        <div className="hidden lg:flex w-[700px] h-full items-center justify-between lg:mr-20 min-[2560px]:w-[900px] min-[2560px]:mr-32">
          <div className="flex items-center justify-between w-full border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-5 py-2 rounded-full text-gray-200 min-[2560px]:px-8 min-[2560px]:py-3 min-[2560px]:text-xl">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`cursor-pointer transition px-2 py-1 rounded-full ${
                    isActive 
                      ? "text-white bg-[rgb(112,66,248)] shadow-lg shadow-[rgb(112,66,248)]/30" 
                      : "hover:text-[rgb(112,66,248)] hover:bg-[rgba(112,66,248,0.1)]"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tablet Hamburger Menu (768px to 1023px) */}
        <button
          className="hidden md:block lg:hidden text-white text-3xl"
          onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}
        >
          {isTabletMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Social Icons (1024px and above) */}
        <div className="hidden lg:flex gap-5 min-[2560px]:gap-8">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white min-[2560px]:h-8 min-[2560px]:w-8" />
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon (below 768px) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Tablet Menu */}
      {isTabletMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 hidden md:block lg:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`cursor-pointer transition text-center px-4 py-2 rounded-lg ${
                    isActive 
                      ? "text-white bg-[rgb(112,66,248)] shadow-lg shadow-[rgb(112,66,248)]/30 font-semibold" 
                      : "hover:text-[rgb(112,66,248)] hover:bg-[rgba(112,66,248,0.1)]"
                  }`}
                  onClick={() => setIsTabletMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu (below 768px) */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden min-[2560px]:top-[85px]">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`cursor-pointer transition text-center px-4 py-2 rounded-lg ${
                    isActive 
                      ? "text-white bg-[rgb(112,66,248)] shadow-lg shadow-[rgb(112,66,248)]/30 font-semibold" 
                      : "hover:text-[rgb(112,66,248)] hover:bg-[rgba(112,66,248,0.1)]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};