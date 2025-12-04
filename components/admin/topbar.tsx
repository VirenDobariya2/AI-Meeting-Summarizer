"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Sun, Moon, Monitor, Search as SearchIcon, Search, Bell } from "lucide-react";
import { signOut } from "next-auth/react";

interface TopBarProps {
  pageTitle?: string;
  onOpenCommandPalette?: () => void;
}

export default function TopBar({ pageTitle = "ADMIN", onOpenCommandPalette }: TopBarProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <motion.header
      className="h-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-between px-6 sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left: Page title */}
      <div className="text-xl font-semibold text-gray-800 dark:text-white">{pageTitle}</div>

      {/* Middle: Search box */}
      <div className="flex items-center space-x-3">
         <button
          onClick={onOpenCommandPalette}
          className="flex items-center justify-between space-x-2 w-72 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex space-x-2  items-center ">
            <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-400 hidden md:inline">Search</span>
            </div>
          
          <div className="flex items-center space-x-1">
            <kbd className="px-1.5 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-600 font-mono">
              ⌘K
            </kbd>
          </div>
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      

      {/* Right: Actions */}
      
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          title="Toggle Theme"
        >
          {theme === "light" ? <Sun className="w-5 h-5" /> : theme === "dark" ? <Moon className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
        </button>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span>Account</span>
          </button>

          {/* Dropdown */}
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50">
              <ul className="flex flex-col">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => alert("Profile")}
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => alert("Settings")}
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      
      </div>
    </motion.header>
  );
}
