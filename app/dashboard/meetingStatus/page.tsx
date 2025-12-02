"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, AlertCircle, Loader2, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';


const statusData = [
  {
    id: 1,
    title: 'Q4 Product Planning Meeting',
    time: '2:00 PM - 3:30 PM',
    date: 'Today',
    status: 'completed',
    participants: 12,
    duration: '1h 30m',
    aiProgress: 100
  },
  {
    id: 2,
    title: 'Engineering Standup',
    time: '10:00 AM - 10:15 AM',
    date: 'Today',
    status: 'in-progress',
    participants: 8,
    duration: '0h 15m',
    aiProgress: 65
  },
  {
    id: 3,
    title: 'Client Onboarding Call',
    time: '3:00 PM - 4:00 PM',
    date: 'Tomorrow',
    status: 'scheduled',
    participants: 5,
    duration: '1h 00m',
    aiProgress: 0
  },
  {
    id: 4,
    title: 'Marketing Strategy Review',
    time: '11:00 AM - 12:00 PM',
    date: 'Today',
    status: 'failed',
    participants: 6,
    duration: '1h 00m',
    aiProgress: 0
  },
  {
    id: 5,
    title: 'Design Sprint Retrospective',
    time: '4:00 PM - 5:00 PM',
    date: 'Yesterday',
    status: 'completed',
    participants: 10,
    duration: '1h 00m',
    aiProgress: 100
  },
];

const statusConfig = {
  completed: {
    label: 'Completed',
    icon: CheckCircle2,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    borderColor: 'border-green-200 dark:border-green-900/30',
    dotColor: 'bg-green-500'
  },
  'in-progress': {
    label: 'In Progress',
    icon: Loader2,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    borderColor: 'border-blue-200 dark:border-blue-900/30',
    dotColor: 'bg-blue-500'
  },
  scheduled: {
    label: 'Scheduled',
    icon: Clock,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    borderColor: 'border-purple-200 dark:border-purple-900/30',
    dotColor: 'bg-purple-500'
  },
  failed: {
    label: 'Failed',
    icon: AlertCircle,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/20',
    borderColor: 'border-red-200 dark:border-red-900/30',
    dotColor: 'bg-red-500'
  }
};

export default function MeetingStatus() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Meeting Status</h1>
        <p className="text-gray-600 dark:text-gray-400">Track the status of all your meetings and AI processing</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Meetings', value: '247', icon: Calendar, color: 'from-blue-600 to-purple-600' },
          { label: 'In Progress', value: '3', icon: Loader2, color: 'from-blue-500 to-cyan-500' },
          { label: 'Completed Today', value: '12', icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
          { label: 'Failed', value: '1', icon: AlertCircle, color: 'from-red-500 to-pink-500' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                  stat.color
                )}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-3xl text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {statusData.map((meeting, index) => {
          const config = statusConfig[meeting.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;

          return (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "bg-white dark:bg-gray-900 rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300",
                config.borderColor
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={cn("p-2 rounded-lg", config.bgColor)}>
                      <StatusIcon className={cn("w-5 h-5", config.color, meeting.status === 'in-progress' && 'animate-spin')} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white">{meeting.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{meeting.date} • {meeting.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 ml-14">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{meeting.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{meeting.duration}</span>
                    </div>
                  </div>

                  {meeting.status === 'in-progress' && (
                    <div className="mt-4 ml-14">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">AI Processing</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{meeting.aiProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${meeting.aiProgress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className={cn("px-3 py-1 rounded-lg text-sm", config.bgColor, config.color)}>
                  {config.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
