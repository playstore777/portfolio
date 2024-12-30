import TypeScriptIcon from "@/shared/assets/icons/typescript.svg";
import JavaScriptIcon from "@/shared/assets/icons/square-js.svg";
import ChromeIcon from "@/shared/assets/icons/chrome.svg";
import GitHubIcon from "@/shared/assets/icons/github.svg";
import ReactIcon from "@/shared/assets/icons/react.svg";
import HTMLIcon from "@/shared/assets/icons/html5.svg";
import CSSIcon from "@/shared/assets/icons/css3.svg";
import VercelIcon from "@/shared/assets/icons/vercel-icon.svg";
import NodeJSIcon from "@/shared/assets/icons/node-js.svg";
import FigmaIcon from "@/shared/assets/icons/figma-1.svg";

export interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
}

export const TOOLBOX_ITEMS: ToolboxItem[] = [
  {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Typescript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Vercel",
    iconType: VercelIcon,
  },
  {
    title: "Node",
    iconType: NodeJSIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];
