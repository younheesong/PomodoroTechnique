import TextInput from "@/components/TextInput";
import TextareaInput from "@/components/TextareaInput";
import NumberInput from "@/components/NumberInput";
import FeedItem from "./FeedItem";
const PostFeedItem = ({ key, event, isLast }) => {
  return (
    <FeedItem key={key}>
      <FeedItem.Section isLast={isLast}>
        <FeedItem.Icon />
        <div className="flex items-start flex-1 justify-between space-x-4">
          <div className="w-full flex flex-col flex-1">
            <TextInput />
            <div className="ml-4 mt-4">
              <TextareaInput />
            </div>
            <div className="flex items-center w-[200px]">
              <NumberInput defaultValue={1} min={0} />H
              <NumberInput defaultValue={30} min={0} max={60} />M
            </div>
            <div className="flex justify-end">
              <div className="flex w-20">
                <FeedItem.AddButton />
                <FeedItem.RemoveButton />
              </div>
            </div>
          </div>
        </div>
      </FeedItem.Section>
    </FeedItem>
  );
};
export default PostFeedItem;
