"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Chrome, Github, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedOrb } from "@/components/AnimatedOrb";
import OTPModal from "@/components/OTPModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
 const [isLoading, setIsLoading] = useState(false)
  const [otpOpen, setOtpOpen] = useState(false);

  // Handles login submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sign in with NextAuth credentials
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        alert(res.error);
        return;
      }

      // Fetch session to get user role
      const sessionRes = await fetch("/api/auth/session");
      const sessionData = await sessionRes.json();

      if (!sessionData?.user) throw new Error("No session found");

      if (sessionData.user.role === "admin") {
        // Admin logs in directly
        router.push("/admin");
      } else {
        // Normal user → send OTP
        await fetch("/api/auth/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        setOtpOpen(true);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  // When OTP is verified
  const handleVerified = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#05010f] relative overflow-hidden">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Section */}
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

        {/* Right Section - Login Form */}
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
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
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
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
                  />
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    className="border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-300 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <button className="text-purple-400 text-sm">Forgot Password?</button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 h-12"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
              </Button>
            </form>

            {/* OTP Modal */}
            {otpOpen && (
              <OTPModal
                email={email}
                onClose={() => setOtpOpen(false)}
                onVerified={handleVerified}
              />
            )}

            {/* Social Login */}
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
