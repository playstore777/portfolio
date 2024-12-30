import ChromeIcon from "@/shared/assets/icons/chrome.svg";
import JavaScriptIcon from "@/shared/assets/icons/square-js.svg";
import GitHubIcon from "@/shared/assets/icons/github.svg";
import ReactIcon from "@/shared/assets/icons/react.svg";
import HTMLIcon from "@/shared/assets/icons/html5.svg";
import CSSIcon from "@/shared/assets/icons/css3.svg";

export interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
}

export const TOOLBOX_ITEMS = [
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
  // {
  //   title: "Typescript",
  //   icon: "",
  // },
];
