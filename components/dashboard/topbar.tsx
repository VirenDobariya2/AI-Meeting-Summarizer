import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Sun, Moon, Monitor, User, ChevronDown, Command } from 'lucide-react';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useTheme } from '../theme-provider';

interface TopBarProps {
  onOpenCommandPalette: () => void;
  pageTitle?: string;
}

export default function TopBar({ onOpenCommandPalette, pageTitle = 'Overview' }: TopBarProps) {
  const { theme, setTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4" />;
    if (theme === 'dark') return <Moon className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <motion.header 
      className="h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-40"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left side - Page Title */}
      <div className="flex items-center space-x-6">
        <h2 className="text-xl text-gray-900 dark:text-white">{pageTitle}</h2>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-3">
        {/* Command Palette Button */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center space-x-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all"
        >
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600 dark:text-gray-400 hidden md:inline">Search</span>
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

        {/* Theme Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="w-10 h-10">
              {getThemeIcon()}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className="w-4 h-4 mr-2" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon className="w-4 h-4 mr-2" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Monitor className="w-4 h-4 mr-2" />
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.header>
  );
}