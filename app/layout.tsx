import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://laptopverdicts.com'), // Change to your domain
  title: {
    default: 'LaptopVerdicts - AI-Powered Laptop Reviews & Buying Guides',
    template: '%s | LaptopVerdicts'
  },
  description: 'Honest, data-driven laptop reviews powered by AI. Compare specs, find deals, and get personalized recommendations. No BS, just truth.',
  keywords: [
    'laptop reviews',
    'best laptops 2026',
    'laptop buying guide',
    'gaming laptops',
    'business laptops',
    'budget laptops',
    'laptop comparison',
    'MacBook reviews',
    'Windows laptops',
    'laptop deals'
  ],
  authors: [{ name: 'LaptopVerdicts Team' }],
  creator: 'LaptopVerdicts',
  publisher: 'LaptopVerdicts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://laptopverdicts.com',
    title: 'LaptopVerdicts - AI-Powered Laptop Reviews',
    description: 'Honest, data-driven laptop reviews powered by AI. Find your perfect laptop in 60 seconds.',
    siteName: 'LaptopVerdicts',
    images: [
      {
        url: '/og-image.jpg', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'LaptopVerdicts - AI-Powered Laptop Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaptopVerdicts - AI-Powered Laptop Reviews',
    description: 'Honest, data-driven laptop reviews powered by AI.',
    images: ['/og-image.jpg'],
    creator: '@laptopverdicts', // Create Twitter account
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add after setting up Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LaptopVerdicts',
              url: 'https://laptopverdicts.com',
              description: 'AI-powered laptop reviews and buying guides',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://laptopverdicts.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LaptopVerdicts',
              url: 'https://laptopverdicts.com',
              logo: 'https://laptopverdicts.com/logo.png',
              sameAs: [
                'https://twitter.com/laptopverdicts',
                'https://facebook.com/laptopverdicts',
                'https://youtube.com/@laptopverdicts',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
