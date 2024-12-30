import portfolioPage from "@/shared/assets/images/portfolio-landing-page.png";
import lowHomePage from "@/shared/assets/images/low-home-page.png";
import dynaMotion from "@/shared/assets/images/dyna-motion.png";

export const projects = [
  {
    title: "Low",
    description:
      "Think Medium.com, but with a twist that makes life easier for both writers and readers. The main idea is simple: write something once, then remix and reuse it however you want. No more starting from scratch every time.",
    imageUrl: lowHomePage,
    tags: [
      "React",
      "Redux",
      "TypeScript",
      "Vitest",
      "Lexical",
      "ESLint",
      "Firebase",
      "Vercel",
      "DictionaryAPI",
    ],
    slug: "low",
    links: [
      { title: "Live Demo", url: "https://low-pi.vercel.app/" },
      { title: "GitHub", url: "https://github.com/playstore777/low" },
    ],
    fullDescription:
      "## Problem\n\n" +
      'Existing platforms like Medium treat each piece of writing as a static, "one-and-done" effort, making it challenging for writers to reuse or adapt their content.\n\n' +
      "Writers often need to start from scratch for new projects, leading to inefficiency. Additionally, there was a lack of features that prioritized ease of use and accessibility for both writers and readers.\n\n" +
      "## Action\n\n" +
      'Developed a content platform with a "write once, remix endlessly" philosophy, placing a strong emphasis on reusability. Writers can easily update, repurpose, and adapt their stories without starting from scratch. \n\n' +
      "The platform supports CRUD operations for posts, nested commenting for discussions, claps for engagement, and profile customization. Features like a built-in dictionary and light/dark mode enhance accessibility.\n\n" +
      "## Results\n\n" +
      "- Streamlined reusability, enabling writers to efficiently adapt and repurpose existing content for new purposes, saving time and effort.\n\n" +
      "- Enhanced engagement through nested discussions, claps, and profile customization.\n" +
      "- Improved user experience with features like light/dark mode and a built-in dictionary.\n" +
      "- A platform that prioritizes low-effort yet feature-rich content creation and interaction, offering significant value to both writers and readers.\n",
  },
  {
    title: "Dyna Motion",
    description:
      "Automated tool to generate up-to-date promo videos using Trello, GitHub Actions, and serverless APIs. Perfect for creating dynamic demos and feature walkthroughs!",
    imageUrl: dynaMotion,
    tags: [
      "TypeScript",
      "React",
      "Remotion",
      "GitHub Actions",
      "Trello Web-Hooks",
      "Vercel",
      "Nodejs",
      "Serverless functions",
    ],
    slug: "dyna-motion",
    links: [
      {
        title: "Live Demo",
        url: "https://playstore777.github.io/dyna-motion/",
      },
      { title: "GitHub", url: "https://github.com/playstore777/dyna-motion" },
    ],
    fullDescription:
      "## Problem\n\n" +
      "Manually creating and updating promotional videos for a dynamic application like Low was time-consuming and error-prone. Traditional approaches lacked automation and could not ensure videos remained up-to-date with the latest application data, leading to inefficiencies in showcasing features and functionality.\n\n" +
      "## Action\n\n" +
      "Developed Dyna-Motion, an automated video generation system built using Remotion. When a card in Trello is moved to a specific list, a webhook triggers a serverless function that activates a GitHub Action pipeline. This pipeline generates a video using up-to-date data retrieved from a separate serverless API hosted on Vercel. \n\n" +
      "The video seamlessly integrates React components from Low to accurately recreate its UI, providing a dynamic demo or walkthrough of its features. The application is powered by modern technologies like TypeScript, React, Node.js serverless functions, and Vercel for efficient hosting and scalability.\n\n" +
      "## Results\n\n" +
      "- Automated video generation, eliminating the need for manual effort and ensuring promotional videos are always current with the latest application data.\n\n" +
      "- Enhanced reusability by leveraging React components from Low, creating consistent and accurate demos or walkthroughs.\n" +
      "- Improved efficiency and scalability through serverless functions and a streamlined pipeline using Trello webhooks and GitHub Actions.\n" +
      "- Delivered a robust, low-maintenance system for producing high-quality, up-to-date promotional videos, significantly reducing time and effort for the marketing team.\n",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio built with Next.js, Tailwind, and Feature-Sliced Design. Showcases projects, skills, and about me with a sleek, responsive design and seamless navigation.",
    imageUrl: portfolioPage,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Framer-motion",
      "eslint",
      "Vercel",
      "Feature Sliced Design architectural methodology",
    ],
    slug: "portfolio",
    links: [
      { title: "Live Demo", url: "https://github.com/playstore777/portfolio" },
      { title: "GitHub", url: "https://github.com/playstore777/portfolio" },
    ],
    fullDescription:
      "## Purpose\n\n" +
      "To highlight skills, showcase projects (like Low and Dyna-Motion), and provide a professional online presence.\n\n" +
      "## Features\n\n" +
      "- Clean and modern UI/UX.\n\n" +
      "- Fully responsive across devices.\n" +
      "- Interactive sections for projects, about, and contact.\n" +
      "- Integrated storytelling approach with a focus on user engagement\n",
  },
];
