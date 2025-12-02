import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Video, 
  CheckSquare, 
  Mail, 
  Sparkles, 
  Settings,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'meetings', label: 'Meetings', icon: Video },
  { id: 'action-items', label: 'Action Items', icon: CheckSquare },
  { id: 'email-agent', label: 'Email Agent', icon: Mail },
  { id: 'ai-workspace', label: 'AI Workspace', icon: Sparkles },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  return (
    <motion.aside 
      className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col sticky top-0"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MemoMeet
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-400" 
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "text-blue-600 dark:text-blue-400")} />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-800">
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm text-gray-900 dark:text-gray-100">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john@company.com</p>
          </div>
        </button>
      </div>
    </motion.aside>
  );
}
