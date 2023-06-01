import Link from "next/link";
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
    <Link href={to}>
      <div className="hover:bg-slate-800 group text-white flex items-center px-2 py-2 text-sm font-medium rounded-md">
        {children}
      </div>
    </Link>
  );
};
NavItem.Icon = NavItemIcon;
NavItem.Label = NavItemLabel;
export default NavItem;
