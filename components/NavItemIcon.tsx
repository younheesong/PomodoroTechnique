import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

type IconNameType =
  | "ClipboardDocumentListIcon"
  | "ClipboardDocumentCheckIcon"
  | "Cog6ToothIcon"
  | "ViewColumnsIcon";

const NavItemIcon = ({ iconName }: { iconName: IconNameType }) => {
  const IconComponents = {
    ClipboardDocumentListIcon: () => (
      <ClipboardDocumentListIcon className="mr-4 h-6 w-6 flex-shrink-0 text-white" />
    ),
    ClipboardDocumentCheckIcon: () => (
      <ClipboardDocumentCheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-white" />
    ),
    Cog6ToothIcon: () => (
      <Cog6ToothIcon className="mr-4 h-6 w-6 flex-shrink-0 text-white" />
    ),
    ViewColumnsIcon: () => (
      <ViewColumnsIcon className="mr-4 h-6 w-6 flex-shrink-0 text-white" />
    ),
  };
  const IconComponent = IconComponents[iconName];
  return <IconComponent />;
};
export default NavItemIcon;
