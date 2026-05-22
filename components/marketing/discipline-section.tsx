'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Timer, Zap, Eye, RotateCw, Brain, Crosshair, TrendingUp, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DisciplineProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  features: Array<{ icon: React.ReactNode; title: string; description: string }>;
}

function DisciplineCard({ id, title, subtitle, description, icon, accentColor, features }: DisciplineProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-10 hover:bg-white/[0.06] transition-colors"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center', accentColor)}>
          {icon}
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))]">{subtitle}</span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">{title}</h3>
        </div>
      </div>

      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
        {description}
      </p>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/[0.08] transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))]">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function DisciplinesSection() {
  return (
    <section id="disciplines" className="relative py-16 sm:py-24 bg-[#0F172A]/80">
      {/* Section header */}
      <div className="text-center pb-12 sm:pb-16 max-w-[1200px] mx-auto px-4 sm:px-6">
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
            Whether you shoot Trap, Skeet, or Sporting Clays, our AI adapts to your discipline and delivers personalized coaching.
          </p>
        </motion.div>
      </div>

      {/* Discipline cards */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <DisciplineCard
          id="trap"
          title="Trap"
          subtitle="Discipline"
          icon={<Target className="w-7 h-7 text-white" />}
          accentColor="bg-red-500/20"
          description="Trap demands razor-sharp focus on a single target moving away at high speed. Our AI analyzes your mount timing, lead calculation, and follow-through consistency across all five stations."
          features={[
            { icon: <Target className="w-5 h-5" />, title: 'Mount Timing Analysis', description: 'Frame-by-frame breakdown of your gun mount speed and consistency from call to first movement.' },
            { icon: <Eye className="w-5 h-5" />, title: 'Lead Pattern Recognition', description: 'AI tracks your lead distance across different angles and stations, identifying where you consistently over- or under-lead.' },
            { icon: <RotateCw className="w-5 h-5" />, title: 'Station-by-Station Progress', description: 'Track performance at each of the five stations to identify weak spots and build a focused practice plan.' },
          ]}
        />

        <DisciplineCard
          id="skeet"
          title="Skeet"
          subtitle="Discipline"
          icon={<Crosshair className="w-7 h-7 text-white" />}
          accentColor="bg-[hsl(var(--primary))]/20"
          description="Skeet shooting is a dance of rhythm and timing with crossing targets from two houses. Our AI breaks down your swing mechanics, hold points, and transitions between singles and doubles."
          features={[
            { icon: <Timer className="w-5 h-5" />, title: 'Swing Speed Tracking', description: 'Measures your swing velocity through the break point, ensuring you maintain consistent speed without decelerating.' },
            { icon: <Crosshair className="w-5 h-5" />, title: 'Hold Point Optimization', description: 'AI recommends optimal hold points for each station based on your reaction time and swing style.' },
            { icon: <Zap className="w-5 h-5" />, title: 'Doubles Transition Analysis', description: 'Analyzes your recovery time between the first and second shot on doubles stations to improve efficiency.' },
          ]}
        />

        <DisciplineCard
          id="sporting"
          title="Sporting Clays"
          subtitle="Discipline"
          icon={<Brain className="w-7 h-7 text-white" />}
          accentColor="bg-[hsl(var(--accent))]/20"
          description="Sporting clays is the ultimate test. Every station is different. Our AI helps you adapt your technique to any presentation, from chandelles to teal to battue targets."
          features={[
            { icon: <Brain className="w-5 h-5" />, title: 'Presentation Recognition', description: 'AI identifies target type and trajectory, then provides technique recommendations tailored to each specific presentation.' },
            { icon: <TrendingUp className="w-5 h-5" />, title: 'Course Strategy Builder', description: 'Analyzes your historical performance to build a station-by-station game plan before you even step on the course.' },
            { icon: <Gauge className="w-5 h-5" />, title: 'Adaptability Score', description: 'Tracks how well you adjust between different target presentations, measuring your ability to switch techniques on the fly.' },
          ]}
        />
      </div>
    </section>
  );
}