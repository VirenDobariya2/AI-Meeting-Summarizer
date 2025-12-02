"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { InfiniteLogoMarquee } from "@/components/home/InfiniteLogoMarquee";
import { FloatingAnimation } from "@/components/home/FloatingAnimation";
import { MorphingBackground } from "@/components/home/MorphingBackground";
import { MorphingText } from "@/components/home/MorphingText";
import { ParticleField } from "@/components/home/ParticleField";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-[#F9FAFB] via-white to-white overflow-hidden">
      {/* Morphing Background */}
      <MorphingBackground />
      <ParticleField />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200/50 rounded-full text-blue-700">
                Your AI that never forgets a meeting
              </span>
            </motion.p>

            {/* Headline */}
            <div className="space-y-6">
              <MorphingText />
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
                AI-powered summaries, follow-ups, and action tracking — automatically handled for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/signup" passHref
                className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 rounded-2xl px-8 py-4 group text-lg "
              >
                <span>Try for Free</span>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="ml-2 inline-block"
                >
                  →
                </motion.div>
              </Link>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 rounded-2xl px-8 py-7 group text-lg"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>See AI Demo</span>
              </Button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <InfiniteLogoMarquee />
            </motion.div>
          </motion.h1>

          {/* Right Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block h-[600px]"
          >
            <FloatingAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
