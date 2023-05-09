import NavItemIcon from "./NavItemIcon";
import NavItemLabel from "./NavItemLabel";
const NavItem = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <div className="hover:bg-slate-800 group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md">
      {children}
    </div>
  );
};
NavItem.Icon = NavItemIcon;
NavItem.Label = NavItemLabel;
export default NavItem;
