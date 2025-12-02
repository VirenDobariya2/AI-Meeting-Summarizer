"use client";

import React from "react";

export default function Upload() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Upload Meeting</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Upload your meeting audio or video here.
      </p>
      <input type="file" accept="audio/*,video/*" className="border p-2 rounded mb-4" />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Upload</button>
    </div>
  );
}
