import FeedItem from "./FeedItem";
const PostFeedItem = ({ isLast, children, addItem, removeItem }) => {
  return (
    <FeedItem>
      <FeedItem.Section isLast={isLast}>
        <FeedItem.Icon />
        <div className="flex items-start flex-1 justify-between space-x-4">
          <div className="w-full flex flex-col flex-1">
            {children}
            <div className="flex justify-end">
              <div className="flex w-20">
                <FeedItem.AddButton onClick={addItem} />
                <FeedItem.RemoveButton onClick={removeItem} />
              </div>
            </div>
          </div>
        </div>
      </FeedItem.Section>
    </FeedItem>
  );
};
export default PostFeedItem;
