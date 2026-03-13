import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import RealProjects from "@/components/RealProjects";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      {/* The Scrollytelling Section */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Experience / CV Section */}
      <Experience />

      {/* The Work Grid Section (Reviews) */}
      <RealProjects />
      <Projects />

      {/* Bottom Contact Section */}
      <Contact />
    </main>
  );
}
