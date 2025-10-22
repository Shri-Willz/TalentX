import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import Navbar from "@/components/navbar/navbar";
import Feed from "@/components/feed/feed";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <Feed />
    </main>
      
  );
}
