import Button from "@/components/Button";
import SidebarDialog from "./layout/components/SidebarDialog";
import SidebarToggleButton from "./layout/components/SidebarToggleButton";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <div className="sticky shadow-zinc-500/10 shadow-xl top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 sm:px-6">
      <SidebarToggleButton />
      <SidebarDialog>
        <Sidebar />
      </SidebarDialog>

      <div className="flex-1 text-center md:text-left text-sm font-semibold leading-6 text-white">
        Pomodoro
      </div>
      <div>
        <Button
          bgColor="bg-white"
          textColor="text-zinc-900"
          borderRound="rounded-md"
        >
          <span className="text-sm">Login</span>
        </Button>
      </div>
    </div>
  );
};
export default Header;
