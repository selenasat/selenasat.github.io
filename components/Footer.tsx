export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Selena Sat
        </p>

        <p className="text-sm text-neutral-400">
          Built with Next.js · React · TypeScript
        </p>
      </div>
    </footer>
  );
}