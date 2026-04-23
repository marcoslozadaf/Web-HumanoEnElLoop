import type { Episode } from "@/lib/episodes"
import Image from "next/image"

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

interface EpisodeCardProps {
  episode: Episode
  index: number
}

export function EpisodeCard({ episode, index }: EpisodeCardProps) {
  return (
    <article 
      className="group relative p-6 rounded-lg bg-card border border-border hover:border-muted-foreground/30 transition-all duration-300 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
    >
      {/* New badge */}
      {episode.isNew && (
        <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-foreground text-background rounded-full">
          Nuevo
        </span>
      )}

      {/* Episode cover with icon */}
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-white overflow-hidden">
          {episode.coverIcon ? (
            <Image
              src={episode.coverIcon}
              alt=""
              width={48}
              height={48}
              className="w-10 h-10 object-contain"
            />
          ) : (
            <span className="font-display font-bold text-lg text-muted-foreground">
              {episode.number}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-foreground/90 transition-colors">
            {episode.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {episode.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {episode.duration}
            </span>
            <span>{episode.date}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          {episode.spotifyUrl && (
            <a
              href={episode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Escuchar en Spotify"
            >
              <SpotifyIcon />
            </a>
          )}
        </div>
        
        <a
          href={episode.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          <PlayIcon />
          <span>Escuchar</span>
        </a>
      </div>
    </article>
  )
}
