import { projects } from "@/entities/projects";
import { ProjectDetails } from "@/widgets";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const Footer = () => {
  return (
    <div className="text-center text-white/50 pb-3">
      @Copyright Mohammed Adil Sharif 2024
    </div>
  );
};

export default function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-1 p-6 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-100">
              Project Not Found
            </h1>
            <p className="mt-4 text-gray-400">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 p-6 sm:px-8">
        <ProjectDetails {...project} />
      </div>
      <Footer />
    </main>
  );
}
