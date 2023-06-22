import FeedItemIcon from "./FeedItemIcon";
import FeedItemAddButton from "./FeedItemAddButton";
import FeedItemRemoveButton from "./FeedItemRemoveButton";
import FeedItemSection from "./FeedItemSection";
const FeedItem = ({ children }) => {
  return <div>{children}</div>;
};
FeedItem.Section = FeedItemSection;
FeedItem.AddButton = FeedItemAddButton;
FeedItem.RemoveButton = FeedItemRemoveButton;
FeedItem.Icon = FeedItemIcon;
export default FeedItem;
