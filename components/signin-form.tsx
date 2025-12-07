"use client";

import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client"; // ✅ Import the Supabase instance
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SigninForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setError("User does not exist or wrong password");
        } else {
          setError(error.message);
        }
      } else if (data.session) {
        setSuccess("Login successful!");
        setTimeout(() => router.push("/protected"), 10);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 border-0 bg-transparent", className)} {...props}>
      <Card className="bg-transparent border-none">
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 bg-transparent border-0">
            <div className="grid gap-2 text-text">
              <Label htmlFor="email"></Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-surface2 border-0"
              />
            </div>

            <div className="grid gap-2 text-text">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-surface2 border-0"
              />
            </div>

            {/* Links row */}
            <div className="flex justify-between items-center text-sm text-accent">
              <Link href="/auth/forgot-password" className="hover:underline">
                Forgot your password?
              </Link>
              <Link href="/auth/signin-with-otp" className="hover:underline">
                Sign in with OTP
              </Link>
            </div>

            <Button type="submit" className="w-full text-white bg-accent" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <div className="mt-2 text-center text-sm text-white">
              Don't have an account?{" "}
              <Link href="/auth/sign-up" className="text-accent">
                Sign up
              </Link>
            </div>

            {error && <p className="text-sm text-red-500 mt-2 text-center">{error}</p>}
            {success && <p className="text-sm text-green-500 mt-2 text-center">{success}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
