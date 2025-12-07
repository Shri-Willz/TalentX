"use client";

import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client"; // ✅ fixed import

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import GoogleIcon from "@/public/assets/google.png";
import GithubIcon from "@/public/assets/github.png";

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    if (!name || !phone || !email || !password) {
      setMessage("Please fill all fields");
      setIsLoading(false);
      return;
    }

    try {
      // Optional: check if user already exists in custom table
      const { data: existingUser } = await supabase
        .from("users") 
        .select("id")
        .eq("email", email)
        .single();

      if (existingUser) {
        setMessage("User already exists. Please login instead.");
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/sign-in`,
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Account created successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
      }
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/protected` },
    });
  };

  const handleGithubAuth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}/protected` },
    });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-transparent border-none">
        <CardContent>
          <form onSubmit={handleSignUp} className="flex flex-col gap-6">
            <div className="flex gap-4">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-surface2 text-text border-0"
              />
              <Input
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-surface2 text-text border-0"
              />
            </div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-surface2 text-text border-0"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-surface2 text-text border-0"
            />
            {message && <p className="text-sm text-white">{message}</p>}

            <Button type="submit" className="w-full text-white bg-accent" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2">
          <div className="text-sm text-white">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="underline text-accent">
              Sign in
            </Link>
          </div>

          <p className="text-white mt-2">Sign up with</p>
          <div className="flex gap-2">
            <Button onClick={handleGoogleAuth}>
              <Image src={GoogleIcon} alt="Google" className="w-6 h-6" />
            </Button>
            <Button onClick={handleGithubAuth}>
              <Image src={GithubIcon} alt="Github" className="w-6 h-6" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
