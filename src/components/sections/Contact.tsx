import { Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b1220] px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Let us Work Together
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
          I am open to opportunities where I can apply my knowledge in software
          development, contribute to meaningful projects, and continue growing
          as a developer.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-[#080d1a] transition hover:bg-cyan-400"
          >
            <Mail size={19} />
            Send Me an Email
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <MessageCircle size={19} />
            View My Projects
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/arjayestablecida"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
          >
            GitHub Profile ↗
          </a>

          <a
            href="https://www.linkedin.com/in/arjay-estabecida-0707aa147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition hover:text-cyan-400"
          >
            LinkedIn Profile ↗
          </a>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Send size={16} className="text-cyan-400" />
            Available for professional opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
