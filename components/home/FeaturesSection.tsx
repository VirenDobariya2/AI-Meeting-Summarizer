"use client";
import { motion } from 'framer-motion';
import { Brain, CheckSquare, Mail, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Summaries",
      description: "Instantly turn meetings into actionable summaries.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: CheckSquare,
      title: "Action Tracker",
      description: "Never miss follow-ups — automatically assigns next steps.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Mail,
      title: "Email Generator",
      description: "Auto-send meeting recaps and action items.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share notes and progress with your whole team.",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that transform how you handle meetings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 rounded-[32px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
