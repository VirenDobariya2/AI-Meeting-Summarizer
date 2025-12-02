"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { GradientMesh } from "./effects/GradientMesh";
import { CursorGlow } from "./effects/CursorGlow";
import TopBar from "./topbar";
import CommandPalette from "./CommandPalette";
import EnhancedSidebar from "./EnhancedSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export default function DashboardLayout({
  children,
  activeItem,
  onNavigate,
}: DashboardLayoutProps) {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <GradientMesh />
      <CursorGlow />

      <EnhancedSidebar
  activeItem={activeItem ?? ""}
  onNavigate={onNavigate ?? (() => {})}
/>
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <TopBar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

    <CommandPalette
  isOpen={isCommandPaletteOpen}
  onClose={() => setIsCommandPaletteOpen(false)}
  onNavigate={onNavigate ?? (() => {})}
/>
    </div>
  );
}
