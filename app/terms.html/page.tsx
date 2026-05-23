import { Crosshair, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Clay AI Coach',
  description: 'Terms of Service for Clay AI Coach.',
};

export default function TermsPage() {
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
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: May 23, 2026</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Clay AI Coach (&quot;the App&quot;), you agree to these Terms of Service.
              If you do not agree, do not use the App.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">2. Age Requirements</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum age to use Clay AI Coach: <strong className="text-foreground">13 years</strong>.</li>
              <li>
                Minimum age to purchase subscriptions or paid features: <strong className="text-foreground">18 years</strong>.
              </li>
              <li>Users under 18 must have parental or guardian consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">3. Account Responsibility</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activity that
              occurs under your account. You agree to notify us immediately of unauthorized account use.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">4. Description of Service</h2>
            <p>
              Clay AI Coach provides AI-driven coaching, performance tracking, and related features for clay shooting
              disciplines. Some features may evolve, change, or be discontinued as the product develops.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">5. User Content</h2>
            <p className="mb-3">
              You retain ownership of your uploaded content (including videos, scores, notes, and other training data).
              By uploading content, you grant us a non-exclusive license to process and display it in order to provide App
              functionality.
            </p>
            <p>
              You agree not to upload unlawful, harmful, fraudulent, infringing, or abusive content.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">6. Prohibited Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for illegal or unauthorized purposes.</li>
              <li>Harass, threaten, or abuse other users.</li>
              <li>Attempt to reverse engineer or compromise the App or related systems.</li>
              <li>Use bots, scraping, or automated abuse that harms App performance.</li>
              <li>Misrepresent data, performance, identity, or qualifications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">7. Subscriptions and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clay AI Coach offers monthly and annual subscription options.</li>
              <li>Payments are processed by Apple App Store and/or Google Play Store where applicable.</li>
              <li>Subscriptions may auto-renew unless canceled through the corresponding app store settings.</li>
              <li>Refunds are handled under our Refund Policy and app store platform rules.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">8. No Warranty</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied,
              including warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Apps 1 LLC and Clay AI Coach are not liable for indirect,
              incidental, special, consequential, or punitive damages arising from your use of the App.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">10. Safety Disclaimer</h2>
            <p>
              AI coaching guidance is informational only and does not replace certified firearms instruction or range
              safety protocols. You are solely responsible for safe behavior and compliance with all laws and range rules.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">11. Termination</h2>
            <p>
              We may suspend or terminate accounts that violate these Terms, applicable law, or platform policies. You may
              stop using the App at any time and request account deletion through support.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Wyoming, USA, unless otherwise required by applicable
              local consumer protection law.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of Clay AI Coach after updates constitutes
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-display text-xl font-semibold mb-3">14. Contact</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">
                support@clayaicoach.com
              </a>
              .
            </p>
          </div>
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
