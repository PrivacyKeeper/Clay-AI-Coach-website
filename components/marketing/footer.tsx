'use client';

import { Crosshair } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/5 bg-[#0a1020]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Crosshair className="w-6 h-6 text-[hsl(var(--primary))]" />
            <span className="font-display text-lg font-bold tracking-tight">
              Clay <span className="text-[hsl(var(--accent))]">AI</span> Coach
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
            <a href="mailto:support@clayaicoach.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} Apps 1 LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Patent-pending AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
