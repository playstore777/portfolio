import { twMerge } from "tailwind-merge";

interface props {
  handleClick: () => void;
  label: string;
  className?: string;
}

const FeedbackButton: React.FC<props> = ({ handleClick, label, className }) => {
  return (
    <button
      className={twMerge(
        "text-white bg-gray-600 opacity-40 py-3 px-4 rounded-md after:content-[''] after:w-1 after:h-[105px] after:bg-white after:absolute after:top-[-210%] after:rounded-md",
        className
      )}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default FeedbackButton;
