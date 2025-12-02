import { Navbar } from "@/components/home/navbar";
import { BentoGrid } from "@/components/home/BentoGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { InteractiveDashboard } from "@/components/home/InteractiveDashboard";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/Testimonials";

import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import PricingSection from "@/components/home/PricingSection";


export default function Page() {
  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section (Client Component) */}
    <Hero />

      {/* All Other Sections */}
      <BentoGrid />
      <StatsSection />
      <InteractiveDashboard />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
