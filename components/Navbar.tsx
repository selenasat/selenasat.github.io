export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-[#f8f6f2]/70">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <h1 className="text-lg font-semibold tracking-wide">
          Selena Sat
        </h1>

        <nav className="flex gap-8 text-sm text-neutral-600">
          <a href="#projects" className="hover:text-black transition">
            Projects
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}