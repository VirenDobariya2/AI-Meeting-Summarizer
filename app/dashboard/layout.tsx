"use client";

import React, { ReactNode } from "react";
import EnhancedSidebar from "@/components/dashboard/EnhancedSidebar";
import { usePathname, useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import TopBar from "@/components/dashboard/topbar";


interface LayoutProps {
  children: ReactNode;
}

const navMap: Record<string, string> = {
  overview: "/dashboard",
  meetings: "/dashboard/meetings",
  actionItems: "/dashboard/actionItems",
  settings: "/dashboard/settings",
  uploads: "/dashboard/upload",
  meetingStatus: "/dashboard/meetingStatus",
  emailAgent: "/dashboard/emailAgent",
  aiWorkspace: "/dashboard/aiWorkspace",
  integration: "/dashboard/integration",
  analytics: "/dashboard/analytics",
  team: "/dashboard/team",
  upgrade: "/dashboard/upgrade",
};

export default function DashboardLayout({ children }: LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const activeItem =
    Object.keys(navMap).find((key) => navMap[key] === pathname) || "overview";

  const handleNavigate = (item: string) => {
    const url = navMap[item] || "/dashboard";
    router.push(url);
  };
   const handleOpenCommandPalette = () => {
    // TODO: implement your command palette logic
    console.log("Command palette opened");
  };

  return (
    <SessionProvider>
      <div className="flex h-screen">
        <EnhancedSidebar activeItem={activeItem} onNavigate={handleNavigate} />
        <div className="flex-1 flex flex-col">
          <TopBar onOpenCommandPalette={handleOpenCommandPalette} />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SessionProvider>
  );
}
