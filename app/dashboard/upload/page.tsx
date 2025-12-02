"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, FileVideo, FileAudio, CheckCircle2, Clock, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';


const uploadHistory = [
  {
    id: 1,
    name: 'Q4_Product_Planning.mp4',
    type: 'video',
    size: '245 MB',
    uploadedAt: '2 hours ago',
    status: 'completed',
    progress: 100
  },
  {
    id: 2,
    name: 'Engineering_Standup.mp3',
    type: 'audio',
    size: '12 MB',
    uploadedAt: '5 hours ago',
    status: 'completed',
    progress: 100
  },
  {
    id: 3,
    name: 'Client_Call_Recording.mp4',
    type: 'video',
    size: '512 MB',
    uploadedAt: '1 day ago',
    status: 'processing',
    progress: 67
  },
  {
    id: 4,
    name: 'Design_Review_Meeting.mp4',
    type: 'video',
    size: '189 MB',
    uploadedAt: '2 days ago',
    status: 'completed',
    progress: 100
  },
];

export default function Uploads() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState(uploadHistory);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  const removeFile = (id: number) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-gray-900 dark:text-white mb-2">Uploads</h1>
        <p className="text-gray-600 dark:text-gray-400">Upload meeting recordings for AI processing and analysis</p>
      </div>

      {/* Upload Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative border-2 border-dashed rounded-3xl p-12 transition-all duration-300 cursor-pointer overflow-hidden",
            isDragging 
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" 
              : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
          )}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"
            animate={{
              opacity: isDragging ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative z-10 text-center">
            <motion.div
              animate={{
                y: isDragging ? -10 : 0,
                scale: isDragging ? 1.1 : 1,
              }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 shadow-lg"
            >
              <Upload className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-xl text-gray-900 dark:text-white mb-2">
              {isDragging ? 'Drop files here' : 'Upload meeting recordings'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Drag and drop your files here, or click to browse
            </p>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
              Choose Files
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Supported formats: MP4, MP3, WAV, M4A (Max 2GB)
            </p>
          </div>
        </div>
      </motion.div>

      {/* Upload History */}
      <div>
        <h2 className="text-xl text-gray-900 dark:text-white mb-4">Recent Uploads</h2>
        
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {files.map((file, index) => {
              const FileIcon = file.type === 'video' ? FileVideo : FileAudio;
              
              return (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        file.type === 'video' 
                          ? "bg-purple-100 dark:bg-purple-950/20" 
                          : "bg-blue-100 dark:bg-blue-950/20"
                      )}>
                        <FileIcon className={cn(
                          "w-6 h-6",
                          file.type === 'video' 
                            ? "text-purple-600 dark:text-purple-400" 
                            : "text-blue-600 dark:text-blue-400"
                        )} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 dark:text-white truncate">{file.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {file.size} • {file.uploadedAt}
                        </p>
                        
                        {file.status === 'processing' && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-600 dark:text-gray-400">Processing...</span>
                              <span className="text-xs text-blue-600 dark:text-blue-400">{file.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${file.progress}%` }}
                                transition={{ duration: 1 }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {file.status === 'completed' ? (
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-green-100 dark:bg-green-950/20">
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm text-green-600 dark:text-green-400">Complete</span>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                          >
                            <Download className="w-5 h-5" />
                          </motion.button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/20">
                          <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm text-blue-600 dark:text-blue-400">Processing</span>
                        </div>
                      )}
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFile(file.id)}
                        className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-950/20 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
