import Image from "next/image";
import { Container } from "../ds";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Container className="flex items-center justify-between">
        <Image
          src={"/logo_bgn.png"}
          alt="Badan Gizi Nasional"
          width={1000}
          height={0}
          className="w-30 h-auto"
          priority
        />
      </Container>
    </header>
  );
};
