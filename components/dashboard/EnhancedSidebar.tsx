"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import {
  LayoutDashboard,
  Video,
  Clock,
  Upload,
  CheckSquare,
  Mail,
  Sparkles,
  Puzzle,
  BarChart2,
  Users,
  Star,
  Settings,
  TrendingUp,
  User,
  Badge,
  LucideIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "meetings", label: "Meetings", icon: Video },
  { id: "meetingStatus", label: "Meeting Status", icon: Clock }, // matches dashboard/meetingStatus
  { id: "uploads", label: "Uploads", icon: Upload, badge: "New" }, // matches dashboard/upload
  { id: "actionItems", label: "Action Items", icon: CheckSquare }, // matches dashboard/actionItems
  { id: "emailAgent", label: "Email Agent", icon: Mail },           // matches dashboard/email-agent
  { id: "aiWorkspace", label: "AI Workspace", icon: Sparkles },    // matches dashboard/ai-workspace
  { id: "integration", label: "Integration", icon: Puzzle },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "team", label: "Team", icon: Users },
  { id: "upgrade", label: "Upgrade", icon: Star, badge: "Pro" },
  { id: "settings", label: "Settings", icon: Settings },
];


interface EnhancedSidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

export default function EnhancedSidebar({
  activeItem,
  onNavigate,
}: EnhancedSidebarProps) {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Guest User";
  const userEmail = session?.user?.email || "user@email.com";

  return (
    <motion.aside
      className="w-60 h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-800 flex flex-col sticky top-0"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-md opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <div>
            <span className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              MemoMeet
            </span>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              AI Workspace
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-scroll no-scrollbar">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Button
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center space-x-3 flex-1">
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-all",
                      isActive
                        ? "text-white scale-110"
                        : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm transition-all",
                      isActive ? "text-white" : ""
                    )}
                  >
                    {item.label}
                  </span>
                </div>

                {item.badge && (
                  <Badge
                    className={cn(
                      "relative z-10 text-xs",
                      isActive
                        ? "bg-white/20 text-white border-0"
                        : item.badge === "New"
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0"
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </motion.div>
          );
        })}
      </nav>

      {/* Stats Card */}
      <div className="px-4 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl border border-blue-100 dark:border-blue-900/30"
        >
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xs text-gray-700 dark:text-gray-300">This Week</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-lg text-gray-900 dark:text-white">247</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Meetings</p>
            </div>
            <div>
              <p className="text-lg text-gray-900 dark:text-white">1,834</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Tasks</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center ring-2 ring-offset-2 ring-blue-500/20 dark:ring-offset-gray-900">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {userName}
            </p>
            {userEmail && <p className="text-sm opacity-70">{userEmail}</p>}
          </div>
        </Button>
      </div>
    </motion.aside>
  );
}
