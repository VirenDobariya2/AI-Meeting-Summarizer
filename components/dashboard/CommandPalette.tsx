import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  LayoutDashboard,
  Video,
  CheckSquare,
  Mail,
  Settings,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface Command {
  id: string;
  label: string;
  icon: React.ElementType;
  group: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const commands = [
  { id: 'overview', label: 'Go to Overview', icon: LayoutDashboard, group: 'Navigation' },
  { id: 'meetings', label: 'Go to Meetings', icon: Video, group: 'Navigation' },
  { id: 'action-items', label: 'Go to Action Items', icon: CheckSquare, group: 'Navigation' },
  { id: 'email-agent', label: 'Go to Email Agent', icon: Mail, group: 'Navigation' },
  { id: 'ai-workspace', label: 'Go to AI Workspace', icon: Sparkles, group: 'Navigation' },
  { id: 'settings', label: 'Go to Settings', icon: Settings, group: 'Navigation' },
];

export default function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        onNavigate(filteredCommands[selectedIndex].id);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onNavigate, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Command Palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center space-x-3 px-4 py-4 border-b border-gray-200 dark:border-gray-800">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                autoFocus
                className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
              />
              <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                ESC
              </kbd>
            </div>

            {/* Commands List */}
            <div className="max-h-96 overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-gray-500 dark:text-gray-400 text-sm">
                  No commands found
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredCommands.map((cmd, index) => {
                    const Icon = cmd.icon;
                    const isSelected = index === selectedIndex;

                    return (
                      <motion.button
                        key={cmd.id}
                        onClick={() => {
                          onNavigate(cmd.id);
                          onClose();
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                          isSelected
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                                : 'bg-gray-100 dark:bg-gray-800'
                            }`}
                          >
                            <Icon
                              className={`w-4 h-4 ${
                                isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                              }`}
                            />
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white">{cmd.label}</span>
                        </div>
                        {isSelected && (
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <span>Powered by MemoMeet AI</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
