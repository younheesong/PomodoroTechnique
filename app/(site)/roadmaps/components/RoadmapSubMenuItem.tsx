const RoadmapSubMenuItem = ({ title, imgSrc }: { title: string; imgSrc }) => {
  return (
    <div className="hover:border cursor-pointer rounded-md py-2 flex flex-col justify-center items-center">
      <img src={imgSrc} alt="submenu_image" className="w-12 h-12" />
      <span className="mt-2 text-sm">{title}</span>
    </div>
  );
};

export default RoadmapSubMenuItem;
