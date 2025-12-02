import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Video,
  CheckCircle,
  Mail,
  Calendar,
  Clock,
  Zap,
  Brain,
  Sparkles,
  ArrowUpRight,
  Badge,
} from 'lucide-react';
import { Card } from '../ui/card';

import { Button } from '../ui/button';

export default function BentoOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Good morning, John 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what's happening with your meetings today
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 group">
          <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          Ask AI
        </Button>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-4 auto-rows-[140px]">
        {/* Large Hero Card - Spans 6 columns and 2 rows */}
        <motion.div
          className="col-span-12 md:col-span-6 row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full p-6 bg-gradient-to-br from-blue-500 to-purple-600 border-0 text-white overflow-hidden relative group cursor-pointer hover:shadow-2xl transition-all">
            {/* Animated background circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm mb-4">
                  This Week
                </Badge>
                <h2 className="text-3xl mb-2">247 Meetings</h2>
                <p className="text-white/80 text-sm">Analyzed by AI</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+23% from last week</span>
                </div>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Action Items Card */}
        <motion.div
          className="col-span-6 md:col-span-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400">
                Active
              </Badge>
            </div>
            <div>
              <p className="text-2xl text-gray-900 dark:text-white mb-1">1,834</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Action Items</p>
            </div>
          </Card>
        </motion.div>

        {/* Email Drafts Card */}
        <motion.div
          className="col-span-6 md:col-span-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          <Card className="h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-400">
                New
              </Badge>
            </div>
            <div>
              <p className="text-2xl text-gray-900 dark:text-white mb-1">156</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email Drafts</p>
            </div>
          </Card>
        </motion.div>

        {/* AI Insights Card - Spans 2 rows */}
        <motion.div
          className="col-span-12 md:col-span-3 row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30 overflow-hidden relative">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm text-gray-900 dark:text-white">AI Insights</h3>
            </div>

            <div className="space-y-3">
              {[
                { icon: Brain, text: 'Meeting patterns suggest scheduling morning calls', color: 'from-blue-500 to-blue-600' },
                { icon: Zap, text: 'Your response time improved by 40%', color: 'from-purple-500 to-purple-600' },
                { icon: TrendingUp, text: 'Action item completion rate: 87%', color: 'from-green-500 to-green-600' },
              ].map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg border border-purple-100 dark:border-purple-900/30"
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${insight.color} rounded flex items-center justify-center flex-shrink-0`}>
                    <insight.icon className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    {insight.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          className="col-span-6 md:col-span-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Card className="h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all cursor-pointer group">
            <div className="flex items-center space-x-3 mb-3">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm text-gray-600 dark:text-gray-400">Today</h3>
            </div>
            <p className="text-2xl text-gray-900 dark:text-white">5 meetings</p>
          </Card>
        </motion.div>

        <motion.div
          className="col-span-6 md:col-span-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all cursor-pointer group">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-sm text-gray-600 dark:text-gray-400">Total Time</h3>
            </div>
            <p className="text-2xl text-gray-900 dark:text-white">12.5 hrs</p>
          </Card>
        </motion.div>

        {/* Recent Activity - Full width */}
        <motion.div
          className="col-span-12 md:col-span-6 row-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 }}
        >
          <Card className="h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white">Recent Meetings</h3>
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400">
                View All
              </Button>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Product Strategy Review', time: '2 hours ago', attendees: 8, status: 'completed' },
                { title: 'Engineering Standup', time: '4 hours ago', attendees: 12, status: 'completed' },
                { title: 'Client Presentation', time: 'Tomorrow 10:00 AM', attendees: 5, status: 'upcoming' },
              ].map((meeting, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">{meeting.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{meeting.time} • {meeting.attendees} attendees</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      meeting.status === 'completed'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-0'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0'
                    }
                  >
                    {meeting.status}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
