"use client";

import { Sidebar } from "@/components/admin/sidebar";
import TopBar from "@/components/admin/topbar";

import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  title?: string;
}

export default function AdminLayout({
  children,
  currentPage = "dashboard",
  onNavigate = () => {},
  title = "Admin Panel",
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <div className="ml-64">
        <TopBar  />
        <main className="pt-16">
          <div className="px-6 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
