import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Main } from "@/components/ds";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPPG Cilawu Cilawu 2 - Yayasan Always Be Positive",
  description:
    "Geospasial Penerima Manfaat SPPG Cilawu Cilawu 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={figtree.className}>
        <Header />

        {/* FIX OFFSET HEADER */}
        <Main className="pt-[100px] min-h-screen">
          {children}
        </Main>

        <Footer />
      </body>
    </html>
  );
}