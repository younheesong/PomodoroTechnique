import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

export const HeaderMenus = [
  {
    name: "TO DO",
    href: "#",
    icon: (
      <ClipboardDocumentListIcon
        className="mr-4 h-6 w-6 flex-shrink-0 text-white"
        aria-hidden="true"
      />
    ),
    current: true,
  },
  {
    name: "칸반 보드",
    href: "#",
    icon: (
      <ViewColumnsIcon
        className="mr-4 h-6 w-6 flex-shrink-0 text-white"
        aria-hidden="true"
      />
    ),
    current: false,
  },
  {
    name: "완료된 과제들",
    href: "#",
    icon: (
      <ClipboardDocumentCheckIcon
        className="mr-4 h-6 w-6 flex-shrink-0 text-white"
        aria-hidden="true"
      />
    ),
    current: false,
  },
  {
    name: "설정",
    href: "#",
    icon: (
      <Cog6ToothIcon
        className="mr-4 h-6 w-6 flex-shrink-0 text-white"
        aria-hidden="true"
      />
    ),
    current: false,
  },
];
