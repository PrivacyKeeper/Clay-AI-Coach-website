'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const CLAY_QUOTES = [
  'One target at a time. One round at a time. One breakthrough at a time.',
  'Discipline beats excuses when the pressure is real.',
  'Smooth mount, quiet mind, clean break.',
  'Champions are built in the reps no one sees.',
  'Trust your fundamentals and let the shot happen.',
  'Consistency is the real competitive edge.',
  'Pressure reveals preparation.',
  'Stay calm, stay present, break the next bird.',
  'Confidence comes from keeping promises to yourself.',
  'Your routine is your superpower under stress.',
  'Progress is earned in the details.',
  'Focus on execution, and the score will follow.'
];

export function CrossQuoteWidget() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const dayBucket = Math.floor(Math.floor(Date.now() / 86400000) / 2);
      const selectedQuote = CLAY_QUOTES[dayBucket % CLAY_QUOTES.length];
      setQuote(selectedQuote);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!quote) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex max-w-[200px] flex-col items-center text-center pointer-events-none">
      <Image src="/cross.jpg" alt="Cross" width={64} height={64} className="mb-2 h-16 w-16 object-contain" />
      <p className="rounded-md bg-black/30 px-2 py-1 text-xs italic leading-snug text-white/85 shadow-lg">"{quote}"</p>
    </div>
  );
}
