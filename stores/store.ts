import { create } from "zustand";

import { ISidebarStates, createSidebarState } from "./sidebarStore";

// store 생성

export const useSidebarStore = create<ISidebarStates>()((...a) => ({
  ...createSidebarState(...a),
}));
