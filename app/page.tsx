import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectonDivider";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience /> 
      <Contact />
    </main>
  );
}
