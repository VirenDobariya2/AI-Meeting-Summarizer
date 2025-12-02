"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CheckSquare,
  Mail,
  Users,
  Zap,
  BarChart3,
  RefreshCw,
} from "lucide-react";

export function BentoGrid() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Meeting Summaries",
      description:
        "Our advanced AI automatically generates comprehensive meeting recaps with key points, decisions, and action items. Never miss important details again.",
      gradient: "from-blue-500 to-cyan-500",
      size: "large",
      stat: "95% accuracy",
      liveSummary: true,
    },
    {
      icon: CheckSquare,
      title: "Action Tracker",
      description: "Automatic task assignment and follow-up tracking.",
      gradient: "from-violet-500 to-purple-600",
      size: "small",
    },
    {
      icon: Mail,
      title: "Email Generator",
      description:
        "Professional recap emails sent automatically to all participants.",
      gradient: "from-emerald-500 to-teal-600",
      size: "small",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Real-time sharing and collaboration on meeting notes with your entire team.",
      gradient: "from-pink-500 to-rose-600",
      size: "medium",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get summaries in seconds, not hours.",
      gradient: "from-orange-500 to-red-500",
      size: "small",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Track meeting time, task completion, and team engagement with beautiful visual insights.",
      gradient: "from-green-500 to-emerald-600",
      size: "medium",
      analytics: true,
    },
    {
      icon: RefreshCw,
      title: "Multi-Platform Sync",
      description:
        "Works seamlessly with Zoom, Google Meet, Slack, Notion, and all your favorite tools.",
      gradient: "from-amber-500 to-yellow-500",
      size: "small",
      
      start: true, // ✅ this triggers Zoom, Meet, Slack badges
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to transform your meeting workflow
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => {
            const colSpan =
              feature.size === "large"
                ? "md:col-span-2"
                : feature.size === "medium"
                ? "md:col-span-2"
                : "md:col-span-1";
            const rowSpan = feature.size === "large" ? "md:row-span-2" : "";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`${colSpan} ${rowSpan} group relative overflow-hidden`}
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 rounded-3xl hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                  
                  {/* Default Layout */}
                  {!feature.analytics && (
                    <>
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {feature.description}
                      </p>

                      {feature.stat && (
                        <div className="mt-4">
                          <span
                            className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-sm shadow-md`}
                          >
                            {feature.stat}
                          </span>
                        </div>
                      )}

                      {/* ✅ Platforms Section (Zoom, Meet, Slack) */}
                      {feature.start && (
                        <div className="flex items-center gap-3 flex-wrap mt-6">
                          {["Zoom", "Meet", "Slack"].map((tool, i) => (
                            <div
                              key={i}
                              className="px-3 py-2 rounded-lg bg-white border border-orange-200 text-gray-700 text-sm font-medium hover:bg-orange-50 transition"
                            >
                              {tool}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Live Summary (AI card only) */}
                      {feature.liveSummary && (
                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-900 font-medium">
                              Live Summary
                            </span>
                          </div>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>Approved Q1 marketing budget allocation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>Launch product beta by December 15th</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>Schedule client demos for next week</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {/* Custom Analytics Layout */}
                  {feature.analytics && (
                    <>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>

                      <h4 className="mb-2 text-gray-900 font-semibold text-lg">
                        Analytics Dashboard
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Track meeting time, task completion, and team engagement
                        with beautiful visual insights.
                      </p>

                      <div className="flex items-center gap-6 mt-6">
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            95%
                          </div>
                          <p className="text-gray-500">Time Saved</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            2.5hrs
                          </div>
                          <p className="text-gray-500">Per Week</p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
