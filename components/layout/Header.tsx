"use client";

import Image from "next/image";
import { Container } from "../ds";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // hide / show header
      if (current > lastScrollRef.current && current > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollRef.current = current;
      setScrolled(current > 10);

      // scroll progress
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollProgress = (current / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* GRADIENT BORDER */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />

        {/* GLASS */}
        <div
          className={`backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ${
            scrolled ? "bg-white/50" : "bg-white/70"
          }`}
        >
          <Container
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2" : "py-4"
            }`}
          >
            {/* LEFT LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo_bgn.png"
                alt="Badan Gizi Nasional"
                width={120}
                height={40}
                className={`transition-all duration-500 ${
                  scrolled ? "h-8 opacity-90" : "h-11"
                } w-auto hover:scale-105`}
                priority
              />
            </div>

            {/* RIGHT LOGO */}
            <div className="flex items-center">
              <Image
                src="/logo_yayasan.png"
                alt="Yayasan Always Be Positive"
                width={160}
                height={160}
                className={`transition-all duration-500 ${
                  scrolled ? "h-10" : "h-14"
                } w-auto hover:scale-110`}
                priority
              />
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};