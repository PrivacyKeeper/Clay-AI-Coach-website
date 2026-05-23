import { Header } from '@/components/marketing/header';
import { HeroSection } from '@/components/marketing/hero-section';
import { DisciplinesSection } from '@/components/marketing/discipline-section';
import { FeaturesSection } from '@/components/marketing/features-section';
import { WhySection } from '@/components/marketing/why-section';
import { PricingSection } from '@/components/marketing/pricing-section';
import { WaitlistSection } from '@/components/marketing/waitlist-section';
import { Footer } from '@/components/marketing/footer';
import { CrossQuoteWidget } from '@/components/marketing/cross-quote-widget';

export default function HomePage() {
  return (
    <main className="min-h-screen fixed-bg" style={{ backgroundImage: 'url(/hero-bg.png)' }}>
      <Header />
      <HeroSection />
      <DisciplinesSection />
      <FeaturesSection />
      <WhySection />
      <PricingSection />
      <WaitlistSection />
      <CrossQuoteWidget />
      <Footer />
    </main>
  );
}
