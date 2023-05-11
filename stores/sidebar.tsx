// import { IAnsState } from '@/pages/test-paper/test';
import { StateCreator } from "zustand";

export interface ISidebarStates {
  toggleSidebar: boolean;
  setToggleSidebar: (openSidebar: boolean) => void;
}

export const createSidebarStore: StateCreator<ISidebarStates> = (set) => ({
  toggleSidebar: false,
  setToggleSidebar: (toggleValue) =>
    set(() => ({
      toggleSidebar: toggleValue,
    })),
});
