"use client";
import React, { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      alert("Reset email sent — check your inbox");
    } catch (err: any) {
      alert(err.message || "Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={submit} className="w-full max-w-md bg-white/5 p-6 rounded">
        <h2 className="text-xl text-black mb-4">Forgot Password</h2>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-transparent border border-gray-600 text-black mb-3" />
        <button className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded" disabled={loading}>Send reset link</button>
      </form>
    </div>
  );
}
