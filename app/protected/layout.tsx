import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "TalentX",
  description: "A modern web app built with Next.js 15 + Tailwind CSS v4",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
