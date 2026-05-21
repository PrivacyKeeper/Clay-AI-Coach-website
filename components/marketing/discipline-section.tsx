'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Target, Timer, Zap, Eye, RotateCw, Brain, Crosshair, TrendingUp, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DisciplineProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: Array<{ icon: React.ReactNode; title: string; description: string }>;
  reversed?: boolean;
}

function DisciplineCard({ id, title, subtitle, description, imageUrl, imageAlt, features, reversed }: DisciplineProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="py-16 sm:py-24">
      <div className={cn(
        'max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center',
        reversed && 'lg:[direction:rtl] lg:*:[direction:ltr]'
      )}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-[hsl(var(--accent))]/90 text-sm font-semibold text-white">
                {subtitle}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {description}
          </p>
          <div className="space-y-4">
            {(features ?? []).map((feature: { icon: React.ReactNode; title: string; description: string }, i: number) => (
              <motion.div
                key={feature?.title ?? i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))]">
                  {feature?.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{feature?.title ?? ''}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature?.description ?? ''}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function DisciplinesSection() {
  return (
    <section id="disciplines" className="relative">
      {/* Section header */}
      <div className="text-center pt-16 sm:pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-sm font-medium mb-4">
            Every Discipline
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            One App. Three Disciplines. <span className="text-gradient">Total Mastery.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you shoot Trap, Skeet, or Sporting Clays — our AI adapts to your discipline and delivers personalized coaching.
          </p>
        </motion.div>
      </div>

      {/* Trap */}
      <DisciplineCard
        id="trap"
        title="Master Trap: Concentration & Consistency"
        subtitle="Trap"
        imageUrl="https://cdn.abacus.ai/images/79c31dc2-509d-4e12-9b29-4d643673f933.png"
        imageAlt="Trap shooting at a range with clay targets launching from a low house"
        description="Trap demands razor-sharp focus on a single target moving away from you at high speed. Our AI analyzes your mount timing, lead calculation, and follow-through consistency across all five stations."
        features={[
          { icon: <Target className="w-5 h-5" />, title: 'Mount Timing Analysis', description: 'Frame-by-frame breakdown of your gun mount speed and consistency from call to first movement.' },
          { icon: <Eye className="w-5 h-5" />, title: 'Lead Pattern Recognition', description: 'AI tracks your lead distance across different angles and stations, identifying where you consistently over- or under-lead.' },
          { icon: <RotateCw className="w-5 h-5" />, title: 'Station-by-Station Progress', description: 'Track performance at each of the five stations to identify weak spots and build a focused practice plan.' },
        ]}
      />

      {/* Skeet */}
      <div className="bg-white/[0.02]">
        <DisciplineCard
          id="skeet"
          title="Perfect Your Skeet: Rhythm & Timing"
          subtitle="Skeet"
          imageUrl="https://cdn.abacus.ai/images/093e237f-1a2e-457e-a9fa-70245673d131.png"
          imageAlt="Skeet shooting with crossing targets from high and low houses"
          description="Skeet shooting is a dance of rhythm and timing with crossing targets from two houses. Our AI breaks down your swing mechanics, hold points, and transitions between singles and doubles."
          features={[
            { icon: <Timer className="w-5 h-5" />, title: 'Swing Speed Tracking', description: 'Measures your swing velocity through the break point, ensuring you maintain consistent speed without decelerating.' },
            { icon: <Crosshair className="w-5 h-5" />, title: 'Hold Point Optimization', description: 'AI recommends optimal hold points for each station based on your reaction time and swing style.' },
            { icon: <Zap className="w-5 h-5" />, title: 'Doubles Transition Analysis', description: 'Analyzes your recovery time between the first and second shot on doubles stations to improve efficiency.' },
          ]}
          reversed
        />
      </div>

      {/* Sporting Clays */}
      <DisciplineCard
        id="sporting"
        title="Dominate Sporting Clays: Adapt & Execute"
        subtitle="Sporting Clays"
        imageUrl="https://cdn.abacus.ai/images/1337adf7-ce9d-4112-9600-26633d906b35.png"
        imageAlt="Sporting clays course in a wooded setting with varied target presentations"
        description="Sporting clays is the ultimate test — every station is different. Our AI helps you adapt your technique to any presentation, from chandelles to teal to battue targets."
        features={[
          { icon: <Brain className="w-5 h-5" />, title: 'Presentation Recognition', description: 'AI identifies target type and trajectory, then provides technique recommendations tailored to each specific presentation.' },
          { icon: <TrendingUp className="w-5 h-5" />, title: 'Course Strategy Builder', description: 'Analyzes your historical performance to build a station-by-station game plan before you even step on the course.' },
          { icon: <Gauge className="w-5 h-5" />, title: 'Adaptability Score', description: 'Tracks how well you adjust between different target presentations, measuring your ability to switch techniques on the fly.' },
        ]}
      />
    </section>
  );
}
