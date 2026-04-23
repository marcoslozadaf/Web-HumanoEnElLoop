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
    id: 1,
    number: "01",
    title: "¿Puede una IA cobrar mejor que un humano?",
    description: "Exploramos cómo los agentes de IA están revolucionando la gestión de cobranzas en Latinoamérica.",
    duration: "32 min",
    date: "15 Abr 2026",
    isNew: true,
    coverIcon: EPISODE_ICONS.podcast,
    spotifyUrl: "https://open.spotify.com",
    appleUrl: "https://podcasts.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: 2,
    number: "02",
    title: "El arte de la conversación automatizada",
    description: "Del script rígido al diálogo natural: cómo diseñar conversaciones de IA que se sientan humanas.",
    duration: "28 min",
    date: "8 Abr 2026",
    coverIcon: EPISODE_ICONS.shuffle,
    spotifyUrl: "https://open.spotify.com",
    appleUrl: "https://podcasts.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: 3,
    number: "03",
    title: "WhatsApp como canal de negocio",
    description: "Por qué WhatsApp se convirtió en el canal dominante para atención al cliente en LATAM y cómo las empresas lo están aprovechando.",
    duration: "35 min",
    date: "1 Abr 2026",
    coverIcon: EPISODE_ICONS.video,
    spotifyUrl: "https://open.spotify.com",
    appleUrl: "https://podcasts.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: 4,
    number: "04",
    title: "Cuando el robot necesita al humano",
    description: "Human-in-the-loop: los casos donde la intervención humana sigue siendo irreemplazable.",
    duration: "30 min",
    date: "25 Mar 2026",
    coverIcon: EPISODE_ICONS.loop,
    spotifyUrl: "https://open.spotify.com",
    appleUrl: "https://podcasts.apple.com",
    youtubeUrl: "https://youtube.com",
  },
]
