"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend 
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Clock, Target, Calendar } from 'lucide-react';

const weeklyData = [
  { name: 'Mon', meetings: 12, duration: 8.5, tasks: 34 },
  { name: 'Tue', meetings: 19, duration: 12.3, tasks: 45 },
  { name: 'Wed', meetings: 15, duration: 10.2, tasks: 38 },
  { name: 'Thu', meetings: 22, duration: 14.8, tasks: 52 },
  { name: 'Fri', meetings: 18, duration: 11.5, tasks: 41 },
  { name: 'Sat', meetings: 5, duration: 3.2, tasks: 12 },
  { name: 'Sun', meetings: 3, duration: 2.1, tasks: 8 },
];

const monthlyData = [
  { month: 'Jan', meetings: 245, participants: 1850 },
  { month: 'Feb', meetings: 289, participants: 2100 },
  { month: 'Mar', meetings: 312, participants: 2350 },
  { month: 'Apr', meetings: 278, participants: 2050 },
  { month: 'May', meetings: 334, participants: 2580 },
  { month: 'Jun', meetings: 356, participants: 2720 },
];

const meetingTypeData = [
  { name: 'Team Standups', value: 35, color: '#3b82f6' },
  { name: 'Client Calls', value: 25, color: '#8b5cf6' },
  { name: 'Planning', value: 20, color: '#ec4899' },
  { name: 'Reviews', value: 15, color: '#10b981' },
  { name: 'Other', value: 5, color: '#f59e0b' },
];

export default function Analytics() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Track your meeting insights and productivity metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: 'Total Meetings',
            value: '1,847',
            change: '+12.5%',
            trend: 'up',
            icon: Calendar,
            color: 'from-blue-600 to-purple-600'
          },
          {
            label: 'Avg. Duration',
            value: '42 min',
            change: '-8.2%',
            trend: 'down',
            icon: Clock,
            color: 'from-purple-600 to-pink-600'
          },
          {
            label: 'Total Participants',
            value: '15,420',
            change: '+18.7%',
            trend: 'up',
            icon: Users,
            color: 'from-pink-600 to-rose-600'
          },
          {
            label: 'Tasks Created',
            value: '3,428',
            change: '+23.1%',
            trend: 'up',
            icon: Target,
            color: 'from-green-600 to-emerald-600'
          },
        ].map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
                  kpi.trend === 'up' 
                    ? 'bg-green-100 dark:bg-green-950/20 text-green-600 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-950/20 text-red-600 dark:text-red-400'
                }`}>
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm">{kpi.change}</span>
                </div>
              </div>
              <p className="text-3xl text-gray-900 dark:text-white mb-1">{kpi.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{kpi.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Weekly Meetings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h3 className="text-lg text-gray-900 dark:text-white mb-4">Weekly Meeting Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <defs>
                <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="meetings" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorMeetings)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Meeting Types Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h3 className="text-lg text-gray-900 dark:text-white mb-4">Meeting Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={meetingTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {meetingTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {meetingTypeData.map((type) => (
              <div key={type.name} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                <span className="text-sm text-gray-600 dark:text-gray-400">{type.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h3 className="text-lg text-gray-900 dark:text-white mb-4">Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="meetings" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="participants" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Daily Duration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h3 className="text-lg text-gray-900 dark:text-white mb-4">Daily Meeting Duration (hours)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="duration" fill="url(#colorBar)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={1}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={1}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
