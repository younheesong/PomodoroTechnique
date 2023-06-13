import Button from "@/components/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";

const FeedItemRemoveButton = () => {
  return (
    <Button>
      <XMarkIcon className="h-8 w-8 text-red-700 rounded-full flex items-center justify-center" />
    </Button>
  );
};
export default FeedItemRemoveButton;
