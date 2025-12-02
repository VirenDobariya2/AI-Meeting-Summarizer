import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileAudio, FileVideo, CheckCircle, Sparkles, Download, Send, Badge } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';

export default function Meetings() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setTimeout(() => setShowSummary(true), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl text-gray-900 dark:text-white mb-2">AI Meeting Summarizer</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload audio/video or paste transcript to generate instant AI summaries
          </p>
        </motion.div>

        {!showSummary ? (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Upload Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Upload Card */}
              <Card className="p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 dark:text-white mb-2">
                      Drop your meeting file here
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      or click to browse from your computer
                    </p>
                  </div>
                  <Button 
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                  >
                    {isUploading ? 'Processing...' : 'Select File'}
                  </Button>
                </div>

                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Processing with Whisper AI...</span>
                      <span className="text-gray-900 dark:text-white">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </motion.div>
                )}
              </Card>

              {/* Supported Formats */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-100 dark:border-blue-900/30">
                <h4 className="text-sm text-gray-900 dark:text-white mb-4">Supported Formats</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: FileAudio, label: '.mp3', color: 'from-blue-500 to-blue-600' },
                    { icon: FileAudio, label: '.wav', color: 'from-purple-500 to-purple-600' },
                    { icon: FileVideo, label: '.mp4', color: 'from-pink-500 to-pink-600' },
                    { icon: FileAudio, label: '.m4a', color: 'from-indigo-500 to-indigo-600' },
                  ].map((format) => (
                    <div key={format.label} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <div className={`w-8 h-8 bg-gradient-to-br ${format.color} rounded-lg flex items-center justify-center`}>
                        <format.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-900 dark:text-white">{format.label}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Paste Transcript */}
              <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <h4 className="text-sm text-gray-900 dark:text-white mb-3">Or paste your transcript</h4>
                <textarea
                  placeholder="Paste meeting transcript here..."
                  className="w-full h-32 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button onClick={handleUpload} className="w-full mt-3" variant="outline">
                  Process Transcript
                </Button>
              </Card>
            </motion.div>

            {/* Right: 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-96">
                {/* Animated AI Orb */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl" />
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-48 h-48 border-4 border-blue-400/30 dark:border-blue-400/20 rounded-full" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-blue-500 dark:text-blue-400" />
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Summary View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Summary Header */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-900/30">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <h3 className="text-lg text-gray-900 dark:text-white">Meeting Processed Successfully</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generated in 12.4 seconds using Whisper AI</p>
                </div>
              </div>
            </Card>

            {/* Main Summary */}
            <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl text-gray-900 dark:text-white">AI Summary</h3>
                <Button variant="outline" size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The meeting focused on finalizing the Q4 product roadmap with key stakeholders. The team discussed three major initiatives: launching the new AI-powered features, improving the mobile app experience, and expanding integrations with third-party tools. Budget allocation was approved for hiring two additional engineers, and timelines were set for each initiative.
                </p>
              </div>
            </Card>

            {/* Key Takeaways */}
            <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl text-gray-900 dark:text-white mb-4">Key Takeaways</h3>
              <div className="space-y-3">
                {[
                  'AI features are top priority for Q4 with December launch target',
                  'Mobile redesign needs UX research before implementation',
                  'Integration marketplace to be built with API-first approach',
                  'Team expansion approved - begin hiring process next week',
                ].map((takeaway, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-blue-600 dark:text-blue-400">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{takeaway}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Action Items */}
            <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl text-gray-900 dark:text-white mb-4">Action Items</h3>
              <div className="space-y-3">
                {[
                  { task: 'Create detailed spec for AI features', assignee: 'Sarah', priority: 'high', due: '2025-11-22' },
                  { task: 'Schedule UX research sessions', assignee: 'Mike', priority: 'medium', due: '2025-11-25' },
                  { task: 'Draft API documentation', assignee: 'Alex', priority: 'high', due: '2025-11-24' },
                  { task: 'Post job listings for engineers', assignee: 'HR', priority: 'medium', due: '2025-11-20' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3 flex-1">
                      <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-gray-600" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">{item.task}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Assigned to {item.assignee} • Due {item.due}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      
                      className={item.priority === 'high' 
                        ? 'border-red-300 text-red-700 dark:border-red-700 dark:text-red-400' 
                        : 'border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-400'}
                    >
                      {item.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Export Options */}
            <div className="flex items-center justify-end space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline">
                Export to Notion
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                <Send className="w-4 h-4 mr-2" />
                Send via Email
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
