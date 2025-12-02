"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the AI summaries?",
    answer:
      "Our AI achieves 95%+ accuracy using advanced NLP models that capture decisions and action items precisely.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel anytime from your account settings — your access remains active until the billing cycle ends.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we have a 30-day money-back guarantee for new users. No questions asked.",
  },
  {
    question: "What integrations are available?",
    answer:
      "MemoMeet integrates with Zoom, Meet, Slack, Notion, Google Calendar, and Microsoft Teams.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use AES-256 encryption, SOC 2 Type II compliance, and never use your data for AI training.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600">
          Everything you need to know about billing and AI summaries.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
