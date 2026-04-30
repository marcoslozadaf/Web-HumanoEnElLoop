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
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{ height: post.height * scale }}
    >
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

        <div className={
          linkedInPosts.length === 1
            ? "flex justify-center"
            : "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        }>
          {linkedInPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 snap-center w-[504px] max-w-[90vw] rounded-xl overflow-hidden border border-border bg-card"
            >
              <LinkedInEmbed post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
