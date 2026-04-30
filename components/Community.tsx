"use client"

import { linkedInPosts, type LinkedInPost } from "@/lib/linkedin-posts"
import { useRef, useState, useEffect } from "react"

const IFRAME_W = 504

function LinkedInEmbed({ post }: { post: LinkedInPost }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return
      const w = containerRef.current.offsetWidth
      setScale(w < IFRAME_W ? w / IFRAME_W : 1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div ref={containerRef} className="w-full overflow-hidden" style={{ height: post.height * scale }}>
      <iframe
        src={post.embedUrl}
        width={IFRAME_W}
        height={post.height}
        allowFullScreen
        title={`Publicación de ${post.author}`}
        style={{ border: "none", transformOrigin: "top left", transform: `scale(${scale})` }}
      />
    </div>
  )
}

export function Community() {
  const [current, setCurrent] = useState(0)
  const total = linkedInPosts.length

  const prev = () => setCurrent((i) => (i - 1 + total) % total)
  const next = () => setCurrent((i) => (i + 1) % total)

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            La comunidad habla
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Lo que se dice del podcast
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Card */}
          <div className="w-126 max-w-[90vw] rounded-xl overflow-hidden border border-border bg-card">
            <LinkedInEmbed key={linkedInPosts[current].id} post={linkedInPosts[current]} />
          </div>

          {/* Controls */}
          {total > 1 && (
            <div className="flex items-center gap-6">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
                aria-label="Anterior"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {linkedInPosts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "w-6 h-2 bg-foreground"
                        : "w-2 h-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Ir al post ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
                aria-label="Siguiente"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
