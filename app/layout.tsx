import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter=Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaikrishna Portfolio",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-violet-400 scrollbar-thumb-[#F7AB0A]/80`}
      >
        <StarsCanvas />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
