'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight, Loader2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email?.trim?.()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email?.trim?.(), name: name?.trim?.() || null }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setMessage(data?.message ?? "You're on the list!");
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data?.error ?? 'Something went wrong.');
      }
    } catch (err: any) {
      console.error('Waitlist submission error:', err);
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24 bg-[#0F172A]/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--primary))]/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-[hsl(var(--primary))]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Be First to <span className="text-gradient">Break More Clays</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join the waitlist and be the first to know when Clay AI Coach launches. Early adopters get exclusive access.
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20"
            >
              <CheckCircle2 className="w-12 h-12 text-[hsl(var(--primary))]" />
              <h3 className="font-display text-xl font-bold">You&apos;re on the list!</h3>
              <p className="text-muted-foreground text-sm">{message}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value ?? '')}
                  required
                  className="h-12 pl-12 bg-white/5 border-white/10 focus:border-[hsl(var(--primary))]/50 text-base placeholder:text-muted-foreground/50"
                />
              </div>
              <Input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value ?? '')}
                className="h-12 bg-white/5 border-white/10 focus:border-[hsl(var(--primary))]/50 text-base placeholder:text-muted-foreground/50"
              />
              <Button
                type="submit"
                disabled={status === 'loading' || !email?.trim?.()}
                className="w-full h-12 text-base font-semibold bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[hsl(var(--primary-foreground))] shadow-lg hover:shadow-xl"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Joining...</>
                ) : (
                  <>Join the Waitlist <ArrowRight className="w-4 h-4" /></>
                )}
              </Button>
              {status === 'error' && (
                <p className="text-sm text-red-400">{message}</p>
              )}
              <p className="text-xs text-muted-foreground/60 mt-3">
                No spam, ever. We will only email you about the launch.
              </p>
            </form>
          )}

          {/* Help link */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <HelpCircle className="w-4 h-4" />
            <span>Need help? Email us at <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">support@clayaicoach.com</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
