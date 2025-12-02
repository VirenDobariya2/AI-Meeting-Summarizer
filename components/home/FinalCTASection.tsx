"use client";

import { motion } from 'framer-motion';
import { Button } from "../ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/30 to-violet-400/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-violet-400/30 to-pink-400/30 blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-900 to-violet-900 bg-clip-text text-transparent">
            Ready to Transform Your Meetings?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Join thousands of professionals saving time with AI
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1d4ed8] hover:to-[#6d28d9] text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 rounded-2xl px-10 py-7 group"
            >
              <span className="text-lg">Try for Free</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-2xl px-10 py-7 text-lg transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book a Demo</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <p className="text-sm text-gray-500">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
