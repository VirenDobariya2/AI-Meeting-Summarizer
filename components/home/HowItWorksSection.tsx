"use client";
import { motion } from 'framer-motion';
import { Upload, Sparkles, FileText, Send } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Meeting",
      description: "Record or upload your meeting audio/video",
    },
    {
      icon: Sparkles,
      title: "AI Analyzes",
      description: "Our AI processes audio and extracts key insights",
    },
    {
      icon: FileText,
      title: "Generate Summary",
      description: "Creates summary with action items automatically",
    },
    {
      icon: Send,
      title: "Auto Follow-up",
      description: "Sends recap emails to all participants",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to transform your meetings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-pink-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-blue-600' :
                    index === 1 ? 'from-violet-500 to-purple-600' :
                    index === 2 ? 'from-emerald-500 to-teal-600' :
                    'from-pink-500 to-rose-600'
                  } flex items-center justify-center shadow-xl relative z-10`}>
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-xl -z-10" />
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Step {index + 1}</div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-[32px] shadow-2xl flex items-center justify-center border border-gray-300/50 overflow-hidden">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mx-auto shadow-xl">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-gray-700 border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="text-gray-600">Watch AI Demo Video</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
