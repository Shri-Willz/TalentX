"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Navbar from "@/components/navbar/navbar";
import Feed from "@/components/feed/feed";

export default function ProtectedPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Function to check session on page load
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error getting session:", error.message);
      }

      if (!session?.user && mounted) {
        router.push("/auth/signin-with-otp");
      } else if (mounted) {
        setLoading(false);
      }
    };

    checkSession();

    // Subscribe to auth state changes (e.g., after OTP login)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session?.user) {
          router.push("/auth/signin-with-otp");
        } else {
          setLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Feed />
    </main>
  );
}
