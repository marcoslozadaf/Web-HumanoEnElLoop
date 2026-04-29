"use client"

import { linkedInPosts } from "@/lib/linkedin-posts"

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
              <iframe
                src={post.embedUrl}
                width="504"
                height="543"
                frameBorder="0"
                allowFullScreen
                title={`Publicación de ${post.author}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
