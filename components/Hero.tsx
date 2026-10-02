"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-10 py-16 md:py-0 flex items-center">
      <div className="max-w-7xl mx-auto w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">
          
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Personal Introduction */}
            <p className="mb-5 text-lg text-neutral-500">
              Hello, my name is Selena Sat
            </p>

            {/* Professional Title */}
            <p className="mb-8 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Software Engineer · Full-Stack · UI/UX
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
              Software builder by trade, designer by choice.
            </h1>

            {/*Location*/}
            <p className="mt-8 text-sm text-neutral-500">
              ✦ Based in Seattle, WA
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">
              I build modern web applications and thoughtful digital
              experiences. Combining full-stack development with UI/UX design, I
              create intuitive, end-to-end solutions that solve real problems.
            </p>

            {/* Call to Action */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
              >
                View my work
              </a>

              <a
                href="/selena_sat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm transition-all duration-200 hover:bg-white hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
              >
                Resume ↗
              </a>
            </div>

            <div className="mt-5 flex gap-6">
              <a
                href="https://github.com/selenasat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/selenasat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="block mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e9e6df]">
              <img
                src="/selena-portrait.jpg"
                alt="Portrait of Selena Sat"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
