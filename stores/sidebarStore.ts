import { StateCreator } from "zustand";
export interface ISidebarStates {
  toggleSidebar: boolean;
  setToggleSidebar: (toggle: boolean) => void;
}
export const createSidebarState: StateCreator<ISidebarStates, [], []> = (
  set
) => ({
  toggleSidebar: false,
  setToggleSidebar: (toggleValue) =>
    set(() => ({
      toggleSidebar: toggleValue,
    })),
});
