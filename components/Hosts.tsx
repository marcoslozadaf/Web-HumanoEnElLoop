"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const HOSTS_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Secuencia%2001.00_00_00_00.Imagen%20fija002-5z3CZZqOa89MyylTe5KYQ224uYnlh9.jpg"

const hosts = [
  {
    name: "José Luis Romero Victorica",
    role: "Cofundador de Bircle",
  },
  {
    name: "Marcos Lozada Freytes",
    role: "Cofundador de Bircle",
  },
]

export function Hosts() {
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
      id="hosts" 
      className="py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div 
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Quiénes somos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Somos los fundadores de Bircle, la plataforma de IA conversacional para atención al cliente. 
            Desde nuestra experiencia construyendo tecnología, compartimos reflexiones sobre el futuro de la interacción humano-máquina.
          </p>
        </div>

        {/* Hosts Content */}
        <div 
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Photo */}
          <div className="relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={HOSTS_IMAGE}
              alt="José Luis Romero Victorica y Marcos Lozada Freytes - Cofundadores de Bircle"
              fill
              className="object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {hosts.map((host, index) => (
              <div 
                key={host.name}
                className={`transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <h3 className="font-display font-bold text-xl md:text-2xl mb-1">
                  {host.name}
                </h3>
                <p className="text-muted-foreground">
                  {host.role}
                </p>
              </div>
            ))}

            {/* Bircle link */}
            <a 
              href="https://bircle.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4DC4E0] hover:text-[#4FD9A0] transition-colors font-medium"
            >
              <span>Conocé más sobre Bircle</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
