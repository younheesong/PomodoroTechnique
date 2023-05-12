"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSidebarStore } from "@/stores/store";
import Button from "@/components/Button";
const SidebarToggleButton = () => {
  const { setToggleSidebar } = useSidebarStore();
  return (
    <div className="md:hidden">
      <Button onClick={() => setToggleSidebar(true)}>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Button>
    </div>
  );
};
export default SidebarToggleButton;
