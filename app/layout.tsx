import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://humanoenelloop.com'),
  title: {
    default: 'Humano en el Loop — Podcast de Inteligencia Artificial y Negocios | Bircle',
    template: '%s | Humano en el Loop',
  },
  description: 'El podcast sobre inteligencia artificial, machine learning y atención al cliente. Conversaciones con líderes que transforman sus empresas con IA. Un podcast de Bircle.',
  keywords: [
    'inteligencia artificial',
    'artificial intelligence business',
    'machine learning negocios',
    'ética inteligencia artificial',
    'human experience and AI',
    'human centered AI leadership',
    'artificial intelligence in business',
    'atención al cliente inteligencia artificial',
    'podcast inteligencia artificial',
    'podcast IA negocios',
    'Bircle',
    'transformación digital empresas',
    'automatización atención al cliente',
    'IA LATAM',
  ],
  authors: [{ name: 'Bircle', url: 'https://bircle.ai' }],
  creator: 'Bircle',
  publisher: 'Bircle',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://humanoenelloop.com',
  },
  openGraph: {
    title: 'Humano en el Loop — Podcast de Inteligencia Artificial y Negocios',
    description: 'El podcast sobre inteligencia artificial, machine learning y atención al cliente. Conversaciones con líderes que transforman sus empresas con IA. Un podcast de Bircle.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://humanoenelloop.com',
    siteName: 'Humano en el Loop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humano en el Loop — Podcast de IA y Negocios',
    description: 'El podcast sobre inteligencia artificial, machine learning y atención al cliente. Un podcast de Bircle.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${interTight.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Script
          id="json-ld-podcast"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastSeries",
            "name": "Humano en el Loop",
            "description": "El podcast sobre inteligencia artificial, machine learning y atención al cliente. Conversaciones con líderes que transforman sus empresas con IA.",
            "url": "https://humanoenelloop.com",
            "inLanguage": "es",
            "genre": ["Technology", "Business", "Artificial Intelligence"],
            "keywords": "inteligencia artificial, machine learning negocios, ética inteligencia artificial, atención al cliente IA, artificial intelligence business, human experience and AI, Bircle",
            "author": {
              "@type": "Organization",
              "name": "Bircle",
              "url": "https://bircle.ai"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bircle",
              "url": "https://bircle.ai"
            },
            "potentialAction": {
              "@type": "ListenAction",
              "target": [
                "https://open.spotify.com/show/1w0BL82UOtlqPbFxJMKsrM",
                "https://podcasts.apple.com/ar/podcast/humano-en-el-loop/id1895367070",
                "https://www.youtube.com/@humanoenelloop"
              ]
            }
          })}}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J62KK5WYWV" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J62KK5WYWV');
        `}</Script>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
