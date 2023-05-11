import { create } from "zustand";

import { ISidebarStates, createSidebarStore } from "./sidebar";
// store 생성
export const useSidebarStore = create<ISidebarStates>()((...a) => ({
  ...createSidebarStore(...a),
}));
