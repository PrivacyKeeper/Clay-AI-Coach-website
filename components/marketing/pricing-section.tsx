'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Sparkles, Zap, HelpCircle, Users, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Monthly',
    price: '$4.99',
    period: '/month',
    description: 'Full access, cancel anytime',
    icon: <Zap className="w-6 h-6" />,
    popular: false,
    comingSoon: false,
    features: [
      'AI biomechanical coaching',
      'All three disciplines (Trap, Skeet, Sporting)',
      'Shotgun catalog (27+ competition guns)',
      'Shot shell logger & choke tracking',
      'Squad scoring (up to 5 shooters)',
      'GPS range finder & maps',
      'Weather integration',
      'Progress analytics',
      'Unlimited video analysis',
    ],
  },
  {
    name: 'Annual',
    price: '$49.99',
    period: '/year',
    description: 'Save 17%, best value',
    icon: <Sparkles className="w-6 h-6" />,
    popular: true,
    comingSoon: false,
    badge: 'Best Value',
    features: [
      'Everything in Monthly',
      'Priority AI processing',
      'Advanced trend analytics',
      'Equipment optimization insights',
      'Course strategy builder',
      'Early access to new features',
      'Export data & reports',
      'Save $10/year',
    ],
  },
  {
    name: 'Pro Coaching',
    price: 'TBA',
    period: '',
    description: 'For coaches and training programs',
    icon: <Users className="w-6 h-6" />,
    popular: false,
    comingSoon: true,
    badge: 'Coming Soon',
    features: [
      'Everything in Annual',
      'Manage up to 20 students',
      'Real-time student session monitoring',
      'Individual athlete progress dashboards',
      'Drill assignment and tracking',
      'Team and squad performance analytics',
      'Coach notes and session planning',
      'Priority support',
    ],
  },
];

export function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToWaitlist = () => {
    document.querySelector('#waitlist')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#0F172A]/85">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Pro Coaching. <span className="text-gradient">Fair Price.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Less than a box of target loads per month. No contracts. No hidden fees. No $700 hardware.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {(plans ?? []).map((plan: any, i: number) => (
            <motion.div
              key={plan?.name ?? i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border transition-all hover:shadow-xl flex flex-col ${
                plan?.popular
                  ? 'bg-gradient-to-b from-[hsl(var(--primary))]/10 to-[hsl(var(--card))] border-[hsl(var(--primary))]/30 hover:border-[hsl(var(--primary))]/50 shadow-lg'
                  : plan?.comingSoon
                    ? 'bg-gradient-to-b from-[hsl(var(--accent))]/5 to-[hsl(var(--card))] border-[hsl(var(--accent))]/20 hover:border-[hsl(var(--accent))]/40'
                    : 'bg-[hsl(var(--card))] border-white/5 hover:border-white/10'
              }`}
            >
              {plan?.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    plan?.popular
                      ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                      : 'bg-[hsl(var(--accent))] text-white'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan?.popular
                    ? 'bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))]'
                    : plan?.comingSoon
                      ? 'bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))]'
                      : 'bg-white/10 text-white/70'
                }`}>
                  {plan?.icon}
                </div>
                <h3 className="font-display text-xl font-bold">{plan?.name ?? ''}</h3>
              </div>

              <div className="mb-2">
                <span className={`font-display font-bold ${plan?.comingSoon ? 'text-3xl sm:text-4xl text-[hsl(var(--accent))]' : 'text-4xl sm:text-5xl'}`}>{plan?.price ?? ''}</span>
                {plan?.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-6">{plan?.description ?? ''}</p>

              <Button
                className={`w-full mb-6 font-semibold h-12 text-base ${
                  plan?.popular
                    ? 'bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] shadow-lg'
                    : plan?.comingSoon
                      ? 'bg-[hsl(var(--accent))]/20 hover:bg-[hsl(var(--accent))]/30 text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/30'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                }`}
                onClick={scrollToWaitlist}
              >
                {plan?.comingSoon ? 'Get Notified' : 'Join Waitlist'}
              </Button>

              <ul className="space-y-3 flex-1">
                {(plan?.features ?? []).map((feature: string, fi: number) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      plan?.popular ? 'text-[hsl(var(--primary))]' : plan?.comingSoon ? 'text-[hsl(var(--accent))]' : 'text-white/40'
                    }`} />
                    <span className="text-muted-foreground">{feature ?? ''}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Price comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Barrel cameras cost <strong className="text-white">$700+</strong>. Private coaching runs <strong className="text-white">$150-200/session</strong>. Clay AI Coach is <strong className="text-[hsl(var(--primary))]">$4.99/mo</strong>.
          </p>
          <Button
            variant="outline"
            onClick={scrollToWaitlist}
            className="mt-4 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            Have Questions?
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
