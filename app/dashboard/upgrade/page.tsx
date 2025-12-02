"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import {   Check,
  Badge,
  CreditCard,
  Shield,
  Zap,
  Building2,
  Users,
  ChevronRight,
  Lock,} from "lucide-react";




export default function UpgradePage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = {
    starter: {
      name: "Starter",
      tagline: "Perfect for individuals",
       icon: Users,
      monthlyPrice: 19, 
      annualPrice: 15,
      description: "Get started with AI meeting summaries",
      features: [
        "10 meetings per month",
        "60-minute recordings",
        "AI-powered summaries",
        "Action items tracking",
        "Email follow-ups",
        "Basic integrations",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    pro: {
      name: "Pro",
      tagline: "Best for growing teams",
      icon: Zap,
      monthlyPrice: 49,
      annualPrice: 39,
      description: "Everything you need to scale",
      features: [
        "50 meetings per month",
        "2-hour recordings",
        "Advanced AI summaries",
        "Team collaboration (10 users)",
        "Priority support",
        "Slack & Google integrations",
        "Analytics dashboard",
        "Custom templates",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    enterprise: {
      name: "Enterprise",
      tagline: "For large organizations",
       icon: Building2,
      monthlyPrice: null,
      annualPrice: null,
      description: "Unlimited power and flexibility",
      features: [
        "Unlimited meetings & users",
        "Unlimited recording length",
        "Custom AI training",
        "Advanced API & webhooks",
        "White-label options",
        "SSO & SAML",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  };

   const paymentMethods = [
    "Visa",
    "Mastercard",
    "American Express",
    "PayPal",
    "Stripe",
  ];
  const comparisonFeatures = [
    { name: "AI Meeting Summaries", starter: true, pro: true, enterprise: true },
    { name: "Action Item Tracking", starter: true, pro: true, enterprise: true },
    { name: "Email Generator", starter: true, pro: true, enterprise: true },
    { name: "Team Collaboration", starter: false, pro: true, enterprise: true },
    { name: "Analytics Dashboard", starter: false, pro: true, enterprise: true },
    { name: "Advanced Integrations", starter: false, pro: true, enterprise: true },
    { name: "API Access", starter: false, pro: true, enterprise: true },
    { name: "Custom AI Training", starter: false, pro: false, enterprise: true },
    { name: "White-label Options", starter: false, pro: false, enterprise: true },
    { name: "SSO & SAML", starter: false, pro: false, enterprise: true },
  ];


  const getPrice = (plan) => {
    const data = pricingData[plan];
    if (data.monthlyPrice === null || data.monthlyPrice === undefined) return "Custom";
    return billingCycle === "monthly" ? data.monthlyPrice : data.annualPrice;
  };

  const getSavingsPercent = () => {
    const { monthlyPrice, annualPrice } = pricingData.pro;
    return Math.round(((monthlyPrice - annualPrice) / monthlyPrice) * 100);
  };

  return (
    <div>
      
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Design */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="bg-white/20 text-white border-white/30 mb-6">
              <Lock className="w-3 h-3 mr-2" />
              Secure Payment • 30-Day Money Back Guarantee
            </div>
            <h1 className="text-white mb-6">
              Choose Your Perfect Plan
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto mb-10">
              Flexible pricing designed to grow with your team. All plans include our core AI features,
              secure payment processing, and the ability to cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-purple-600 shadow-lg"
                    : "text-white hover:text-white/80"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingCycle === "annual"
                    ? "bg-white text-purple-600 shadow-lg"
                    : "text-white hover:text-white/80"
                }`}
              >
                Annual
                <span className="ml-2 text-green-400">
                  Save {getSavingsPercent()}%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Unique Layout */}
      <section className="relative -mt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {Object.entries(pricingData).map(([key, plan]) => {
              const Icon = plan.icon;
              const price = getPrice(key);
              
              return (
                <div
                  key={key}
                  className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "border-2 border-purple-500 shadow-2xl scale-105 lg:scale-110 z-10"
                      : "border border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1.5 border-0 shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl ${
                        plan.popular
                          ? "bg-gradient-to-br from-blue-600 to-purple-600"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          plan.popular ? "text-white" : "text-gray-700"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600">{plan.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    {typeof price === "number" ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-900">${price}</span>
                        <span className="text-gray-600">
                          / {billingCycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-900">{price}</span>
                    )}
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {plan.cta}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Secure payments powered by</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {paymentMethods.map((method, idx) => (
                <span key={idx} className="text-gray-400">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Compare All Features</h2>
            <p className="text-gray-600">
              Everything you get with each plan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <th className="px-6 py-5 text-left text-gray-900">Feature</th>
                    <th className="px-6 py-5 text-center text-gray-900">Starter</th>
                    <th className="px-6 py-5 text-center text-gray-900">Pro</th>
                    <th className="px-6 py-5 text-center text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, idx) => (
                    <tr
                      key={idx}
                      className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-700">{feature.name}</td>
                      <td className="px-6 py-4 text-center">
                        {feature.starter ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.pro ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {feature.enterprise ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    
    </div>
    </div>
   
  );
}
