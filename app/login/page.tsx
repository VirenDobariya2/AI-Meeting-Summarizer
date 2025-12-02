"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, Lock, Chrome, Github, Loader2 } from "lucide-react";
import Link from "next/link";
import { AnimatedOrb } from "@/components/AnimatedOrb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OTPModal from "@/components/OTPModal";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpOpen, setOtpOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // ADMIN → no OTP
      if (data.role === "admin") {
        router.push("/dashboard-admin");
        return;
      }

      // USER → send OTP + open modal
      await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setOtpOpen(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      alert(message);
    } finally {
      setLoading(false);
    }
  }

  function handleVerified() {
    router.push("/dashboard"); 
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#05010f] relative overflow-hidden">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT SECTION */}
        <motion.div
          className="hidden lg:flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-full max-w-md">
            <AnimatedOrb />
          </div>

          <div className="text-center px-8 space-y-4">
            <h1 className="text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              MemoMeet
            </h1>
            <p className="text-gray-300 text-lg">AI Meeting Summaries</p>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl">
            <h2 className="text-3xl text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Login to continue</p>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin} className="space-y-5 mt-6">
              {/* Email */}
              <div>
                <label className="text-gray-300 text-sm">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    className="pl-12 bg-white/5 border-white/10 text-white h-12"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-gray-300 text-sm">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="password"
                    className="pl-12 bg-white/5 border-white/10 text-white h-12"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-purple-400 text-sm"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* SINGLE SUBMIT BUTTON */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 h-12"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Submit"}
              </Button>
            </form>
            {/* OTP MODAL */}
            {otpOpen && (
              <OTPModal
                email={email}
                onClose={() => setOtpOpen(false)}
                onVerified={handleVerified}
              />
            )}

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button
                onClick={() => (window.location.href = "/api/auth/google")}
                className="bg-white/10 border-white/10 text-white h-12"
              >
                <Chrome className="w-4 h-4 mr-2" /> Google
              </Button>

              <Button className="bg-white/10 border-white/10 text-white h-12">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </Button>
            </div>

            <p className="text-center text-gray-400 mt-6 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-purple-400">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
