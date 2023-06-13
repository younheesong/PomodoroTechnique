const FeedItemSection = ({ children, isLast }) => {
  return (
    <li>
      <div className="relative pb-8">
        {!isLast && (
          <span
            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white bg-opacity-70"
            aria-hidden="true"
          />
        )}
        <div className="relative flex space-x-3">{children}</div>
      </div>
    </li>
  );
};
export default FeedItemSection;
