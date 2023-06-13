"use client";
import { createContext, useContext } from "react";
import { User } from "@/types/user";
import useFirebaseAuth from "@/hooks/useFirebaseAuth";

export interface InUserContext {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}
export const UserContext = createContext<InUserContext>({
  user: null,
  loading: false,
  signInWithGoogle: () => ({}),
  signOut: () => ({}),
});

export const UserProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useFirebaseAuth();

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
