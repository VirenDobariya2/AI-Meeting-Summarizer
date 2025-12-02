"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter } from "next/navigation";

export default function TermsOfService() {
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl text-white mb-2">Terms of Service</h1>
              <p className="text-gray-400">Last updated: November 13, 2025</p>
            </div>
          </div>

          {/* Scrollable Content */}
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8 text-gray-300">
              
              {/* Section 1 */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-xl text-white">1. Acceptance of Terms</h2>
                </div>
                <p className="leading-relaxed">
                  By accessing and using MemoMeet ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="leading-relaxed">
                  MemoMeet provides an AI-powered meeting summarization platform that helps users capture, organize, and share meeting insights. Your use of our Service is subject to your compliance with these Terms.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-xl text-white">2. Use License</h2>
                </div>
                <p className="leading-relaxed">
                  Permission is granted to temporarily access the Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">3. User Accounts</h2>
                <p className="leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <p className="leading-relaxed">
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">4. AI-Generated Content</h2>
                <p className="leading-relaxed">
                  MemoMeet uses artificial intelligence to generate meeting summaries, action items, and insights. While we strive for accuracy, AI-generated content may contain errors or inaccuracies. You are responsible for reviewing and verifying all AI-generated content before relying on it for business decisions.
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>Important:</strong> Always review AI-generated summaries for accuracy. Do not solely rely on automated summaries for critical business decisions.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">5. Data and Privacy</h2>
                <p className="leading-relaxed">
                  Your use of the Service is also governed by our Privacy Policy. By using MemoMeet, you consent to the collection and use of information as detailed in our Privacy Policy. We process meeting recordings and transcripts to provide our AI-powered services.
                </p>
                <p className="leading-relaxed">
                  You retain all ownership rights to your meeting content. We do not claim ownership of any content you submit, post, or display on or through the Service.
                </p>
              </section>

              {/* Section 6 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">6. Prohibited Uses</h2>
                <p className="leading-relaxed">
                  You may not use the Service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">7. Service Modifications</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.
                </p>
              </section>

              {/* Section 8 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">8. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall MemoMeet, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
              </section>

              {/* Section 9 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">9. Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              {/* Section 10 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">10. Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which MemoMeet operates, without regard to its conflict of law provisions.
                </p>
              </section>

              {/* Section 11 */}
              <section className="space-y-4">
                <h2 className="text-xl text-white">11. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              {/* Contact Section */}
              <section className="space-y-4 pt-4 border-t border-white/10">
                <h2 className="text-xl text-white">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-purple-400">legal@memomeet.com</p>
                  <p className="text-gray-400 text-sm mt-2">MemoMeet Legal Team</p>
                </div>
              </section>

            </div>
          </ScrollArea>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <Button
            onClick={() => router.back()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300"
            >
              I Understand
            </Button>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl opacity-50 rounded-3xl transform scale-95" />
      </motion.div>
    </div>
  );
}
