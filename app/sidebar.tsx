import { HeaderMenus } from "@/data/HeaderMenus";
import { classNames } from "@/utils/common";
const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-grow flex-col overflow-y-auto">
      <div className="flex flex-shrink-0 items-center px-4"></div>
      <div className="mt-5 flex flex-1 flex-col">
        <nav className="flex-1 space-y-1 px-2 pb-4">
          {HeaderMenus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "bg-gray-800" : " hover:bg-gray-800",
                "group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
