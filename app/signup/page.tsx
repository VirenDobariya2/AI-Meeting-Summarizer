"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Chrome, Loader2 } from "lucide-react";
import Link from "next/link";
import { AnimatedOrb } from "@/components/AnimatedOrb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";



export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please check and try again.",
        variant: "destructive",
      });
      return false;
    }

    if (password.length < 8) {
      toast({
        title: "Weak password",
        description: "Password should be at least 8 characters.",
        variant: "destructive",
      });
      return false;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms required",
        description: "You must accept the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!validate()) return;
  setIsLoading(true);
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fullName, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");
    // server sets cookie -> redirect according to role
    const role = data.user?.role || "user";
    if (role === "admin") router.push("/dashboard-admin");
    else router.push("/dashboard");
  } catch (err: any) {
    toast({ title: "Signup failed", description: err.message || "Error", variant: "destructive" });
  } finally {
    setIsLoading(false);
  }
};




return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#05010f] relative overflow-hidden">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Section - Visual & Animation */}
        <motion.div
          className="hidden lg:flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-md">
            <AnimatedOrb />
          </div>

          <div className="text-center space-y-4 px-8">
            <motion.h1
              className="text-4xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link href="/" className="flex justify-center text-center">
                <Image src="/memologo.png" alt="Logo" width={50} height={50} /> MemoMeet 
              </Link>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join MemoMeet — Let AI make your meetings smarter.
            </motion.p>

            <motion.div
              className="space-y-3 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { icon: "🤖", title: "AI-Powered Summaries", desc: "Get instant meeting recaps" },
                { icon: "📝", title: "Smart Action Items", desc: "Never miss a follow-up" },
                { icon: "🔗", title: "Seamless Integration", desc: "Works with your tools" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.45 }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <div className="text-white text-sm">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Sign Up Form */}
        <motion.div
          className="w-full max-w-md mx-auto relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-500/20 relative z-10">
            <div className="lg:hidden text-center mb-6">
              <h1 className="text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MemoMeet
              </h1>
              <p className="text-gray-300 text-sm mt-1">AI Meeting Summarizer</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl text-white">Create Account</h2>
                <p className="text-gray-400 text-sm">Get started with MemoMeet today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-purple-400 focus:ring-purple-400/20"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(Boolean(checked))}
                    className="border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                    disabled={isLoading}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
                    I agree to the{" "}
                    <Link href="/termsOfService" className="text-purple-400 hover:text-purple-300 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacyPolicy" className="text-purple-400 hover:text-purple-300 underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 text-gray-400 bg-transparent">Or continue with</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  Google
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="h-11 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.4 24H0V8.4h11.4V24zM24 24H12.6V8.4H24V24zM11.4 7.2H0V0h11.4v7.2zM24 7.2H12.6V0H24v7.2z" />
                  </svg>
                  Microsoft
                </Button>
              </div>

              {/* Footer Links */}
              <p className="text-xs text-gray-500 text-center mt-2">
                Already have an account?{" "}
                <Link href="/login" className="text-purple-400 hover:text-purple-300 underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl opacity-50 rounded-3xl transform scale-95" />
        </motion.div>
      </div>
    </div>
  );
}
