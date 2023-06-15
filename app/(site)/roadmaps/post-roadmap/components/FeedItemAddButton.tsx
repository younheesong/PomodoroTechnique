import Button from "@/components/Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

type IFeedItemAddButton = {
  onClick: () => void;
};

const FeedItemAddButton = ({ onClick }: IFeedItemAddButton) => {
  return (
    <Button onClick={onClick}>
      <PlusCircleIcon className="h-8 w-8 text-green-700 rounded-full flex items-center justify-center" />
    </Button>
  );
};
export default FeedItemAddButton;
