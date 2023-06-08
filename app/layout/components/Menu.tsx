import MenuSection from "./MenuSection";
import NavItem from "../../../components/NavItem";

const Menu = () => {
  return (
    <MenuSection>
      <NavItem to="/roadmaps">
        <NavItem.Label label="로드맵" />
      </NavItem>
      <NavItem to="/">
        <NavItem.Label label="Canvan" />
      </NavItem>
      <NavItem to="/">
        <NavItem.Label label="Completed Tasks" />
      </NavItem>
      <NavItem to="/">
        <NavItem.Label label="Settings" />
      </NavItem>
    </MenuSection>
  );
};
export default Menu;
