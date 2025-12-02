"use client";
import React, { useState } from "react";

export default function OTPModal({ email, onClose, onVerified }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function verify() {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid OTP");

      // 🔥 Store session token for Dashboard
      localStorage.setItem("authToken", data.token || "user-logged-in");

      onVerified(data.user?.role || "user");
    } catch (e) {
      setErr(e.message || "OTP failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm bg-white/5 p-6 rounded">
        <h3 className="text-white mb-2">Enter OTP</h3>
        <p className="text-sm text-gray-300 mb-3">OTP sent to {email}</p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 rounded bg-transparent border border-white/10 text-white mb-3"
          placeholder="6-digit code"
        />

        {err && <p className="text-xs text-red-400 mb-2">{err}</p>}

        <div className="flex gap-2">
          <button
            className="flex-1 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
            onClick={verify}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

          <button
            className="flex-1 p-2 border border-white/10 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
