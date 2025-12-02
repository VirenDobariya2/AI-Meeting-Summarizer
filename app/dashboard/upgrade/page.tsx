"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';


const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Free forever',
    description: 'Perfect for individuals getting started',
    icon: Sparkles,
    color: 'from-gray-600 to-gray-800',
    features: [
      { text: 'Up to 10 meetings/month', included: true },
      { text: 'Basic AI summaries', included: true },
      { text: 'Email notifications', included: true },
      { text: '1 GB storage', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'Priority support', included: false },
      { text: 'Team collaboration', included: false },
    ],
    cta: 'Current Plan',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per user/month',
    description: 'For professionals who need more power',
    icon: Zap,
    color: 'from-blue-600 to-purple-600',
    features: [
      { text: 'Unlimited meetings', included: true },
      { text: 'Advanced AI summaries', included: true },
      { text: 'Email & Slack notifications', included: true },
      { text: '50 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Standard integrations', included: true },
      { text: 'Priority support', included: false },
      { text: 'Team collaboration', included: false },
    ],
    cta: 'Upgrade Now',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per user/month',
    description: 'For teams that need enterprise features',
    icon: Crown,
    color: 'from-purple-600 to-pink-600',
    features: [
      { text: 'Unlimited everything', included: true },
      { text: 'Custom AI models', included: true },
      { text: 'All notification channels', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Priority support', included: true },
      { text: 'Team collaboration', included: true },
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const additionalFeatures = [
  { category: 'AI Features', items: ['Smart summaries', 'Action item detection', 'Speaker identification', 'Sentiment analysis'] },
  { category: 'Integrations', items: ['Slack', 'Teams', 'Zoom', 'Google Meet', 'Gmail', 'Calendar'] },
  { category: 'Security', items: ['SOC 2 compliant', 'End-to-end encryption', 'SSO/SAML', 'Advanced permissions'] },
  { category: 'Support', items: ['24/7 email support', 'Priority chat', 'Dedicated manager', 'Custom training'] },
];

export default function Upgrade() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Unlock the full power of MemoMeet</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl text-gray-900 dark:text-white mb-4"
        >
          Choose Your Plan
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
        >
          Select the perfect plan for your needs. Upgrade or downgrade at any time.
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center space-x-3 p-1 bg-gray-100 dark:bg-gray-900 rounded-full"
        >
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={cn(
              "px-6 py-2 rounded-full text-sm transition-all duration-300",
              billingPeriod === 'monthly'
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('yearly')}
            className={cn(
              "px-6 py-2 rounded-full text-sm transition-all duration-300 flex items-center space-x-2",
              billingPeriod === 'yearly'
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            <span>Yearly</span>
            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-950/20 text-green-600 dark:text-green-400 rounded-full text-xs">
              Save 20%
            </span>
          </button>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative bg-white dark:bg-gray-900 rounded-3xl p-8 border shadow-lg hover:shadow-2xl transition-all duration-300",
                plan.popular 
                  ? "border-blue-500 dark:border-blue-500 scale-105" 
                  : "border-gray-200 dark:border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-lg",
                plan.color
              )}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.price !== '$0' && (
                    <span className="text-gray-500 dark:text-gray-400">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{plan.period}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full py-4 rounded-xl text-sm transition-all duration-300 mb-8 flex items-center justify-center space-x-2",
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                    : "border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                      feature.included
                        ? "bg-green-100 dark:bg-green-950/20"
                        : "bg-gray-100 dark:bg-gray-800"
                    )}>
                      <Check className={cn(
                        "w-3 h-3",
                        feature.included
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-400"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm",
                      feature.included
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-400 dark:text-gray-600"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-8 border border-blue-100 dark:border-blue-900/30"
      >
        <h2 className="text-2xl text-gray-900 dark:text-white mb-8 text-center">Everything You Need to Succeed</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <h3 className="text-lg text-gray-900 dark:text-white mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ or CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl text-gray-900 dark:text-white mb-3">Need a custom solution?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Contact our sales team for enterprise pricing and custom features
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
        >
          Contact Sales
        </motion.button>
      </motion.div>
    </div>
  );
}
