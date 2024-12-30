import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
};
