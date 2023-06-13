import FeedItemIcon from "./FeedItemIcon";
import FeedItemAddButton from "./FeedItemAddButton";
import FeedItemRemoveButton from "./FeedItemRemoveButton";
import FeedItemSection from "./FeedItemSection";
const FeedItem = ({ children, key }) => {
  return <div key={key}>{children}</div>;
};
FeedItem.Section = FeedItemSection;
FeedItem.AddButton = FeedItemAddButton;
FeedItem.RemoveButton = FeedItemRemoveButton;
FeedItem.Icon = FeedItemIcon;
export default FeedItem;
