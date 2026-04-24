import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Humano en el Loop — El podcast sobre IA y atención al cliente',
  description: 'Conversaciones sobre cómo la inteligencia artificial está transformando la forma en que las empresas se relacionan con sus clientes. Un podcast de Bircle.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Humano en el Loop',
    description: 'El podcast sobre IA y atención al cliente',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humano en el Loop',
    description: 'El podcast sobre IA y atención al cliente',
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
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
