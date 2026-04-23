"use client"

import { useEffect, useRef, useState } from "react"

// Local SVG for crisp rendering
const INFINITY_GRADIENT_SVG = "/infinity-gradient.svg"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="sobre" 
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
              Sobre el podcast
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              ¿De qué hablamos?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En cada episodio, exploramos las conversaciones que importan. Cómo la inteligencia artificial está redefiniendo la cobranza, las ventas y el servicio al cliente en Latinoamérica.
              </p>
              <p>
                Desde agentes autónomos hasta el arte de la negociación conversacional, <strong className="text-foreground">Humano en el Loop</strong> es el espacio donde la tecnología y el factor humano se encuentran.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Nuevos episodios cada semana
              </p>
            </div>
          </div>

          {/* Right: Large Infinity Symbol */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Main infinity symbol with gradient - SVG for crisp quality */}
              <div className="relative flex items-center justify-center p-8">
                <img
                  src={INFINITY_GRADIENT_SVG}
                  alt=""
                  className="w-full h-auto infinity-glow"
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#4DC4E0]/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
