'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/75 via-[#0F172A]/60 to-[#0F172A] z-[1]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <Smartphone className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span className="text-sm font-medium text-white/80">Coming Soon to iOS & Android</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Your <span className="text-gradient">AI Coach</span>.
            <br />
            Every Shot. Every Discipline.
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            From first-time shooter to championship squad, Clay AI Coach delivers patent-pending biomechanical analysis for less than a box of target loads.
          </p>

          <p className="text-base sm:text-lg text-[hsl(var(--primary))] font-semibold mb-10">
            $4.99/mo vs. $700+ barrel cameras. Your phone is all you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo('#waitlist')}
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] font-semibold text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
            >
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('#disciplines')}
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold text-base px-8 h-12"
            >
              Learn More
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div className="text-left">
              <div className="text-[10px] text-white/40 leading-none">Coming Soon</div>
              <div className="text-sm font-semibold text-white/70">App Store</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.37c.46.37 1.04.37 1.8-.05l14.7-8.56-3.24-3.26L3.18 23.37zm-.88-1.69c-.12-.32-.18-.7-.18-1.12V3.44c0-.42.06-.8.18-1.12l10.39 10.06L2.3 21.68zm17.98-10.36l-3.17-1.85-3.42 3.32 3.42 3.32 3.17-1.85c.93-.53 1.4-1.24 1.4-2.47 0-1.23-.47-1.94-1.4-2.47zM4.98.63C4.22.21 3.64.21 3.18.58l13.26 11.87 3.24-3.26L4.98.63z"/></svg>
            <div className="text-left">
              <div className="text-[10px] text-white/40 leading-none">Coming Soon</div>
              <div className="text-sm font-semibold text-white/70">Google Play</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  );
}
