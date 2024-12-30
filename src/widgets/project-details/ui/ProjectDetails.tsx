import Markdown from "react-markdown";

import { Project } from "@/entities";
import { HeroImage } from "@/features";
import ExternalLink from "@/shared/assets/icons/arrow-up-right.svg";

interface props {}

const ProjectDetails: React.FC<Project & props> = ({
  title,
  imageUrl,
  tags,
  links,
  fullDescription,
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Image */}
      <HeroImage title={title} imageUrl={imageUrl} />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Project Description */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-100">{title}</h1>
          <article className="prose prose-purple prose-invert mt-6 max-w-none">
            <Markdown>{fullDescription}</Markdown>
          </article>
        </div>

        {/* Right Column - Metadata */}
        <div className="h-fit lg:sticky lg:top-8">
          <div className="space-y-8 rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            {/* Project Links */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Project Links
              </h2>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-gray-100">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="p-4 border border-purple-700/50 bg-purple-900/30 text-purple-200"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {/* <RelatedProjects
      currentProject={{
        title,
        date,
        imageUrl,
        tags,
        links,
        fullDescription,
        description,
        slug,
      }}
      allProjects={projectsData}
    /> */}
    </div>
  );
};

export default ProjectDetails;
