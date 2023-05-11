"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebarStore } from "@/stores/store";
const HamburgerButton = () => {
  const { setToggleSidebar } = useSidebarStore();
  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-400 md:hidden"
      onClick={() => setToggleSidebar(true)}
    >
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};
export default HamburgerButton;
