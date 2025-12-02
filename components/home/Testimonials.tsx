"use client";
import { motion } from 'framer-motion';
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { TiltCard } from './TiltCard';


export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatar: "SJ",
      review: "MemoMeet saves me an hour after each meeting — summaries are spot-on! The action tracker is a game-changer.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupLab",
      avatar: "MC",
      review: "Finally, a tool that actually understands context. The AI summaries are incredibly accurate and save our team so much time.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Team Lead, GlobalCo",
      avatar: "ER",
      review: "The automated follow-ups are perfect. Everyone gets their action items immediately. No more chasing people down!",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Operations Director, InnovateTech",
      avatar: "DP",
      review: "We've tried other tools, but MemoMeet is the only one that actually delivers. The integration with our workflow is seamless.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who trust MemoMeet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.review}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-blue-200">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
