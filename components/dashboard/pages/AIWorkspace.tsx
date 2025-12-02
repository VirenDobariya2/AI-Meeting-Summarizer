import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Brain } from 'lucide-react';
import { Card } from '../../ui/card';

export function AIWorkspace() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Brain className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl text-gray-900 dark:text-white">AI Workspace</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your AI-powered workspace for advanced meeting intelligence and automation
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Sparkles,
                title: 'Smart Insights',
                description: 'AI-generated insights from your meetings',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'Automation',
                description: 'Automate repetitive tasks and workflows',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Brain,
                title: 'Custom AI',
                description: 'Train AI models on your data',
                color: 'from-pink-500 to-pink-600'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl border border-purple-100 dark:border-purple-900/30">
            <p className="text-gray-700 dark:text-gray-300">
              🚀 More AI workspace features coming soon!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
