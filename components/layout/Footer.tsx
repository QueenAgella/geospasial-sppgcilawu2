import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Container } from "../ds";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex items-center justify-between">
        <div>
          <a
            href="https://www.instagram.com/sppgcilawu002/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <InstagramLogoIcon className="h-4 w-4" />{" "}
            <small>sppgcilawu002</small>
          </a>
          <a
            href="mailto:dapurcilawu002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <EnvelopeClosedIcon className="h-4 w-4" />{" "}
            <small>dapurcilawu002@gmail.com</small>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <small>Developed by</small>
          <a href="https://github.com/QueenAgella" target="_blank">
            <Image
              src={"/hfm.png"}
              alt="Hervin Fakhrul Mahardika"
              width={1000}
              height={0}
              className="w-8 h-auto"
              priority
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};
