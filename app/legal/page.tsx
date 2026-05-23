import { Crosshair, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal | Clay AI Coach',
  description: 'Privacy Policy and Terms of Service for Clay AI Coach.',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Header */}
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
        {/* Privacy Policy */}
        <section className="mb-20">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: May 21, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                Clay AI Coach (&quot;the App&quot;) collects the following categories of information to provide and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Account Information:</strong> Email address, name, and password when you create an account.</li>
                <li><strong className="text-foreground">Video and Camera Data:</strong> Video recordings captured during shooting sessions are processed on-device using on-device pose detection. Raw video is not stored on our servers unless you explicitly choose to save a session.</li>
                <li><strong className="text-foreground">Performance Data:</strong> Scores, shooting statistics, equipment logs, session history, and AI coaching feedback generated during use.</li>
                <li><strong className="text-foreground">Device Information:</strong> Device type, operating system version, and app version for troubleshooting and compatibility.</li>
                <li><strong className="text-foreground">Location Data:</strong> GPS data is used solely for the range finder and weather features. Location is collected only when you use these features and is not stored permanently.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide AI biomechanical coaching and analysis.</li>
                <li>To track your shooting performance and generate progress analytics.</li>
                <li>To enable squad scoring and shared session features.</li>
                <li>To display nearby shooting ranges, maps, and weather conditions.</li>
                <li>To improve our AI models and app performance (using anonymized, aggregated data only).</li>
                <li>To communicate with you about your account, updates, and support requests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">3. Data Storage and Security</h2>
              <p>
                Your data is stored securely using industry-standard encryption. Video processing for pose detection occurs on-device and is not transmitted to external servers. Account and performance data are stored in secure cloud infrastructure with encryption at rest and in transit.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share anonymized, aggregated statistics for research purposes. We may share your data with third-party service providers (cloud hosting, payment processing) solely to operate the App. We will disclose data if required by law or to protect the safety of our users.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">5. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">support@clayaicoach.com</a>. You may also export your shooting data from within the App.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">6. Children&apos;s Privacy</h2>
              <p>
                Clay AI Coach is not intended for use by children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected data from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">7. Contact</h2>
              <p>
                For questions about this Privacy Policy, contact us at <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">support@clayaicoach.com</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/10 mb-20" />

        {/* Terms of Service */}
        <section>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: May 21, 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using Clay AI Coach (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the App.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">2. Description of Service</h2>
              <p>
                Clay AI Coach is a mobile application that provides AI-driven biomechanical coaching, automatic squad scoring, equipment tracking, and performance analytics for clay pigeon shooting disciplines including Trap, Skeet, and Sporting Clays.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">3. Subscription and Billing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clay AI Coach offers a Monthly subscription at $4.99/month and an Annual subscription at $49.99/year.</li>
                <li>Payment is processed through the Apple App Store or Google Play Store.</li>
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                <li>Refunds are handled according to the policies of the respective app store.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">4. Acceptable Use</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for any unlawful purpose.</li>
                <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
                <li>Attempt to gain unauthorized access to any systems or networks connected to the App.</li>
                <li>Use the App in any manner that could damage, disable, or impair the service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">5. Intellectual Property</h2>
              <p>
                The App, including its AI models, algorithms, design, and content, is the property of Apps 1 LLC and is protected by intellectual property laws. Our AI coaching technology is patent-pending. You may not copy, modify, or distribute any part of the App without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">6. Disclaimer of Warranties</h2>
              <p>
                The App is provided &quot;as is&quot; without warranties of any kind. AI coaching feedback is informational and should not replace professional instruction for firearm safety. Always follow proper safety protocols at the range. We do not guarantee the accuracy of AI analysis or scoring.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">7. Limitation of Liability</h2>
              <p>
                Apps 1 LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of the App. Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms. We will notify you of material changes via the App or email.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-foreground font-display text-xl font-semibold mb-3">10. Contact</h2>
              <p>
                For questions about these Terms of Service, contact us at <a href="mailto:support@clayaicoach.com" className="text-[hsl(var(--primary))] hover:underline">support@clayaicoach.com</a>.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a1020]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 Apps 1 LLC. All rights reserved.
          </p>
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
