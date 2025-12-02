import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle, Mail, Calendar, Clock, Users, Badge } from 'lucide-react';

import { Card } from '../../ui/card';
import FloatingParticles from '../FloatingParticles';


export function Overview() {
  const stats = [
    { 
      label: 'Total Meetings Summarized', 
      value: '247', 
      change: '+12%', 
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Total Action Items', 
      value: '1,834', 
      change: '+8%', 
      icon: CheckCircle,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: 'Email Drafts Generated', 
      value: '156', 
      change: '+24%', 
      icon: Mail,
      color: 'from-pink-500 to-pink-600'
    },
  ];

  const recentMeetings = [
    {
      id: 1,
      title: 'Q4 Product Roadmap Review',
      date: '2025-11-18',
      time: '10:00 AM',
      duration: '45 min',
      attendees: 8,
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      id: 2,
      title: 'Marketing Campaign Strategy',
      date: '2025-11-17',
      time: '2:30 PM',
      duration: '60 min',
      attendees: 5,
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      id: 3,
      title: 'Engineering Sprint Planning',
      date: '2025-11-16',
      time: '9:00 AM',
      duration: '90 min',
      attendees: 12,
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      id: 4,
      title: 'Customer Success Review',
      date: '2025-11-15',
      time: '3:00 PM',
      duration: '30 min',
      attendees: 4,
      status: 'processing',
      statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    },
  ];

  const aiSuggestions = [
    {
      id: 1,
      title: 'Follow up on Q4 roadmap decisions',
      meeting: 'Q4 Product Roadmap Review',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Schedule 1-on-1 with design team',
      meeting: 'Engineering Sprint Planning',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Review marketing budget allocation',
      meeting: 'Marketing Campaign Strategy',
      priority: 'low'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <motion.div 
        className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FloatingParticles />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl text-gray-900 dark:text-white">
              Welcome Back, John! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You have 12 meetings scheduled this week and 23 pending action items.
            </p>
          </div>
          
          {/* 3D AI Assistant Illustration Placeholder */}
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-3xl text-gray-900 dark:text-white">{stat.value}</p>
                    <div className="flex items-center space-x-1 text-green-600 dark:text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Meetings */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900 dark:text-white">Recent Meetings</h2>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors cursor-pointer"
                >
                  <div className="flex-1 space-y-1">
                    <h3 className="text-sm text-gray-900 dark:text-white">{meeting.title}</h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{meeting.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{meeting.time} • {meeting.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{meeting.attendees} attendees</span>
                      </span>
                    </div>
                  </div>
                  <Badge className={`${meeting.statusColor} border-0`}>
                    {meeting.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* AI Suggestions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.div>
              </div>
              <h2 className="text-xl text-gray-900 dark:text-white">AI Suggestions</h2>
            </div>

            <div className="space-y-4">
              {aiSuggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm text-gray-900 dark:text-white flex-1">
                      {suggestion.title}
                    </h3>
                    <Badge 
                      
                      className={`ml-2 text-xs ${
                        suggestion.priority === 'high' 
                          ? 'border-red-300 text-red-700 dark:border-red-700 dark:text-red-400' 
                          : suggestion.priority === 'medium'
                          ? 'border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-400'
                          : 'border-green-300 text-green-700 dark:border-green-700 dark:text-green-400'
                      }`}
                    >
                      {suggestion.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    From: {suggestion.meeting}
                  </p>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 rounded-lg transition-colors">
              View More Suggestions
            </button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
