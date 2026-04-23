import Image from "next/image"

// Brand Assets
const LOGO_CIRCULAR = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%206-wqcmz2dHvvZHgl5ZWbbKzHO9YTlSKk.png"
const INFINITY_GRADIENT = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2074-QTklq6mYfcq4VuqztoslN2kygWPLFA.png"

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

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
)

export function Footer() {
  const socialLinks = [
    { icon: SpotifyIcon, href: "https://open.spotify.com", label: "Spotify" },
    { icon: ApplePodcastsIcon, href: "https://podcasts.apple.com", label: "Apple Podcasts" },
    { icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
    { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={LOGO_CIRCULAR}
                alt="Humano en el Loop"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full"
              />
              <span className="font-display font-bold text-sm tracking-widest uppercase">
                Humano en el Loop
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              El podcast sobre inteligencia artificial y atención al cliente.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span>Un podcast de</span>
              <a 
                href="https://bircle.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:underline"
              >
                <Image
                  src={INFINITY_GRADIENT}
                  alt="Bircle"
                  width={24}
                  height={12}
                  className="w-6 h-3"
                />
                <span>Bircle</span>
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#episodios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Episodios
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Sobre el podcast
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Newsletter
                </a>
              </li>
              <li>
                <a 
                  href="https://bircle.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Bircle
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Escuchanos en
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Humano en el Loop. Un podcast de{" "}
            <a 
              href="https://bircle.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Bircle
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
