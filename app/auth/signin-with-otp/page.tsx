"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignInWithOtpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"send" | "verify">("send");

  const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;

  // Generate 6-digit OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  // Send OTP via Brevo
  const sendEmailWithBrevo = async (recipientEmail: string, otpCode: string) => {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { email: "suryasurya20092005@gmail.com", name: "Auth" },
        to: [{ email: recipientEmail }],
        subject: "Your OTP Code",
        htmlContent: `<p>Your OTP code is: <strong>${otpCode}</strong></p>`,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to send email: ${text}`);
    }
  };

  // Step 1: Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (!email) {
      setMessage("Please enter your email");
      setIsLoading(false);
      return;
    }

    try {
      const otpCode = generateOtp();

      // Store OTP in Supabase (no expiry)
      const { error } = await supabase.from("genix_otp").insert([
        { email, otp: otpCode, used: false },
      ]);

      if (error) throw error;

      // Send OTP via Brevo
      await sendEmailWithBrevo(email, otpCode);

      setMessage("OTP sent! Check your email.");
      setStep("verify");
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (!otp) {
      setMessage("Please enter OTP");
      setIsLoading(false);
      return;
    }

    try {
      // Fetch latest unused OTP for email
      const { data, error } = await supabase
        .from("genix_otp")
        .select("*")
        .eq("email", email)
        .eq("otp", otp)
        .eq("used", false)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error || !data) {
        setMessage("Invalid OTP");
        setIsLoading(false);
        return;
      }

      // Mark OTP as used
      await supabase.from("genix_otp").update({ used: true }).eq("id", data.id);

     
      setMessage("OTP verified! Redirecting...");
      setTimeout(() => router.push("/protected"),1000);
    } catch (err: unknown) {
      setMessage(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setIsLoading(false);
      setOtp("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in with OTP</CardTitle>
          <CardDescription>
            {step === "send"
              ? "Enter your email to receive a 6-digit code."
              : "Enter the OTP sent to your email."}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={step === "send" ? handleSendOtp : handleVerifyOtp}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={step === "verify" || isLoading}
              />
            </div>

            {step === "verify" && (
              <div className="grid gap-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            )}

            {message && (
              <p
                className={`text-sm mt-2 ${
                  message.includes("sent") || message.includes("verified")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-accent text-white mt-2"
              disabled={isLoading}
            >
              {isLoading
                ? step === "send"
                  ? "Sending OTP..."
                  : "Verifying OTP..."
                : step === "send"
                ? "Send OTP"
                : "Verify OTP"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-2">
          <div className="text-sm">
            Remember your password?{" "}
            <Link href="/auth/sign-in" className="text-accent hover:underline">
              Sign in with password
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
