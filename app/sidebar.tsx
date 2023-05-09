import NavItem from "./layout/components/NavItem";
import SidebarSection from "./layout/components/SidebarSection";
const Sidebar = () => {
  return (
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
  );
};
export default Sidebar;
