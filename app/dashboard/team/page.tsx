"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, Mail, MoreVertical, Crown, Shield, User as UserIcon, 
  Trash2, Settings, Calendar, Clock 
} from 'lucide-react';
import { cn } from '@/lib/utils';


const teamMembers = [
  {
    id: 1,
    name: 'Sarah Anderson',
    email: 'sarah@company.com',
    role: 'Owner',
    avatar: '👩‍💼',
    status: 'online',
    meetings: 247,
    lastActive: 'Active now',
    joinedDate: 'Jan 2024'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael@company.com',
    role: 'Admin',
    avatar: '👨‍💻',
    status: 'online',
    meetings: 189,
    lastActive: 'Active now',
    joinedDate: 'Jan 2024'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily@company.com',
    role: 'Member',
    avatar: '👩‍🎨',
    status: 'away',
    meetings: 156,
    lastActive: '2 hours ago',
    joinedDate: 'Feb 2024'
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james@company.com',
    role: 'Member',
    avatar: '👨‍🚀',
    status: 'offline',
    meetings: 134,
    lastActive: 'Yesterday',
    joinedDate: 'Feb 2024'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    email: 'lisa@company.com',
    role: 'Member',
    avatar: '👩‍🔬',
    status: 'online',
    meetings: 201,
    lastActive: 'Active now',
    joinedDate: 'Mar 2024'
  },
  {
    id: 6,
    name: 'David Kim',
    email: 'david@company.com',
    role: 'Member',
    avatar: '👨‍🎓',
    status: 'away',
    meetings: 98,
    lastActive: '1 hour ago',
    joinedDate: 'Mar 2024'
  },
];

const roleConfig = {
  Owner: { icon: Crown, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-950/20' },
  Admin: { icon: Shield, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-950/20' },
  Member: { icon: UserIcon, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-950/20' },
};

const statusConfig = {
  online: { color: 'bg-green-500', label: 'Online' },
  away: { color: 'bg-yellow-500', label: 'Away' },
  offline: { color: 'bg-gray-400', label: 'Offline' },
};

export default function Team() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Team</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your team members and permissions</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowInviteModal(true)}
          className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <UserPlus className="w-5 h-5" />
          <span>Invite Member</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Members', value: teamMembers.length, icon: UserIcon, color: 'from-blue-600 to-purple-600' },
          { label: 'Active Now', value: teamMembers.filter(m => m.status === 'online').length, icon: Clock, color: 'from-green-500 to-emerald-500' },
          { label: 'Total Meetings', value: '1,025', icon: Calendar, color: 'from-purple-600 to-pink-600' },
          { label: 'Avg per Member', value: '171', icon: Settings, color: 'from-pink-600 to-rose-600' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 shadow-lg",
                stat.color
              )}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => {
          const RoleIcon = roleConfig[member.role as keyof typeof roleConfig].icon;
          
          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveMenu(activeMenu === member.id ? null : member.id)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors opacity-0 group-hover:opacity-100"
              >
                <MoreVertical className="w-4 h-4" />
              </motion.button>

              {/* Avatar */}
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-3">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl shadow-lg">
                    {member.avatar}
                  </div>
                  <div className={cn(
                    "absolute bottom-0 right-0 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900",
                    statusConfig[member.status as keyof typeof statusConfig].color
                  )} />
                </div>
                
                <h3 className="text-lg text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{member.email}</p>
                
                {/* Role Badge */}
                <div className={cn(
                  "flex items-center space-x-2 px-3 py-1 rounded-lg",
                  roleConfig[member.role as keyof typeof roleConfig].bg
                )}>
                  <RoleIcon className={cn("w-4 h-4", roleConfig[member.role as keyof typeof roleConfig].color)} />
                  <span className={cn("text-sm", roleConfig[member.role as keyof typeof roleConfig].color)}>
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center">
                  <p className="text-xl text-gray-900 dark:text-white mb-1">{member.meetings}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Meetings</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-900 dark:text-white mb-1">{member.lastActive}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Last Active</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm hover:shadow-lg transition-all duration-300"
                >
                  Message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeMenu === member.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute top-14 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-10 min-w-[160px]"
                  >
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Edit Role</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors flex items-center space-x-2">
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Invite Modal */}
      <AnimatePresence>
        {showInviteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowInviteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Invite Team Member</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="colleague@company.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Role</label>
                  <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white">
                    <option>Member</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Send Invitation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowInviteModal(false)}
                  className="px-6 py-3 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
