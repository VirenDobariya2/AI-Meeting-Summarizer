"use client";
import { motion } from 'framer-motion';
import { FileText, Mic, CheckCircle, Mail } from "lucide-react";

export function FloatingAnimation() {
  // Animation variants for floating motion
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatVariants2 = {
    initial: { y: 0 },
    animate: {
      y: [20, -20, 20],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Gradient Orbs */}
      <motion.div
        variants={rotateVariants}
        animate="animate"
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-400/20 blur-3xl"
      />
      
      {/* Central Glass Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="w-72 h-80 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-500/20 p-6 flex flex-col items-center justify-center gap-6">
          {/* Floating Cards Grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Meeting Notes Card */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg flex items-center justify-center"
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>

            {/* Microphone Card */}
            <motion.div
              variants={floatVariants2}
              initial="initial"
              animate="animate"
              className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-4 shadow-lg flex items-center justify-center"
            >
              <Mic className="w-8 h-8 text-white" />
            </motion.div>

            {/* Task Checkmark Card */}
            <motion.div
              variants={floatVariants2}
              initial="initial"
              animate="animate"
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 shadow-lg flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>

            {/* Email Card */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-4 shadow-lg flex items-center justify-center"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* Center Connecting Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-32 h-32 rounded-full border-2 border-blue-400/50"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute w-48 h-48 rounded-full border-2 border-violet-400/30"
            />
          </div>
        </div>
      </motion.div>

      {/* Floating Orbs Around */}
      <motion.div
        animate={{
          y: [-30, 30, -30],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 opacity-20 blur-2xl"
      />
      
      <motion.div
        animate={{
          y: [30, -30, 30],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 opacity-20 blur-2xl"
      />
    </div>
  );
}
