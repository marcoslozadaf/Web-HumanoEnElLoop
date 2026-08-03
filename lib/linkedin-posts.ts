export interface LinkedInPost {
  id: string
  embedUrl: string
  author: string
  role: string
  height: number
}

export const linkedInPosts: LinkedInPost[] = [
  {
    id: "7453462901186736128",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7453462901186736128?collapsed=1",
    author: "Marcos Lozada Freytes",
    role: "Co-Founder at Bircle",
    height: 543,
  },
  {
    id: "7455327580808790016",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7455327580808790016?collapsed=1",
    author: "José Romero Victorica",
    role: "Founder & CEO de Allus Global BPO Center",
    height: 533,
  },
  // TODO: post de LinkedIn sobre el episodio con Diego Malat ("La calidad en la era de los Agentes de IA")
  // pendiente de que Marcos pase el link. Descomentar y completar embedUrl/height cuando llegue.
  // {
  //   id: "PENDIENTE",
  //   embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:PENDIENTE?collapsed=1",
  //   author: "Diego Malat",
  //   role: "Founder & CEO de Tripointhub",
  //   height: 533,
  // },
]
