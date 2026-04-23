"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const ApplePodcastsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.525 2.568c4.987 0 9.037 4.028 9.037 9.037 0 4.988-4.05 9.037-9.037 9.037-4.988 0-9.037-4.05-9.037-9.037 0-4.988 4.05-9.037 9.037-9.037zm-.158 3.61a.246.246 0 0 0-.093.02 5.36 5.36 0 0 0-3.353 4.992 5.359 5.359 0 0 0 2.162 4.293.253.253 0 0 0 .353-.07.252.252 0 0 0-.069-.352 4.86 4.86 0 0 1-1.959-3.893 4.86 4.86 0 0 1 3.04-4.512.252.252 0 0 0-.081-.478zm.345 0a.252.252 0 0 0-.088.479 4.86 4.86 0 0 1 3.048 4.511 4.86 4.86 0 0 1-1.959 3.893.252.252 0 0 0 .284.416 5.359 5.359 0 0 0 2.162-4.293 5.36 5.36 0 0 0-3.353-4.992.246.246 0 0 0-.094-.014zm-.187 2.318a2.478 2.478 0 0 0-1.758.728 2.478 2.478 0 0 0 0 3.505 2.478 2.478 0 0 0 3.505 0 2.478 2.478 0 0 0 0-3.505 2.478 2.478 0 0 0-1.747-.728zm-.006 1.09c.352 0 .683.137.933.387.249.25.386.58.386.933 0 .352-.137.683-.386.932a1.318 1.318 0 0 1-1.866 0 1.318 1.318 0 0 1 0-1.865c.25-.25.58-.386.933-.386zm.01 4.134a.755.755 0 0 0-.754.758v2.94c0 .418.339.757.756.757.418 0 .757-.34.757-.758v-2.939a.755.755 0 0 0-.758-.758z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

// Brand Assets
const HERO_LOGO_SVG = "/logo-humano-en-el-loop.svg"
const INFINITY_BG = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%207.png-xmuzicZDrOFROR5dkVXPrZTZL9Ck8V.jpeg"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with infinity watermark */}
      <div className="absolute inset-0">
        <Image
          src={INFINITY_BG}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Logo with tagline - using official brand image */}
        <div 
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Using SVG for crisp rendering at any size */}
            <img
              src={HERO_LOGO_SVG}
              alt="Humano en el Loop - by Bircle"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tagline */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-4">
            El podcast sobre inteligencia artificial y atención al cliente
          </p>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Conversaciones sobre cómo la IA está transformando la forma en que las empresas se relacionan con sus clientes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
            Escuchá ahora
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              <SpotifyIcon />
              <span>Spotify</span>
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <ApplePodcastsIcon />
              <span>Apple Podcasts</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
            >
              <YouTubeIcon />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
