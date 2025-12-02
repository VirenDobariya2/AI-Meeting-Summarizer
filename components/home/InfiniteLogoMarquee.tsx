"use client";
import { motion } from 'framer-motion';

export function InfiniteLogoMarquee() {
  const companies = [
    "Acme Corp",
    "TechStart",
    "GlobalCo",
    "InnovateLab",
    "FutureTech",
    "CloudBase",
    "DataFlow",
    "SyncHub",
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="text-center">
      <p className="text-gray-500 mb-8">
        Trusted by 500+ teams worldwide
      </p>
      
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Scrolling Container */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm"
            >
              <span className="text-gray-600 whitespace-nowrap">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
