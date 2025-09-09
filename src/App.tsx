import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { WhyTeamlySection } from "./components/WhyTeamlySection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <WhyTeamlySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}