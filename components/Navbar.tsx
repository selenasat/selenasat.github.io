export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-[#f8f6f2]/70">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#top"
          className="font-medium tracking-tight hover:opacity-60 transition-opacity"
        >
          Selena Sat
        </a>

        {/* Navigation Links */}
        <nav className="flex gap-8 text-sm text-neutral-600">
          <a
            href="#projects"
            className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
