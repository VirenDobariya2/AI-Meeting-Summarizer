"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyOtpPage() {
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email") || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid OTP");
      const role = data.user?.role || "user";
      router.push(role === "admin" ? "/dashboard-admin" : "/dashboard");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "OTP invalid";
      alert(errorMessage || "OTP invalid");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white/5 p-6 rounded">
        <h2 className="text-xl text-white mb-4">Verify OTP</h2>
        <p className="text-sm text-gray-300 mb-3">Email: {email}</p>
        <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="w-full p-3 rounded bg-transparent border border-white/10 text-white mb-3" />
        <button className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded" disabled={loading}>{loading ? "Verifying..." : "Verify"}</button>
      </form>
    </div>
  );
}
