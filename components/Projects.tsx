export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-32"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT CARD */}
          <div className="group cursor-pointer">

            <div className="h-[400px] bg-neutral-200 rounded-[2rem] overflow-hidden">
              <div className="w-full h-full group-hover:scale-105 transition duration-500 bg-gradient-to-br from-blue-200 to-purple-200" />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold">
                SLP Exercise App
              </h3>

              <p className="mt-3 text-neutral-600 leading-relaxed">
                AI-assisted speech therapy platform focused on helping
                Parkinson’s patients improve communication through guided exercises.
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  React
                </span>

                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  TypeScript
                </span>

                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  UI/UX
                </span>
              </div>
            </div>

          </div>

          {/* SECOND PROJECT */}
          <div className="group cursor-pointer">

            <div className="h-[400px] bg-neutral-200 rounded-[2rem] overflow-hidden">
              <div className="w-full h-full group-hover:scale-105 transition duration-500 bg-gradient-to-br from-neutral-300 to-neutral-100" />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold">
                CI/CD Pipeline Project
              </h3>

              <p className="mt-3 text-neutral-600 leading-relaxed">
                Automated deployment workflow integrating GitHub Actions
                and cloud infrastructure for continuous delivery.
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  GitHub Actions
                </span>

                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  AWS
                </span>

                <span className="text-sm bg-white px-3 py-1 rounded-full border">
                  DevOps
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}