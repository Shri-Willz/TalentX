import React from "react";
import Auth from "./auth/signup/signup"; // ✅ correct default import

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Auth />  {/* Works now */}
    </main>
  );
}
