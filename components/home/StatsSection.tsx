"use client"

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Teams Worldwide",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: 10000,
      suffix: "+",
      label: "Meetings Processed",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      value: 95,
      suffix: "%",
      label: "Accuracy Rate",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      value: 2.5,
      suffix: " hrs",
      label: "Saved Per Week",
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of teams already saving time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className={`text-5xl md:text-6xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                  />
                </div>
                <div className={`absolute -inset-4 bg-gradient-to-r ${stat.gradient} opacity-20 blur-2xl -z-10`} />
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
