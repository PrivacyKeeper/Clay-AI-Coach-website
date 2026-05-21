import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://clayaicoach.com'),
  title: 'Clay AI Coach | AI-Powered Clay Shooting Coach',
  description: 'From first-time shooter to championship squad — Clay AI Coach uses proprietary AI to analyze your form, track your equipment, and help you break more clays. No expensive hardware needed.',
  keywords: ['clay shooting', 'skeet', 'trap', 'sporting clays', 'AI coach', 'shooting coach', 'biomechanical analysis'],
  openGraph: {
    title: 'Clay AI Coach | AI-Powered Clay Shooting Coach',
    description: 'From first-time shooter to championship squad — Clay AI Coach uses proprietary AI to help you break more clays.',
    images: ['/og-image.png'],
    type: 'website',
    siteName: 'Clay AI Coach',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clay AI Coach | AI-Powered Clay Shooting Coach',
    description: 'From first-time shooter to championship squad — Clay AI Coach uses proprietary AI to help you break more clays.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
