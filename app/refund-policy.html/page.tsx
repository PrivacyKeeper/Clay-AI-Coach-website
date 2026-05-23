import { Crosshair, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy | Clay AI Coach',
  description: 'Refund Policy for Clay AI Coach subscriptions and purchases.',
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="border-b border-white/5 bg-[#0F172A]/90 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Crosshair className="w-7 h-7 text-[hsl(var(--primary))] group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-display text-lg font-bold tracking-tight">
              Clay <span className="text-[hsl(var(--accent))]">AI</span> Coach
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">Refund Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: May 23, 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">Premium Subscriptions</h2>
            <p>
              Clay AI Coach premium plans may be billed monthly or annually depending on the plan selected at purchase.
              You can cancel at any time through your app store subscription settings.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">Refund Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly subscription refunds may be available within 7 days of purchase if premium features were not substantially used.</li>
              <li>Annual subscription refunds may be available within 14 days of purchase, prorated where usage has occurred.</li>
              <li>Approved refunds are returned to the original payment method.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">App Store Billing</h2>
            <p>
              For purchases made through Apple App Store or Google Play, refunds are typically processed under each
              platform&apos;s billing and refund procedures. Platform terms may control eligibility, timeline, and decisioning.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">International Payments</h2>
            <p>
              Refunds are issued in the original purchase currency. Exchange-rate differences, bank fees, and third-party
              processing fees are generally non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">How to Request a Refund</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">iOS:</strong> Settings → Apple ID → Subscriptions → Clay AI Coach →
                Request Refund
              </li>
              <li>
                <strong className="text-foreground">Android:</strong> Google Play Store → Menu → Subscriptions → Clay AI
                Coach → Cancel/Refund
              </li>
              <li>
                You may also contact us directly at{' '}
                <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">
                  support@clayaicoach.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have refund-related questions, please email{' '}
              <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">
                support@clayaicoach.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <footer className="border-t border-white/5 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">&copy; 2026 Apps 1 LLC. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/terms.html" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund-policy.html" className="hover:text-foreground transition-colors">
              Refund Policy
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
