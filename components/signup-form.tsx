"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleIcon from "@/public/assets/google.png"
import GithubIcon from "@/public/assets/github.png"
import Image from "next/image";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handelGoogleAuth = async () => {
    supabase.auth.signInWithOAuth
      ({
        provider: 'google',
        options: {
          redirectTo: "/protected",
          queryParams: { access_type: 'offline', prompt: 'consent' }
        }
      })
  }

  const handelGithubAuth = async () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options:{
        redirectTo: "/protected",
        queryParams: { access_type: 'offline', prompt: 'consent' }
      }
    })
  }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-transparent border-none">
        <CardHeader>
          <CardTitle className="text-xl font-sans"></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6 border-0">
              <div className="flex gap-4">
                <div className="grid">
                  <Label htmlFor="name">
                    <Input
                      id="name"
                      type="name"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-surface2 text-text border-0"
                    />
                  </Label>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Phone">
                    <Input
                      id="phone"
                      type="phone"
                      required
                      placeholder="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-surface2 text-text border-0"
                    />
                  </Label>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-surface2 text-text border-0"
                  />
                </Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-surface2 text-text border-0"
                  />
                </Label>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}

            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col items-center justify-center w-full">
            <Button type="submit" className="w-full text-white bg-accent" disabled={isLoading}>
              {isLoading ? "Creating an account..." : "Sign up"}
            </Button>
            <div className="mt-4 text-center text-sm text-white p-2">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4 text-accent">
                Login
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-white">
                Sign up with 
              </p>
              <div className="flex gap-">
                <Button  className="border-none rounded-4xl cursor-pointer" disabled={isLoading} onClick={() => handelGoogleAuth()}>
                 <Image src={GoogleIcon} alt="Signup with google" className="size-6"></Image>
               </Button>
               <Button  className="border-none rounded-4xl cursor-pointer" disabled={isLoading} onClick={() => handelGithubAuth()}>
                <Image src={GithubIcon} alt="Signup with Github" className="size-6"></Image>
              </Button>
              </div>
              
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
