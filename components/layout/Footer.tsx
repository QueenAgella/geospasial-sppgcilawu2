import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import { Container } from "../ds";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex items-center justify-between">
        <div className="space-y-2">

          <a href="https://www.instagram.com/sppgcilawu002/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 transition-all duration-300">
            <Image src="/instagram.svg"
              alt="Instagram"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:scale-110"/>

            <small className="relative 
              bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
              bg-[length:0%_2px] bg-left-bottom bg-no-repeat 
              transition-all duration-300 
              group-hover:bg-[length:100%_2px] 
              group-hover:text-pink-500 
              group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]">
              sppgcilawu002
            </small>
          </a>

          <a href="mailto:dapurcilawu002@gmail.com"
            className="group flex items-center gap-1.5 transition-all duration-300">
            <Image src="/gmail.svg"
              alt="Gmail"
              width={16}
              height={16}
              className="transition-transform duration-300 group-hover:scale-110"/>

            <small className="relative 
              bg-gradient-to-r from-red-500 to-orange-400 
              bg-[length:0%_2px] bg-left-bottom bg-no-repeat 
              transition-all duration-300 
              group-hover:bg-[length:100%_2px] 
              group-hover:text-red-500 
              group-hover:drop-shadow-[0_0_6px_rgba(234,67,53,0.7)]">
              dapurcilawu002@gmail.com
            </small>
          </a>
        
          <a href="https://www.tiktok.com/@sppgcilawu002"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 transition-all duration-300">
            {/* TikTok Glitch Icon */}
            <span className="relative w-4 h-4">
              {/* layer cyan */}
              <svg viewBox="0 0 24 24" 
                className="absolute inset-0 w-4 h-4 text-cyan-400 translate-x-[1px] translate-y-[1px] opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-300" 
                fill="currentColor">
                <path d="M12 2c1.1 2.2 3 3.5 5 3.7v3c-1.6-.1-3.2-.7-4.5-1.6v7.6c0 3.3-2.7 6-6 6S.5 18 .5 14.7 3.2 8.7 6.5 8.7c.5 0 1 .1 1.5.2v3.1c-.4-.2-.9-.3-1.5-.3-1.8 0-3.3 1.5-3.3 3.3S4.7 18.3 6.5 18.3 9.8 16.8 9.8 15V2h2.2z" />
              </svg>

              {/* layer pink */}
              <svg viewBox="0 0 24 24"
                className="absolute inset-0 w-4 h-4 text-pink-500 -translate-x-[1px] -translate-y-[1px] opacity-70 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300"
                fill="currentColor">
                <path d="M12 2c1.1 2.2 3 3.5 5 3.7v3c-1.6-.1-3.2-.7-4.5-1.6v7.6c0 3.3-2.7 6-6 6S.5 18 .5 14.7 3.2 8.7 6.5 8.7c.5 0 1 .1 1.5.2v3.1c-.4-.2-.9-.3-1.5-.3-1.8 0-3.3 1.5-3.3 3.3S4.7 18.3 6.5 18.3 9.8 16.8 9.8 15V2h2.2z" />
              </svg>

              {/* main white/black */}
              <svg viewBox="0 0 24 24"
                className="relative w-4 h-4 text-black dark:text-white"
                fill="currentColor">
                <path d="M12 2c1.1 2.2 3 3.5 5 3.7v3c-1.6-.1-3.2-.7-4.5-1.6v7.6c0 3.3-2.7 6-6 6S.5 18 .5 14.7 3.2 8.7 6.5 8.7c.5 0 1 .1 1.5.2v3.1c-.4-.2-.9-.3-1.5-.3-1.8 0-3.3 1.5-3.3 3.3S4.7 18.3 6.5 18.3 9.8 16.8 9.8 15V2h2.2z" />
              </svg>
            </span>

            <small className="relative 
              bg-gradient-to-r from-cyan-400 via-pink-500 to-white
              bg-[length:0%_2px] bg-left-bottom bg-no-repeat 
              transition-all duration-300 
              group-hover:bg-[length:100%_2px] 
              group-hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]">
              @sppgcilawu002
            </small>
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <small>Developed by</small>
          <a href="https://github.com/QueenAgella"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110 hover:drop-shadow-lg">

            <Image src={"/hfm.png"}
              alt="Hervin Fakhrul Mahardika"
              width={1000}
              height={0}
              className="w-8 h-auto"
              priority/>
          </a>
        </div>
      </Container>
    </footer>
  );
};