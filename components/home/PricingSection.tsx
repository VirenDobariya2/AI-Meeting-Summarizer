"use client"

import { motion } from 'framer-motion';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Badge } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 19,
      yearlyPrice: 15,
      description: "Perfect for individuals",
      features: [
        "Basic AI summaries",
        "Up to 30 mins/meeting",
        "5 meetings/month",
        "Email support",
        "Basic templates",
      ],
      gradient: "from-gray-100 to-gray-50",
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      yearlyPrice: 39,
      description: "Best for growing teams",
      features: [
        "Advanced AI summaries",
        "Up to 2 hrs/meeting",
        "Unlimited meetings",
        "Team collaboration",
        "Email templates",
        "Priority support",
        "Integrations",
      ],
      gradient: "from-blue-500 to-violet-600",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      yearlyPrice: null,
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Unlimited meeting length",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "Custom AI training",
        "SLA guarantee",
      ],
      gradient: "from-gray-100 to-gray-50",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`${!isYearly ? '' : 'text-gray-400'} transition-colors`}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`${isYearly ? '' : 'text-gray-400'} transition-colors`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Save 20%
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[32px] border-2 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-500 to-violet-600 border-transparent shadow-2xl scale-105 text-white'
                  : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900 border-yellow-500 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`mb-2 ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <div className="flex items-end gap-2">
                    <span className="text-5xl">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={`pb-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      /month
                    </span>
                  </div>
                ) : (
                  <div className="text-4xl">Custom</div>
                )}
                {isYearly && plan.monthlyPrice && (
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    Billed annually (${(plan.yearlyPrice || 0) * 12}/year)
                  </p>
                )}
              </div>

              <Button
                className={`w-full mb-6 rounded-2xl py-6 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:from-blue-600 hover:to-violet-700'
                }`}
              >
                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-white' : 'text-green-600'
                    }`} />
                    <span className={`${plan.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
