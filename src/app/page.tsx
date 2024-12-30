import {
  HeroSection,
  ProjectsSection,
  TapeSection,
  AboutSection,
  Footer,
} from "@/widgets";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 z-10 relative h-full">
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <AboutSection />
      </div>
      <div className="bg-gray-900 text-white antialiased font-serif sticky bottom-0 left-0 w-full z-[1]">
        <Footer />
      </div>
    </>
  );
}
