"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Database, Eye, UserCheck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter } from "next/navigation"; 

export default function PrivacyPolicy(){
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#05010f] relative overflow-hidden">
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-6">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/20">
          
          {/* Header Section */}
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-white mb-2">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: November 13, 2025</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: Shield, label: 'Encrypted' },
              { icon: Lock, label: 'Secure' },
              { icon: UserCheck, label: 'GDPR Compliant' }
            ].map((badge, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center">
                <badge.icon className="w-5 h-5 text-purple-400 mb-1" />
                <span className="text-xs text-gray-300">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Scrollable Content */}
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8 text-gray-300">
              
              {/* Introduction */}
              <section className="space-y-4">
                <p className="leading-relaxed">
                  At MemoMeet, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered meeting summarization service. Please read this privacy policy carefully.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Your Privacy Matters:</strong> We are committed to protecting your personal information and your right to privacy. This policy is designed to help you understand what information we collect and how we use it.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Database className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-xl text-white">1. Information We Collect</h2>
                </div>
                
                <div className="space-y-4 ml-8">
                  <div>
                    <h3 className="text-white mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We collect information that you voluntarily provide to us when you register on the Service, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-2">
                      <li>Name and email address</li>
                      <li>Account credentials (username and password)</li>
                      <li>Company name and work information</li>
                      <li>Profile information and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white mb-2">Meeting Content</h3>
                    <p className="leading-relaxed">
                      To provide our AI summarization services, we process:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-2">
                      <li>Meeting recordings and transcripts</li>
                      <li>Meeting metadata (date, time, participants)</li>
                      <li>AI-generated summaries and action items</li>
                      <li>User notes and annotations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      We automatically collect certain information when you use the Service:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400 mt-2">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (features used, time spent, interactions)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-xl text-white">2. How We Use Your Information</h2>
                </div>
                <p className="leading-relaxed">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li>To provide, maintain, and improve our Service</li>
                  <li>To process your meeting recordings and generate AI summaries</li>
                  <li>To communicate with you about updates, security alerts, and support</li>
                  <li>To personalize your experience and improve our AI models</li>
                  <li>To detect, prevent, and address technical issues or fraudulent activity</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">3. AI Processing and Machine Learning</h2>
                <p className="leading-relaxed">
                  MemoMeet uses advanced AI and machine learning to provide meeting summarization services. Here's what you should know:
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 space-y-3">
                  <div>
                    <h4 className="text-white text-sm mb-1">AI Training</h4>
                    <p className="text-gray-400 text-sm">
                      We may use anonymized and aggregated meeting data to improve our AI models. Personal identifying information is removed before any data is used for training purposes.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm mb-1">Data Retention</h4>
                    <p className="text-gray-400 text-sm">
                      Meeting recordings are processed for summarization and then deleted according to your retention settings. Transcripts and summaries are stored securely in your account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">4. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
                  <li><strong className="text-white">Service Providers:</strong> With trusted third-party vendors who help us provide the Service (e.g., cloud hosting, AI processing)</li>
                  <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white text-sm mb-2">🔐 Encryption</h4>
                    <p className="text-gray-400 text-sm">All data is encrypted in transit (TLS) and at rest (AES-256)</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white text-sm mb-2">🛡️ Access Controls</h4>
                    <p className="text-gray-400 text-sm">Strict access controls and authentication mechanisms</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white text-sm mb-2">📊 Monitoring</h4>
                    <p className="text-gray-400 text-sm">24/7 security monitoring and incident response</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white text-sm mb-2">✅ Compliance</h4>
                    <p className="text-gray-400 text-sm">Regular security audits and compliance certifications</p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">6. Your Privacy Rights</h2>
                <p className="leading-relaxed">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li><strong className="text-white">Access:</strong> Request a copy of your personal information</li>
                  <li><strong className="text-white">Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-white">Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong className="text-white">Opt-Out:</strong> Opt out of marketing communications</li>
                  <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at <span className="text-purple-400">privacy@memomeet.com</span>
                </p>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">7. Cookies and Tracking</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">8. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We take appropriate safeguards to ensure your data is treated securely and in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">9. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">10. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Section */}
              <section className="space-y-4 pt-4 border-t border-white/10">
                <h2 className="text-xl text-white">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-purple-400">privacy@memomeet.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Data Protection Officer</p>
                    <p className="text-purple-400">dpo@memomeet.com</p>
                  </div>
                </div>
              </section>

            </div>
          </ScrollArea>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <Button
             onClick={() => router.back()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl transition-all duration-300"
            >
              I Understand
            </Button>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl opacity-50 rounded-3xl transform scale-95" />
      </motion.div>
    </div>
  );
}
