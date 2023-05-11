import SidebarDialog from "./layout/components/SidebarDialog";
import SidebarSection from "./layout/components/SidebarSection";
import NavItem from "./layout/components/NavItem";
import HamburgerButton from "./layout/components/HamburgerButton";

const Header = () => {
  return (
    <div className="sticky shadow-zinc-500/10 shadow-xl top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 sm:px-6">
      <HamburgerButton />

      <SidebarDialog>
        <SidebarSection>
          <NavItem to="/">
            <NavItem.Icon iconName="ClipboardDocumentListIcon" />
            <NavItem.Label label="To Dos" />
          </NavItem>
          <NavItem to="/">
            <NavItem.Icon iconName="ViewColumnsIcon" />
            <NavItem.Label label="Canvan" />
          </NavItem>
          <NavItem to="/">
            <NavItem.Icon iconName="ClipboardDocumentCheckIcon" />
            <NavItem.Label label="Completed Tasks" />
          </NavItem>
          <NavItem to="/">
            <NavItem.Icon iconName="Cog6ToothIcon" />
            <NavItem.Label label="Settings" />
          </NavItem>
        </SidebarSection>
      </SidebarDialog>

      <div className="flex-1 text-center md:text-left text-sm font-semibold leading-6 text-white">
        Pomodoro
      </div>
      <a href="#" className="text-white text-sm">
        로그인
      </a>
    </div>
  );
};
export default Header;
