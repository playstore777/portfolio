import { ToolboxItems } from "@/features";
import { ToolboxItem } from "@/entities";

interface props {
  items: ToolboxItem[];
}

const Toolbox: React.FC<props> = ({ items }) => (
  <>
    <ToolboxItems
      items={items}
      itemsWrapperClassName="animate-scroll-left [animation-duration:30s]"
    />
    <ToolboxItems
      items={items}
      className="mt-6"
      itemsWrapperClassName="animate-scroll-right [animation-duration:15s]"
    />
  </>
);

export default Toolbox;
