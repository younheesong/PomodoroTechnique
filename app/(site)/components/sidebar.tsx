"use client";
import NavItem from "../../../components/NavItem";
import SidebarSection from "./SidebarSection";
const Sidebar = () => {
  return (
    <SidebarSection>
      <NavItem to="/roadmaps">
        <NavItem.Icon iconName="ClipboardDocumentListIcon" />
        <NavItem.Label label="로드맵" />
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
