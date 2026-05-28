import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-[#f8f6f2] text-[#111111] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </main>
  );
}