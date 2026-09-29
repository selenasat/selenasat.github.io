export default function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-10 flex items-center">
      <div className="max-w-7xl mx-auto w-full pt-24">
        <div className="max-w-5xl">

          {/* Personal Introduction */}
          <p className="mb-5 text-lg text-neutral-500">
            Hello, my name is Selena Sat
          </p>

          {/* Professional Title */}
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Full-Stack Developer · UI/UX Designer
          </p>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-semibold leading-none tracking-tight">
            Software builder by trade, designer by choice.
          </h1>

          {/*Location*/}
          <p className="mb-8 text-sm text-neutral-500">
            ✦ Based in Seattle, WA
          </p>

          {/* Description */}
          <p className="mt-10 max-w-2xl text-lg text-neutral-600 leading-relaxed">
            I build modern web applications and thoughtful digital experiences.
            Combining full-stack development with UI/UX design, I create
            intuitive, end-to-end solutions that solve real problems.
          </p>

          {/* Call to Action */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition hover:-translate-y-1"
            >
              View my work
            </a>

            <a
              href="https://github.com/selenasat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm transition hover:bg-white hover:-translate-y-1"
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
