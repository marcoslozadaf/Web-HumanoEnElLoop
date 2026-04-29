import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Hosts } from "@/components/Hosts"
import { Episodes } from "@/components/Episodes"
import { Community } from "@/components/Community"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Hosts />
      <Episodes />
      <Community />
      <Newsletter />
      <Footer />
    </main>
  )
}
