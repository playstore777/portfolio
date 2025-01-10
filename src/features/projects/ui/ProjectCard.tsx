import Image from "next/image";
import Link from "next/link";

import ArrowUpRightIcon from "@/shared/assets/icons/arrow-up-right.svg";
import { Project } from "@/entities/projects/types/project";
import { Card }from "@/shared";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card
      className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky hover:after:outline-yellow-400"
      style={{
        top: `calc(64px + ${index * 40}px)`,
      }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <div className="bg-gradient-to-r from-yellow-300 to-orange-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"></div>
          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
            {project.title}
          </h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="mt-4 md:mt-5">
            <p className="text-sm md:text-base text-white/50">
              {project.description}
            </p>
          </div>
          <Link href={`projects/${project.slug}`}>
            <div className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
              <span>View Project</span>
              <ArrowUpRightIcon className="size-4" />
            </div>
          </Link>
        </div>
        <div className="relative">
          <Image
            className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none border-2 border-white/10 rounded-xl"
            src={project.imageUrl}
            alt={project.title}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
