import { CheckIcon } from "@heroicons/react/24/outline";

const FeedItemIcon = () => {
  return (
    <div>
      <span className="h-8 w-8 bg-gray-500 rounded-full flex items-center justify-center">
        <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </span>
    </div>
  );
};
export default FeedItemIcon;
