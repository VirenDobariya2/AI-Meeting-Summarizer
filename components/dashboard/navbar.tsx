"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Bell, Sun, Moon, Monitor, User, ChevronDown } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"

// interface NavbarProps {
//   onOpenCommandPalette: () => void
// }

export default function Navbar({ onOpenCommandPalette }) {
  const { theme, setTheme } = useTheme()

  // Dropdown states
  const [themeOpen, setThemeOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const themeRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!themeRef.current?.contains(e.target)) setThemeOpen(false)
      if (!userRef.current?.contains(e.target)) setUserOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const getThemeIcon = () => {
    if (theme === "light") return <Sun className="w-4 h-4" />
    if (theme === "dark") return <Moon className="w-4 h-4" />
    return <Monitor className="w-4 h-4" />
  }

  return (
    <motion.header
      className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <button
          onClick={onOpenCommandPalette}
          className="w-full h-10 px-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <Search className="w-4 h-4" />
              <span>Search or jump to...</span>
            </div>

            {/* CMD + K */}
            <div className="flex items-center space-x-1">
              <kbd className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-600 font-mono">
                ⌘
              </kbd>
              <kbd className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-600 font-mono">
                K
              </kbd>
            </div>
          </div>
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-3 ml-4">

        {/* Notifications */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Theme Switcher (Manual Dropdown) */}
        <div ref={themeRef} className="relative">
          <button
            onClick={() => setThemeOpen(!themeOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {getThemeIcon()}
          </button>

          {themeOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <button
                onClick={() => {
                  setTheme("light")
                  setThemeOpen(false)
                }}
                className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
              >
                <Sun className="w-4 h-4 mr-2" /> Light
              </button>

              <button
                onClick={() => {
                  setTheme("dark")
                  setThemeOpen(false)
                }}
                className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
              >
                <Moon className="w-4 h-4 mr-2" /> Dark
              </button>

              <button
                onClick={() => {
                  setTheme("system")
                  setThemeOpen(false)
                }}
                className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
              >
                <Monitor className="w-4 h-4 mr-2" /> System
              </button>
            </div>
          )}
        </div>

        {/* User Menu (Manual Dropdown) */}
        <div ref={userRef} className="relative">
          <button
            onClick={() => setUserOpen(!userOpen)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {userOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                Settings
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                Billing
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </motion.header>
  )
}
