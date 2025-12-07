"use client";

import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client"; // ✅ use singleton client
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    if (!password) {
      setMessage("Please enter a new password");
      setIsLoading(false);
      return;
    }

    try {
      // Update the user's password
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Password updated successfully!");
        setPassword("");
        // Redirect to sign-in page after 1 second
        setTimeout(() => {
          router.push("/auth/sign-in");
        }, 1000);
      }
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Update Password</CardTitle>
          <CardDescription>
            Enter your new password to reset your account password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleUpdatePassword}>
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {message && (
              <p
                className={cn(
                  "text-sm",
                  message.includes("successfully") ? "text-green-500" : "text-red-500"
                )}
              >
                {message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-accent text-white mt-2"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2">
          <div className="text-sm">
            Remembered your password?{" "}
            <Link href="/auth/sign-in" className="underline text-accent">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
