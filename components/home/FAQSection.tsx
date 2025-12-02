"use client";
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How accurate is AI transcription?",
      answer: "Our AI achieves 95%+ accuracy for clear audio with minimal background noise. The AI continuously learns and improves from corrections, making it more accurate over time for your specific meetings and terminology.",
    },
    {
      question: "What file formats are supported?",
      answer: "We support all major audio and video formats including MP3, WAV, MP4, MOV, and WebM. You can also record directly in the app or integrate with Zoom, Google Meet, and Microsoft Teams for automatic recording.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. Your meetings are stored on secure servers, and we never share or train our models on your private data. We're SOC 2 Type II certified and GDPR compliant.",
    },
    {
      question: "Can I edit summaries?",
      answer: "Yes! All AI-generated summaries are fully editable. You can modify the summary, add notes, update action items, and customize the format before sharing with your team or sending follow-up emails.",
    },
    {
      question: "Does it integrate with Zoom or Google Meet?",
      answer: "Yes! MemoMeet integrates seamlessly with Zoom, Google Meet, Microsoft Teams, and other popular video conferencing platforms. Simply connect your account and meetings will be automatically recorded and summarized.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You can export all your data (summaries, transcripts, and action items) at any time. After cancellation, we retain your data for 30 days in case you want to reactivate, then it's permanently deleted from our servers.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MemoMeet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-gray-600">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
