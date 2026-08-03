export interface Episode {
  id: number
  number: string
  title: string
  description: string
  duration: string
  date: string
  isNew?: boolean
  coverIcon?: string
  spotifyUrl?: string
  appleUrl?: string
  youtubeUrl?: string
}

// Brand icons for episode covers (blue versions)
const EPISODE_ICONS = {
  podcast: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%CC%81CONOS%20PODCAST-38-qMh4htSuqVBp64WCJIwundeJsH2CRA.png",
  shuffle: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%CC%81CONOS%20PODCAST-39-EvZwUlKzvhaoIrktuZusevWryzbkgj.png",
  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%CC%81CONOS%20PODCAST-31-WxnAY6m3Dprusuqn87KOpqiWc2W0bH.png",
  loop: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/I%CC%81CONOS%20PODCAST-29-G6JsGqe3JAkyDLSpgLmb6UmKJZQCHx.png",
}

export const episodes: Episode[] = [
  {
    id: 2,
    number: "02",
    title: "La calidad en la era de los Agentes de IA.",
    description: "Con Diego Malat, Founder & CEO de Tripointhub y consultor senior en CX e IA con más de 20 años en la industria de los contactos con clientes.",
    duration: "1h 16min",
    date: "31 Jul 2026",
    isNew: true,
    coverIcon: EPISODE_ICONS.shuffle,
    spotifyUrl: "https://open.spotify.com/episode/3sCsKvgEGTt1CZsaseRqFv?si=BHO9aXtqR3KwNP7HCGwNkw",
    appleUrl: "https://podcasts.apple.com/ar/podcast/la-calidad-en-la-era-de-los-agentes-de-ia/id1895367070?i=1000779337665",
    youtubeUrl: "https://youtu.be/TMVChqH8NfA",
  },
  {
    id: 1,
    number: "01",
    title: "De 0 a 20.000: cómo se construye un BPO gigante y qué viene con la IA",
    description: "Con José Romero Victorica, Founder & CEO de Allus Global BPO Center.",
    duration: "1h 10min",
    date: "24 Abr 2026",
    coverIcon: EPISODE_ICONS.podcast,
    spotifyUrl: "https://open.spotify.com/episode/3omyxIjJqcYqaCpnDkbC2R?si=FhkWlOhXSgypMzFjtTbhgg",
    appleUrl: "https://podcasts.apple.com/ar/podcast/de-0-a-20-000-c%C3%B3mo-se-construye-un-bpo-gigante/id1895367070?i=1000763414210",
    youtubeUrl: "https://youtu.be/iOUTnF5but8",
  },
]
