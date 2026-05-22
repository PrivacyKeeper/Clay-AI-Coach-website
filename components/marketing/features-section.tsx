'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Crosshair, BookOpen, SlidersHorizontal, Package,
  BarChart3, Users, TrendingUp, Smartphone, Trophy,
  MapPin, Navigation, Map, CloudSun, HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: 'Biomechanical AI Analysis',
    description: 'Proprietary AI analyzes your stance, mount, swing, and follow-through frame by frame. Get coaching previously only available from $200/hour professionals.',
    accent: 'primary' as const,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Automatic Squad Scoring',
    description: 'Score your entire squad from a single camera angle. Track hits and misses for up to 5 shooters simultaneously with our Red/Green fingerprinting system.',
    accent: 'accent' as const,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Shotgun Catalog (27+ Guns)',
    description: 'Log every shotgun in your collection with detailed specs. Track which gun performs best for each discipline and target presentation.',
    accent: 'primary' as const,
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Shot Shell Logger',
    description: 'Track shell brands, shot sizes, and velocities. Let the data reveal which loads break the most clays for your shooting style.',
    accent: 'accent' as const,
  },
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: 'Choke Configuration Tracking',
    description: 'Record choke combinations for every round. Discover which setups give you the best results at different distances and angles.',
    accent: 'primary' as const,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'GPS Range Finder',
    description: 'Locate nearby shooting ranges with built-in GPS. Search by discipline, distance, and amenities to find your next place to shoot.',
    accent: 'accent' as const,
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Interactive Range Maps',
    description: 'View detailed maps of shooting ranges in your area. Get directions, see satellite views, and explore course layouts before you arrive.',
    accent: 'primary' as const,
  },
  {
    icon: <CloudSun className="w-6 h-6" />,
    title: 'Weather Integration',
    description: 'Check real-time weather conditions at any range. Wind speed, temperature, and visibility all affect clay flight. Plan your sessions smarter.',
    accent: 'accent' as const,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Progress Analytics',
    description: 'Deep statistical analysis of your shooting patterns reveals trends you cannot see yourself. Identify problems before they become habits.',
    accent: 'primary' as const,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'No Extra Equipment',
    description: 'Your phone is all you need. No $700 barrel cameras or special sensors. Just prop up your phone and start shooting.',
    accent: 'accent' as const,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Real-Time Pose Detection',
    description: 'Advanced computer vision tracks 33 body landmarks in real time. Analyze foot placement, hip rotation, gun mount, and swing path with precision.',
    accent: 'primary' as const,
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'For All Skill Levels',
    description: 'Whether you just broke your first clay or you are chasing a perfect 100 straight, Clay AI Coach adapts to your experience level.',
    accent: 'accent' as const,
  },
];

export function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const scrollToHelp = () => {
    document.querySelector('#waitlist')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#0F172A]/85">
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
            Need Help? Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
