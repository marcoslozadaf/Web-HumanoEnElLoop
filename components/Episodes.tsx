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

        {/* Episodes */}
        {isVisible && (
          <div className="max-w-2xl mx-auto">
            <EpisodeCard episode={episodes[0]} index={0} />
          </div>
        )}
      </div>
    </section>
  )
}
