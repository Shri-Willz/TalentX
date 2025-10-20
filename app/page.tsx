import Auth from "@/app/auth/signup/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
        {
          <Auth />
        }
    </main>
  );
}
