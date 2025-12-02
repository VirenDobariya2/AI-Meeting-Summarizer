"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inbox, Send, FileText, Settings, Sparkles, Mail, RefreshCw } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Textarea } from '../../ui/textarea';

const emails = [
  {
    id: 1,
    from: 'sarah@company.com',
    subject: 'Q4 Budget Review Follow-up',
    preview: 'Thanks for the meeting yesterday. I wanted to follow up on...',
    time: '10:30 AM',
    unread: true,
    tags: ['budget', 'urgent']
  },
  {
    id: 2,
    from: 'mike@partner.io',
    subject: 'Partnership Proposal',
    preview: 'Hi, I hope this email finds you well. I wanted to discuss...',
    time: '9:15 AM',
    unread: true,
    tags: ['partnership']
  },
  {
    id: 3,
    from: 'team@slack.com',
    subject: 'Your Weekly Digest',
    preview: 'Here\'s what happened in your workspace this week...',
    time: 'Yesterday',
    unread: false,
    tags: ['newsletter']
  },
];

export function EmailAgent() {
  const [selectedEmail, setSelectedEmail] = useState(emails[0]);
  const [showAISuggestion, setShowAISuggestion] = useState(true);

  return (
    <div className="p-4 h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto h-full space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl text-gray-900 dark:text-white mb-2">Email Agent</h1>
          <p className="text-gray-600 dark:text-gray-400">
            AI-powered email management and composition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 h-[calc(100%-5rem)]">
          {/* Left Sidebar */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 h-full">
              <nav className="space-y-2">
                {[
                  { icon: Inbox, label: 'Inbox', count: 12 },
                  { icon: Send, label: 'Sent', count: 0 },
                  { icon: FileText, label: 'Drafts', count: 3 },
                  { icon: Sparkles, label: 'AI Templates', count: 0 },
                  { icon: Settings, label: 'Settings', count: 0 },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{item.label}</span>
                    </div>
                    {item.count > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {item.count}
                      </Badge>
                    )}
                  </button>
                ))}
              </nav>
            </Card>
          </motion.div>

          {/* Email List */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 h-full overflow-y-auto">
              <div className="space-y-2">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedEmail.id === email.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs">
                          {email.from[0].toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm ${email.unread ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                            {email.from}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{email.time}</span>
                    </div>
                    <h4 className={`text-sm mb-1 ${email.unread ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {email.subject}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {email.preview}
                    </p>
                    {email.unread && (
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          Unread
                        </Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Email Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
              {/* Email Header */}
              <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
                <h2 className="text-xl text-gray-900 dark:text-white mb-2">{selectedEmail.subject}</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                      {selectedEmail.from[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">{selectedEmail.from}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">to me</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{selectedEmail.time}</span>
                </div>
              </div>

              {/* AI Summary */}
              {showAISuggestion && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-4"
                >
                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200 dark:border-blue-900/30">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-sm text-gray-900 dark:text-white mb-2">AI Summary of this Email</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Sarah is following up on yesterday's Q4 budget meeting and requesting approval for the proposed marketing spend increase of 15%.
                        </p>
                      </div>
                      <button onClick={() => setShowAISuggestion(false)} className="text-gray-400 hover:text-gray-600">
                        ×
                      </button>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Email Body */}
              <div className="flex-1 overflow-y-auto prose dark:prose-invert max-w-none mb-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi there,
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Thanks for the meeting yesterday. I wanted to follow up on the Q4 budget discussion and get your approval on the proposed marketing spend increase.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As discussed, we're looking to increase the budget by 15% to support our new product launch campaign. This would allow us to expand our reach across digital channels and invest in targeted content creation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Could you please review the attached proposal and let me know your thoughts by Friday?
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Best regards,<br />
                  Sarah
                </p>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0">
                    budget
                  </Badge>
                  <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-0">
                    urgent
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Reply with AI
                  </Button>
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Rewrite
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right AI Panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4">
              {/* AI Assistant */}
              <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-sm text-gray-900 dark:text-white">AI Assistant</h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white mb-1">Suggested Reply</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      "Thanks Sarah, I've reviewed the proposal and approve the 15% increase..."
                    </p>
                  </div>

                  <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white mb-1">Related Meeting</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Q4 Budget Review - Nov 17
                    </p>
                  </div>

                  <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <p className="text-sm text-gray-900 dark:text-white mb-1">Action Item</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Review marketing proposal by Friday
                    </p>
                  </div>
                </div>
              </Card>

              {/* 3D Email Illustration */}
              <div className="relative h-48 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail className="w-24 h-24 text-blue-500 dark:text-blue-400 opacity-20" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
