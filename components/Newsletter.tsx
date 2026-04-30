"use client"

import { useState, useRef, useEffect } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error()

      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="newsletter" 
      className="relative py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div 
          className={`relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
              No te pierdas ningún episodio
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Suscribite y recibí cada episodio nuevo directo a tu inbox, más contenido exclusivo sobre IA y experiencia de cliente.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  disabled={status === "loading" || status === "success"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando..." : status === "success" ? "¡Suscripto!" : "Suscribirme"}
                </button>
              </div>
              
              {status === "error" && (
                <p className="text-destructive text-sm mt-3">
                  Por favor ingresá un email válido.
                </p>
              )}
              
              {status === "success" && (
                <p className="text-green-400 text-sm mt-3">
                  ¡Gracias por suscribirte! Pronto recibirás nuestro newsletter.
                </p>
              )}
            </form>

            <p className="text-muted-foreground text-xs mt-6">
              Sin spam. Podés desuscribirte cuando quieras.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              ¿Querés ser parte o tenés algo para aportar?{" "}
              <a
                href="mailto:hola@humanoenelloop.com"
                className="text-foreground hover:underline font-medium"
              >
                hola@humanoenelloop.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
