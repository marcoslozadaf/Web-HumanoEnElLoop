"use client"

import { useEffect, useRef, useState } from "react"
import { episodes } from "@/lib/episodes"
import { EpisodeCard } from "./EpisodeCard"

export function Episodes() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="episodios" 
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
            Episodios recientes
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">
            Escuchá las últimas conversaciones
          </h2>
        </div>

        {/* Episodes Grid */}
        {isVisible && (
          <div className="grid md:grid-cols-2 gap-6">
            {episodes.map((episode, index) => (
              <EpisodeCard key={episode.id} episode={episode} index={index} />
            ))}
          </div>
        )}

        {/* View all link */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Ver todos los episodios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
