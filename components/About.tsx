export default function About() {
  const staples = [
    { label: "Learning", value: "Next.js 14 & Framer Motion" },
    { label: "Cooking", value: "Mentaiko Pasta" },
    { label: "Drinking", value: "Iced Matcha Latte" },
    { label: "Building", value: "Persona Palette App" },
  ];

  return (
    <section
      id="about"
      className="px-8 py-32 border-t border-neutral-200"
    >
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-neutral-900">
          Beyond the Code
        </h2>

        <div className="mt-10 text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            I’ve always been fascinated by the space where technical engineering meets human-centric design.
            Currently, I’m navigating the complexities of the **aerospace industry**, a role that demands
            high-level precision and logical rigor. However, my creative heart lives in web development and UI/UX design.
          </p>

          <p>
            For me, building for the web is about more than just writing clean code—it's about creating
            an experience that feels effortless for the user. My toolkit is diverse: I’m just as comfortable
            architecting **cloud-based AWS solutions** and querying **SQL databases** as I am prototyping
            a fluid interface in **Figma** or experimenting with **Machine Learning** to solve modern problems.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-medium text-neutral-900 mb-4 italic">The "Offline" Version</h3>
            <p>
              If we aren't talking shop, we’re probably talking food. I’m a food blogger and a dedicated
              matcha enthusiast who loves the process of learning new recipes (the kitchen is basically
              my second sandbox). Most of my downtime is spent with my kid and our dog, usually
              outdoors or brainstorming my next personal project.
            </p>
          </div>
        </div>

        {/* Current Staples Section */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
            Current Staples
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {staples.map((staple) => (
              <div key={staple.label}>
                <p className="text-sm font-medium text-neutral-900">{staple.label}</p>
                <p className="text-sm text-neutral-500 mt-1">{staple.value}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-lg font-medium text-neutral-900">
          Let’s build something meaningful together!
        </p>
      </div>
    </section>
  );
}