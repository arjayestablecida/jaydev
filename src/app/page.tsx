import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />


      <footer className="border-t border-white/10 bg-[#080d1a] px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white">
                MyPortfolio<span className="text-cyan-400">.</span>
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Building practical solutions through technology.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#home" className="transition hover:text-cyan-400">
                Home
              </a>
              <a href="#about" className="transition hover:text-cyan-400">
                About
              </a>
              <a href="#projects" className="transition hover:text-cyan-400">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2026 MyPortfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
