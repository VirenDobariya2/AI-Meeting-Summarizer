"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileAudio, FileVideo, CheckCircle, Sparkles, Download, Send, Mic, Activity, Play, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';


export default function EnhancedMeetings() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

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
        return prev + 5;
      });
    }, 150);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl text-white mb-3">AI Meeting Transcriber</h1>
              <p className="text-white/80 text-lg">
                Transform your meetings into actionable insights with advanced AI
              </p>
            </motion.div>
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-40 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!showSummary ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-2 gap-6"
            >
              {/* Upload Zone */}
              <div className="space-y-6">
                <motion.div
                  onDragEnter={() => setIsDragging(true)}
                  onDragLeave={() => setIsDragging(false)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    handleUpload();
                  }}
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <Card className={`p-12 border-2 border-dashed transition-all ${
                    isDragging 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20 scale-105' 
                      : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                  }`}>
                    <div className="text-center space-y-6">
                      <motion.div
                        animate={{
                          scale: isDragging ? 1.1 : 1,
                          rotate: isDragging ? 5 : 0,
                        }}
                        className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
                      >
                        <Upload className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                          Drop your meeting file here
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Support for audio, video, and text transcripts
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          onClick={handleUpload}
                          disabled={isUploading}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg"
                          size="lg"
                        >
                          {isUploading ? 'Processing...' : 'Choose File'}
                        </Button>
                        <Button 
                          variant="outline"
                          size="lg"
                          className="group"
                        >
                          <Mic className="w-4 h-4 mr-2 group-hover:text-red-500 transition-colors" />
                          Record Now
                        </Button>
                      </div>
                    </div>

                    {isUploading && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-8 space-y-4"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                            <span className="text-gray-600 dark:text-gray-400">
                              Processing with Whisper AI...
                            </span>
                          </div>
                          <span className="text-gray-900 dark:text-white tabular-nums">
                            {uploadProgress}%
                          </span>
                        </div>
                        <Progress value={uploadProgress} className="h-3 bg-gray-200 dark:bg-gray-800">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all rounded-full"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </Progress>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                          Transcribing • Analyzing • Generating insights
                        </p>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>

                {/* Format Support */}
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm text-gray-900 dark:text-white mb-4 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Supported Formats
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: FileAudio, label: 'Audio', formats: '.mp3, .wav, .m4a', color: 'from-blue-500 to-cyan-500' },
                      { icon: FileVideo, label: 'Video', formats: '.mp4, .mov, .webm', color: 'from-purple-500 to-pink-500' },
                    ].map((type) => (
                      <motion.div
                        key={type.label}
                        whileHover={{ y: -2 }}
                        className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 cursor-pointer"
                      >
                        <div className={`w-12 h-12 mb-3 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center`}>
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm text-gray-900 dark:text-white mb-1">{type.label}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{type.formats}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* 3D Visualization */}
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative w-full h-96"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Animated Rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 m-auto w-64 h-64 border-2 border-blue-400/20 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}

                  {/* Center Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 120, 0],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 120, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* Summary View with Enhanced Design */
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Success Banner */}
              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 dark:text-white">Processing Complete!</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Generated in 8.7s • Powered by Whisper AI v3
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => setShowSummary(false)}
                    className="border-green-300 dark:border-green-800"
                  >
                    Process Another
                  </Button>
                </div>
              </Card>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Summary */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl text-gray-900 dark:text-white">AI Summary</h3>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4 mr-2" />
                          Play Original
                        </Button>
                        <Button variant="outline" size="sm">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                      </div>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The team convened to finalize Q4 product roadmap priorities. Key decisions included launching AI-powered features in December, redesigning the mobile app with user research insights, and building an integration marketplace. Budget approval was granted for hiring two senior engineers to support these initiatives.
                      </p>
                    </div>
                  </Card>

                  {/* Interactive Timeline */}
                  <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-xl text-gray-900 dark:text-white mb-6">Meeting Timeline</h3>
                    <div className="space-y-4">
                      {[
                        { time: '00:00', speaker: 'Sarah', topic: 'Introduction & Agenda' },
                        { time: '05:30', speaker: 'Mike', topic: 'Q4 Goals Discussion' },
                        { time: '15:45', speaker: 'Team', topic: 'Budget Review' },
                        { time: '28:12', speaker: 'Sarah', topic: 'Action Items & Next Steps' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-4 group cursor-pointer"
                        >
                          <div className="flex-shrink-0 w-16 text-sm text-blue-600 dark:text-blue-400">
                            {item.time}
                          </div>
                          <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20 transition-colors">
                            <p className="text-sm text-gray-900 dark:text-white mb-1">{item.topic}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.speaker}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Sidebar Actions */}
                <div className="space-y-6">
                  {/* Key Takeaways */}
                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-100 dark:border-purple-900/30">
                    <h3 className="text-lg text-gray-900 dark:text-white mb-4">Key Takeaways</h3>
                    <div className="space-y-3">
                      {[
                        'AI features launch December',
                        'Mobile redesign needs UX research',
                        'Build integration marketplace',
                        'Hire 2 senior engineers',
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-white">{i + 1}</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>

                  {/* Export Options */}
                  <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg text-gray-900 dark:text-white mb-4">Export</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Send className="w-4 h-4 mr-2" />
                        Send to Notion
                      </Button>
                      <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Summary
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
