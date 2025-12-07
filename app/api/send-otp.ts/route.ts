import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires_at = new Date(new Date().getTime() + 10 * 60 * 1000).toISOString(); // 10 min expiry

  // Store OTP in Supabase
  const { error } = await supabase.from("genix_otp").insert([{ email, otp, expires_at, used: false }]);
  if (error) return res.status(500).json({ error: error.message });

  // Send OTP using Brevo
  try {
    const BREVO_API_KEY = process.env.BREVO_API_KEY!;
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: "your_verified_email@domain.com", name: "Auth" },
        to: [{ email }],
        subject: "Your OTP Code",
        htmlContent: `<p>Your OTP code is <strong>${otp}</strong>. It expires in 10 minutes.</p>`,
      }),
    });

    res.status(200).json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
