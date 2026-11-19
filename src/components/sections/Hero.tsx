"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Decoration */}
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 font-medium tracking-widest text-cyan-400">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Hi, I am a
            <span className="block text-cyan-400">Software Developer.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            I build practical and user-friendly web applications using modern
            technologies. I enjoy solving problems, learning new tools, and
            turning ideas into working software.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-[#080d1a] transition hover:bg-cyan-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://github.com/arjayestablecida"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 transition hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/arjay-estabecida-0707aa147/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 transition hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="text-gray-400 transition hover:text-cyan-400"
            >
              <Mail size={23} />
            </a>
          </div>
        </motion.div>

        {/* Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 sm:h-96 sm:w-96">
            <div className="absolute inset-5 rounded-full border border-dashed border-cyan-400/30" />

            <div className="text-center">
              <div className="text-8xl font-bold text-cyan-400">{"</>"}</div>
              <p className="mt-5 text-sm tracking-[0.3em] text-gray-400">
                CODE · CREATE · INNOVATE
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 transition hover:text-cyan-400"
      >
        <ArrowDown className="animate-bounce" size={25} />
      </a>
    </section>
  );
}
