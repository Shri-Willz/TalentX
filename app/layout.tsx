import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


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
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        {
          <script src="https://accounts.google.com/gsi/client" async></script>
        }
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
