"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Plus, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';


const integrations = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Send meeting summaries to your Slack channels',
    category: 'Communication',
    connected: true,
    icon: '💬',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Automatically email summaries to participants',
    category: 'Email',
    connected: true,
    icon: '📧',
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'Auto-record and process Zoom meetings',
    category: 'Video',
    connected: true,
    icon: '📹',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Sync meeting notes to your CRM',
    category: 'CRM',
    connected: false,
    icon: '🎯',
    color: 'from-orange-600 to-amber-600'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Save summaries to your Notion workspace',
    category: 'Productivity',
    connected: false,
    icon: '📝',
    color: 'from-gray-700 to-gray-900'
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Sync with your calendar events',
    category: 'Calendar',
    connected: true,
    icon: '📅',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    description: 'Record and analyze Teams meetings',
    category: 'Video',
    connected: false,
    icon: '👥',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Update deals and contacts automatically',
    category: 'CRM',
    connected: false,
    icon: '☁️',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'Create tasks from action items',
    category: 'Project Management',
    connected: false,
    icon: '✅',
    color: 'from-pink-600 to-rose-600'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Store recordings and transcripts',
    category: 'Storage',
    connected: false,
    icon: '📦',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Convert action items into Jira tickets',
    category: 'Project Management',
    connected: false,
    icon: '🔷',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'webhooks',
    name: 'Webhooks',
    description: 'Send data to your custom endpoints',
    category: 'Developer',
    connected: false,
    icon: '🔗',
    color: 'from-gray-600 to-gray-800'
  },
];

const categories = ['All', 'Communication', 'Email', 'Video', 'CRM', 'Productivity', 'Calendar', 'Project Management', 'Storage', 'Developer'];

export default function Integration() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.filter(i => i.connected).map(i => i.id)
  );

  const filteredIntegrations = selectedCategory === 'All' 
    ? integrations 
    : integrations.filter(i => i.category === selectedCategory);

  const toggleIntegration = (id: string) => {
    setConnectedIntegrations(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Integrations</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect MemoMeet with your favorite tools and services</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
        >
          <p className="text-3xl mb-1">{connectedIntegrations.length}</p>
          <p className="text-blue-100">Active Integrations</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <p className="text-3xl text-gray-900 dark:text-white mb-1">{integrations.length}</p>
          <p className="text-gray-600 dark:text-gray-400">Available Apps</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <p className="text-3xl text-gray-900 dark:text-white mb-1">12K+</p>
          <p className="text-gray-600 dark:text-gray-400">Synced Events</p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm transition-all duration-200",
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-blue-400"
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration, index) => {
          const isConnected = connectedIntegrations.includes(integration.id);
          
          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "bg-white dark:bg-gray-900 rounded-2xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden",
                isConnected 
                  ? "border-blue-200 dark:border-blue-900/30" 
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              {isConnected && (
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                />
              )}
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg bg-gradient-to-br",
                    integration.color
                  )}>
                    {integration.icon}
                  </div>
                  
                  {isConnected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-950/20 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-xs text-green-600 dark:text-green-400">Connected</span>
                    </motion.div>
                  )}
                </div>
                
                <h3 className="text-lg text-gray-900 dark:text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{integration.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {integration.category}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    {isConnected && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                      </motion.button>
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleIntegration(integration.id)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm transition-all duration-200 flex items-center space-x-1",
                        isConnected
                          ? "bg-red-100 dark:bg-red-950/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-950/30"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      )}
                    >
                      {isConnected ? (
                        <span>Disconnect</span>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Connect</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
