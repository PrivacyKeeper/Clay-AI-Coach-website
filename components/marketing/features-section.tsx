'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Crosshair, BookOpen, SlidersHorizontal, Package,
  BarChart3, Users, TrendingUp, Smartphone, Trophy
} from 'lucide-react';

const features = [
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: 'Biomechanical AI Analysis',
    description: 'Proprietary AI analyzes your stance, mount, swing, and follow-through frame by frame. Get coaching that was previously only available from $200/hour professionals.',
    accent: 'primary' as const,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Complete Gun Library',
    description: 'Log every shotgun in your collection with detailed specs. Track which gun performs best for each discipline and target presentation.',
    accent: 'accent' as const,
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: 'Choke Configuration Tracking',
    description: 'Record choke combinations for every round. Discover which setups give you the best results at different distances and angles.',
    accent: 'primary' as const,
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Ammo Performance Logs',
    description: 'Track shell brands, shot sizes, and velocities. Let the data tell you which loads break the most clays for your shooting style.',
    accent: 'accent' as const,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Pattern Analysis',
    description: 'Deep statistical analysis of your shooting patterns reveals trends you cannot see yourself. Identify problems before they become habits.',
    accent: 'primary' as const,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Squad Scoring',
    description: 'Automatic scoring for your entire squad from a single camera angle. Track hits and misses for up to 5 shooters simultaneously.',
    accent: 'accent' as const,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Progress Tracking',
    description: 'Watch your scores improve over time with detailed trend analysis. Set goals, track milestones, and celebrate breakthroughs.',
    accent: 'primary' as const,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'No Extra Equipment',
    description: 'Your phone is all you need. No $700 barrel cameras or special sensors — just prop up your phone and start shooting.',
    accent: 'accent' as const,
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'For All Skill Levels',
    description: 'Whether you just broke your first clay or you are chasing a perfect 100 straight — Clay AI Coach adapts to your experience level.',
    accent: 'primary' as const,
  },
];

export function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="features" className="py-16 sm:py-24 bg-white/[0.02]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-sm font-medium mb-4">
            Loaded With Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to <span className="text-gradient">Break More Clays</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional-grade coaching tools that fit in your pocket. No expensive hardware. No complicated setup.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(features ?? []).map((feature: any, index: number) => (
            <motion.div
              key={feature?.title ?? index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group p-6 rounded-xl bg-[hsl(var(--card))] hover:bg-[hsl(var(--card))]/80 border border-white/5 hover:border-white/10 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                feature?.accent === 'accent'
                  ? 'bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]'
                  : 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]'
              }`}>
                {feature?.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature?.title ?? ''}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature?.description ?? ''}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
