'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cpu, Camera, DollarSign, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span className="font-mono text-4xl sm:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 700, suffix: '+', label: 'Saved vs barrel cameras' , prefix: '$' },
  { value: 4, suffix: '.99', label: 'Per month', prefix: '$' },
  { value: 3, suffix: '', label: 'Disciplines covered', prefix: '' },
  { value: 5, suffix: '', label: 'Shooters per squad', prefix: '' },
];

const points = [
  { icon: <Cpu className="w-6 h-6" />, title: 'Proprietary AI Engine', description: 'Our patent-pending analysis engine goes beyond simple hit/miss counting. It understands biomechanics, timing, and technique using real-time pose detection.' },
  { icon: <Camera className="w-6 h-6" />, title: 'Your Phone Is All You Need', description: 'Tripod or handheld, iPhone or Android. No $700 barrel cameras, no sensors, no wearables. Just point and shoot (your phone, that is).' },
  { icon: <Shield className="w-6 h-6" />, title: 'Why, Not Just What', description: 'Other apps count hits and misses. We analyze WHY you missed. Was it your mount? Your lead? Your follow-through? Now you know.' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'Pro Coaching, Fair Price', description: 'Getting this level of analysis from a professional coach costs $150-200 per session. Get it every round for $4.99/mo, less than a box of target loads.' },
];

export function WhySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollToHelp = () => {
    document.querySelector('#waitlist')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0F172A]/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-sm font-medium mb-4">
            Why Clay AI Coach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Most Advanced Clay Shooting <span className="text-gradient">AI Ever Created</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Other apps just count hits and misses. We analyze <strong className="text-foreground">why</strong> you missed and tell you exactly how to fix it.
          </p>
        </motion.div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {(stats ?? []).map((stat: any, i: number) => (
            <motion.div
              key={stat?.label ?? i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/5"
            >
              <div className="font-mono text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {stat?.prefix ?? ''}<AnimatedCounter target={stat?.value ?? 0} suffix={stat?.suffix ?? ''} inView={statsInView} />
              </div>
              <div className="text-muted-foreground text-sm">{stat?.label ?? ''}</div>
            </motion.div>
          ))}
        </div>

        {/* Why points */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(points ?? []).map((point: any, i: number) => (
            <motion.div
              key={point?.title ?? i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-[hsl(var(--card))] border border-white/5 hover:border-white/10 transition-all hover:shadow-lg"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] flex items-center justify-center">
                {point?.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{point?.title ?? ''}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point?.description ?? ''}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            onClick={scrollToHelp}
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Questions? We Can Help
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
