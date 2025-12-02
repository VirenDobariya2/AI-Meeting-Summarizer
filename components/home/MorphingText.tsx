"use client"

import {  AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

export function MorphingText() {
  const words = ["Results", "Success", "Action", "Impact"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
      <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
        Turn Meetings Into{" "}
      </span>
      <div className="inline-block relative h-[1.2em] w-full md:w-auto align-bottom">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent"
          >
            {words[index]}.
          </motion.span>
        </AnimatePresence>
      </div>
    </h1>
  );
}
